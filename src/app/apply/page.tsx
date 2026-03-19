"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import Link from "next/link";

export default function ApplyPage() {
  return (
    <div className="calm-gradient-radial min-h-screen text-[#3D3D3D] relative">

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 py-4 px-6 bg-[#FFF8F0]/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="font-script text-4xl md:text-6xl text-[#3D3D3D]">
            Authentically You
          </Link>
          <nav className="flex items-center gap-3 md:gap-5">
            <a
              href="https://www.skool.com/authenticallyou/about"
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-xs md:text-sm font-semibold bg-white text-[#3D3D3D] px-4 py-2 rounded-full border border-[#E0D5C1] hover:border-[#C9A86C] hover:text-[#C9A86C] transition-all"
            >
              Join the Community
            </a>
          </nav>
        </div>
      </header>

      <div className="px-6 pt-32 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl mx-auto"
        >

          {/* Hero */}
          <div className="bg-white/50 backdrop-blur-sm rounded-3xl p-10 md:p-14 soft-glow text-center mb-8">
            <Sparkles className="w-10 h-10 text-[#C9A86C] mx-auto mb-5" />
            <h1 className="font-serif text-3xl md:text-4xl text-[#3D3D3D] mb-4 leading-snug">
              Are you ready to feel <em>confident</em> on camera and finally create the videos your Personal Brand needs?
            </h1>
            <p className="font-sans text-[#6B6B6B] leading-relaxed">
              Videos are the fastest way to build connection + trust with your audience. Inside <strong>In The Studio</strong>, my team and I help you create high-impact video assets you feel confident and proud to publish — from your YouTube channel and personal brand to your VSL, shorts, reels, and course video content.
            </p>
          </div>

          {/* What you get */}
          <div className="bg-white/50 backdrop-blur-sm rounded-3xl p-10 md:p-14 soft-glow mb-8">
            <h2 className="font-serif text-2xl text-[#3D3D3D] mb-6 text-center">What you get</h2>

            <ul className="space-y-4 mb-8">
              {[
                "12-Week Live Cohort w/ structure, accountability, support + momentum",
                "Step-by-Step Guidance: YouTube + personal branding, VSLs, shorts/reels, course video content",
                "Pro level scripting, set design, filming, editing + publishing guidance",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 font-sans text-[#3D3D3D]">
                  <span className="text-lg leading-none mt-0.5">🌟</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <ul className="space-y-4 mb-8">
              {[
                "Insiders access to classroom content + call replays",
                "Priority invites to events + guest speaking opportunities",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 font-sans text-[#3D3D3D]">
                  <span className="text-lg leading-none mt-0.5">🔥</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <ul className="space-y-4 mb-8">
              {[
                "+ Full VIP access to Authentically You paid programs, content + community",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 font-sans text-[#3D3D3D]">
                  <span className="text-lg leading-none mt-0.5">🎁</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="border-t border-[#E0D5C1] pt-6">
              <p className="font-sans text-[#3D3D3D] flex items-start gap-3">
                <span className="text-lg leading-none mt-0.5">💎</span>
                <span>1:1 mentorship support available</span>
              </p>
            </div>

            <div className="mt-6 bg-[#C9A86C]/10 rounded-2xl px-6 py-4 text-center">
              <p className="font-sans text-sm font-semibold text-[#C9A86C]">
                💥 Applications are now open for our March 30 launch. Limited seats available.
              </p>
            </div>
          </div>

          {/* Programme outline link */}
          <div className="text-center mb-6">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-sm text-[#C9A86C] underline underline-offset-4 hover:text-[#b8975b] transition-colors"
            >
              View the full programme outline →
            </a>
          </div>

          {/* Two paths */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-white/80 flex flex-col"
            >
              <p className="font-sans text-xs uppercase tracking-widest text-[#6B6B6B]/60 mb-1">Standard</p>
              <h3 className="font-serif text-2xl text-[#3D3D3D] mb-5">$888<span className="font-sans text-sm font-normal text-[#6B6B6B]">/month</span></h3>
              <ul className="space-y-3 mb-8 flex-grow">
                {[
                  "12-week cohort with 3 weekly sessions: learn, lab, get pro direction + feedback",
                  "Learn scripting, filming, and confident on-camera delivery",
                  "Build your YouTube, brand, and VSL with a clear step-by-step system",
                  "Film, edit, and post consistently with support, not guesswork",
                  "A proven system you can repeat → not a one-time push",
                  "Build a content library that works for you long after Season 1 ends",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 font-sans text-sm text-[#3D3D3D]">
                    <span className="text-[#C9A86C] mt-0.5 shrink-0">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href="https://bts.authenticallyou.ca/insiders-all-access-call-form"
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans font-semibold border-2 border-[#C9A86C] text-[#C9A86C] px-8 py-3 rounded-full hover:bg-[#C9A86C] hover:text-white transition-all text-center"
              >
                Join Standard
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-gradient-to-br from-[#C9A86C]/10 to-[#C5B4E3]/10 backdrop-blur-sm rounded-2xl p-8 border border-[#C9A86C]/30 flex flex-col relative"
            >
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="bg-[#C9A86C] text-white text-xs font-sans font-semibold px-4 py-1 rounded-full flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  Only 5 spots
                </span>
              </div>
              <p className="font-sans text-xs uppercase tracking-widest text-[#6B6B6B]/60 mb-1 mt-2">Premium</p>
              <h3 className="font-serif text-2xl text-[#3D3D3D] mb-5">$1,288<span className="font-sans text-sm font-normal text-[#6B6B6B]">/month</span></h3>
              <ul className="space-y-3 mb-8 flex-grow">
                {[
                  "Everything in Standard + Only 5 spots available",
                  "Weekly 1:1 + Direct WhatsApp access for real-time support between sessions",
                  "Personal direction: we go deeper to uncover what's keeping you stuck on camera + in life",
                  "I personally help you release hidden blocks + find your voice + unique filming style",
                  "I'll review your camera presence, content, brand + positioning across platforms",
                  "I'll build your roadmap how I built mine: for max efficiency + unstoppable growth",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 font-sans text-sm text-[#3D3D3D]">
                    <span className="text-[#C9A86C] mt-0.5 shrink-0">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href="https://bts.authenticallyou.ca/in-the-studio-s1-apply"
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans font-semibold bg-[#C9A86C] text-white px-8 py-3 rounded-full hover:bg-[#b8975b] transition-all soft-glow text-center"
              >
                Join Premium
              </a>
            </motion.div>
          </div>

          {/* Back link */}
          <div className="text-center mt-10">
            <Link
              href="/"
              className="font-sans text-sm text-[#6B6B6B] hover:text-[#C9A86C] underline underline-offset-4 transition-colors"
            >
              ← Back to the quiz
            </Link>
          </div>

        </motion.div>
      </div>
    </div>
  );
}
