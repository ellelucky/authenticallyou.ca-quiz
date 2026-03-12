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

const QUESTIONS: Record<number, string> = {
  1: "How often do you currently record video of yourself?",
  2: "Where do you usually show up on video (if at all)?",
  3: "How long have you been trying to show up on camera?",
  4: "When you think about recording today, you feel:",
  5: "How many videos do you actually publish per week?",
  6: "On average, how many takes does one video require?",
  7: "How long does one short video usually take?",
  8: "What happens most often after you hit record?",
  9: "Watching your videos back usually feels:",
  10: "Do you feel like you're performing on camera?",
  11: "How connected do you feel to yourself on camera?",
  12: "When you make a mistake on camera, you usually:",
  13: "Which thought shows up most while recording?",
  14: "When filming feels least intimidating, you imagine yourself:",
  15: "Which option feels most supportive right now?",
  16: "Your body feels safest on camera when you are:",
  17: "What feels more natural for you?",
  18: "Which type of video feels the most uncomfortable right now?",
  19: "Showing up on camera currently feels like:",
  20: "How consistent are you really with video?",
  21: "Which sounds most like your current situation?",
  22: "What's your biggest fear about showing up on camera?",
  23: "If nothing changed, what worries you most?",
  24: "What would help you most right now?",
  25: "How do you prefer to get unstuck?",
  26: "Which project would you most want to focus on next?",
  27: "How long have you been wanting to feel more confident on camera?",
  28: "Which feels most true right now?",
};

async function fireDiscordNotification(payload: {
  name: string;
  email: string;
  phone: string;
  zone: string;
  answers: Record<number, string[]>;
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

  // Format all answers
  const answersText = Object.entries(payload.answers)
    .sort(([a], [b]) => Number(a) - Number(b))
    .map(([id, ans]) => `**Q${id}. ${QUESTIONS[Number(id)] || ''}**\n${ans.join(', ')}`)
    .join('\n\n');

  const header = `${emoji} **New Quiz Lead!**\n**Name:** ${payload.name || 'Not provided'}\n**Email:** ${payload.email}\n**Phone:** ${payload.phone || 'Not provided'}\n**Zone:** ${payload.zone}\n\n─────────────────\n\n`;

  // Discord has a 2000 char limit per message — split if needed
  const full = header + answersText;
  const chunks: string[] = [];
  let remaining = full;
  while (remaining.length > 0) {
    if (remaining.length <= 2000) {
      chunks.push(remaining);
      break;
    }
    const split = remaining.lastIndexOf('\n\n', 2000);
    chunks.push(remaining.slice(0, split));
    remaining = remaining.slice(split + 2);
  }

  try {
    for (const chunk of chunks) {
      await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content: chunk }),
      });
    }
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
          answers,
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
