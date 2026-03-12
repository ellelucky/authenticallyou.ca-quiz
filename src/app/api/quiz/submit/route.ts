import { NextRequest, NextResponse } from 'next/server';
import { saveQuizResult } from '@/lib/quiz-storage';

async function fireGHLWebhook(payload: {
  name: string;
  email: string;
  phone: string;
  zone: string;
  headline: string;
  description: string;
  patterns: string[];
  support: string;
  styleInsights: string[];
}) {
  const webhookUrl = process.env.GHL_WEBHOOK_URL;
  if (!webhookUrl) return;

  const nameParts = payload.name.trim().split(' ');
  const firstName = nameParts[0] || '';
  const lastName = nameParts.slice(1).join(' ') || '';

  const body = {
    firstName,
    lastName,
    email: payload.email,
    phone: payload.phone,
    // Quiz results — use these as merge fields in GHL email templates
    quizZone: payload.zone,
    quizHeadline: payload.headline,
    quizDescription: payload.description,
    quizPatterns: payload.patterns.join('\n'),
    quizSupport: payload.support,
    quizStyleInsights: payload.styleInsights.join('\n'),
    // Tag for GHL automation branching
    tags: [`Quiz: ${payload.zone}`],
    source: 'Camera Confidence Zone Quiz',
  };

  try {
    await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
  } catch (err) {
    // Don't fail the quiz submission if webhook errors
    console.error('GHL webhook error:', err);
  }
}

async function fireDiscordNotification(payload: {
  name: string;
  email: string;
  phone: string;
  zone: string;
}) {
  const webhookUrl = process.env.DISCORD_WEBHOOK_URL;
  if (!webhookUrl) return;

  const zoneEmoji: Record<string, string> = {
    'Starting Zone': '🌱',
    'Building Zone': '🔨',
    'Growing Zone': '🌿',
    'Confident Zone': '✨',
    'Mastery Zone': '🏆',
  };

  const emoji = zoneEmoji[payload.zone] || '📋';

  try {
    await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        content: `${emoji} **New Quiz Lead!**\n**Name:** ${payload.name || 'Not provided'}\n**Email:** ${payload.email}\n**Phone:** ${payload.phone || 'Not provided'}\n**Zone:** ${payload.zone}`,
      }),
    });
  } catch (err) {
    console.error('Discord notification error:', err);
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, answers, results, styleInsights } = body;

    if (!answers || !results) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const id = await saveQuizResult({
      name: name || '',
      email: email || '',
      phone: phone || '',
      userAgent: request.headers.get('user-agent') || 'Unknown',
      ip: request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'Unknown',
      answers,
      results,
      styleInsights: styleInsights || [],
    });

    // Fire GHL webhook and Discord notification — non-blocking
    if (email) {
      await Promise.all([
        fireGHLWebhook({
          name: name || '',
          email,
          phone: phone || '',
          zone: results.zone,
          headline: results.headline,
          description: results.description,
          patterns: results.patterns || [],
          support: results.support,
          styleInsights: styleInsights || [],
        }),
        fireDiscordNotification({
          name: name || '',
          email,
          phone: phone || '',
          zone: results.zone,
        }),
      ]);
    }

    return NextResponse.json({ success: true, id });
  } catch (error) {
    console.error('Error saving quiz result:', error);
    return NextResponse.json(
      { error: 'Failed to save quiz result', detail: error instanceof Error ? error.message : String(error) },
      { status: 500 }
    );
  }
}
