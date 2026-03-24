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
              href="https://reflections.authenticallyou.ca"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline font-sans text-xs md:text-sm font-semibold bg-white text-[#C9A86C] px-4 py-2 rounded-full border border-[#C9A86C] hover:bg-[#C9A86C] hover:text-white transition-all"
            >
              ★★★★★ Reviews
            </a>
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
              href="https://drive.google.com/file/d/1i0yfGYDPFtgzLjOAuJEnp5Z06ym7gV3A/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-sm text-[#C9A86C] underline underline-offset-4 hover:text-[#b8975b] transition-colors"
            >
              View the full programme outline →
            </a>
          </div>

          {/* Testimonials */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-10"
          >
            <div className="text-center mb-8">
              <span className="font-sans text-sm tracking-[0.2em] uppercase text-[#C9A86C] block mb-3">
                Client Stories
              </span>
              <h2 className="font-serif text-2xl md:text-3xl text-[#3D3D3D] mb-2">
                What&apos;s possible when you say yes.
              </h2>
              <p className="font-sans text-sm text-[#6B6B6B]">
                Real people. Real breakthroughs.
              </p>
            </div>

            {/* Featured quote */}
            <div className="bg-gradient-to-br from-[#C9A86C]/10 to-[#C5B4E3]/10 backdrop-blur-sm rounded-2xl p-8 border border-[#C9A86C]/20 mb-5">
              <div className="flex gap-0.5 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4" fill="#C9A86C" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="font-serif text-lg text-[#3D3D3D] leading-relaxed mb-6 italic">
                &ldquo;The most important breakthrough working with you is how I feel on camera. I have never just looked into a lens with zero issues. I filmed multiple videos that were off the cuff, had direct eyeline, AND were the REAL me. This has bled into how I&apos;m designing my community. I am relaxed, present, and authentically me. I can&apos;t thank you enough!!!&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <img src="/review-profiles/kat.jpg" alt="Kat Oakley" className="w-11 h-11 rounded-full object-cover border-2 border-white/80" />
                <div>
                  <div className="font-sans text-sm font-semibold text-[#3D3D3D]">Kat Oakley</div>
                  <div className="font-sans text-xs text-[#6B6B6B]">Content Creator</div>
                </div>
              </div>
            </div>

            {/* 4-card grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {[
                {
                  name: "Nick Gibson",
                  label: "Business Owner",
                  image: "/review-profiles/nick gibson.jpeg",
                  quote: "I was lucky enough to find Elfina and get on a 1-1 call with her. Even though I went in wondering \"Will this work for me?\", I came out with a clear picture of how I should move forward, and feeling absolutely amazing. Highly recommend!",
                },
                {
                  name: "Iris van der Stelt",
                  label: "Community Member",
                  image: "/review-profiles/iris image.jpg",
                  quote: "Elfina has this superpower of listening through what you say, hearing the layers underneath, touching the real essence of what it's truly about. To be seen, to be heard, to be supported — it makes such a difference.",
                },
                {
                  name: "Nathalie",
                  label: "Community Member",
                  image: "/review-profiles/nathalie.png",
                  quote: "Whenever I feel de-railed in my pursuits, one meeting with you and I feel confident and back-on-track. You gave me amazing ideas and direction and my wheels are turning like crazy. I feel so inspired!",
                },
                {
                  name: "Angela, Journaling Mentor",
                  label: "Business Owner",
                  image: "/review-profiles/angela journaling mentor.png",
                  quote: "I joined Authentically You this week and I am so in love with all the encouragement and tons of information inside her classroom. If you need to show up on camera in business — this is the place to be.",
                },
              ].map((t, i) => (
                <motion.div
                  key={t.name}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-white/80 flex flex-col"
                >
                  <div className="flex gap-0.5 mb-3">
                    {[...Array(5)].map((_, s) => (
                      <svg key={s} className="w-3.5 h-3.5" fill="#C9A86C" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="font-sans text-sm text-[#6B6B6B] leading-relaxed flex-grow mb-5">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="flex items-center gap-3 mt-auto">
                    <img src={t.image} alt={t.name} className="w-9 h-9 rounded-full object-cover border-2 border-white/80" />
                    <div>
                      <div className="font-sans text-sm font-semibold text-[#3D3D3D]">{t.name}</div>
                      <div className="font-sans text-xs text-[#6B6B6B]">{t.label}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="text-center">
              <a
                href="https://reflections.authenticallyou.ca"
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-sm font-semibold text-[#C9A86C] hover:text-[#b8975b] underline underline-offset-4 transition-colors"
              >
                Read all client stories →
              </a>
            </div>
          </motion.div>

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
