"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";

const STAR_PATH = "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z";

function Stars({ size = "w-4 h-4" }: { size?: string }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className={size} fill="#C9A86C" viewBox="0 0 20 20">
          <path d={STAR_PATH} />
        </svg>
      ))}
    </div>
  );
}

const faqs = [
  {
    q: "How is 1:1 coaching different from the community?",
    a: "The community gives you resources, prompts, and group energy. 1:1 coaching is private, personalised work with Elfina directly — we go into the deeper blocks, your specific brand, and build everything around you. It's not a programme you follow. It's built for you.",
  },
  {
    q: "What if I'm not tech-savvy or don't have fancy equipment?",
    a: "Camera confidence isn't about gear or editing skills. We work on how you feel in front of the lens, how you think about yourself on camera, and how you show up. The practical side comes naturally once the inner work is done.",
  },
  {
    q: "What happens after I apply?",
    a: "Once you submit your application, Elfina reviews it personally. If it's a good fit, you'll be invited to a discovery call to talk through where you are, what you need, and whether this is the right next step. No pressure — just a conversation.",
  },
  {
    q: "Is there a minimum commitment?",
    a: "1:1 coaching works best over at least 3 months — that's when the real transformation happens. We'll talk about what's right for your situation on the discovery call.",
  },
  {
    q: "I'm not sure which tier is right for me — does it matter?",
    a: "Apply for whichever feels most aligned and we'll figure it out together on the call. The core difference is frequency: Standard is biweekly sessions, Premium adds weekly sessions and direct WhatsApp access between calls.",
  },
];

export default function ApplyPage() {
  const [showStickyBar, setShowStickyBar] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => setShowStickyBar(window.scrollY > 500);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="calm-gradient-radial min-h-screen text-[#3D3D3D] relative">

      {/* Sticky CTA bar */}
      <AnimatePresence>
        {showStickyBar && (
          <motion.div
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 80, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed bottom-0 left-0 right-0 z-50 bg-[#FFF8F0]/95 backdrop-blur-sm border-t border-[#E0D5C1] px-6 py-3"
          >
            <div className="max-w-2xl mx-auto flex items-center justify-between gap-4">
              <p className="font-serif text-sm text-[#3D3D3D] hidden sm:block italic">
                Ready to go all in?
              </p>
              <a
                href="https://bts.authenticallyou.ca/insiders-all-access-call-form"
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans font-semibold bg-[#C9A86C] text-white px-6 py-2.5 rounded-full hover:bg-[#b8975b] transition-all text-sm whitespace-nowrap ml-auto"
              >
                Apply Now — Limited Spots
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 py-4 px-6 bg-[#FFF8F0]/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <a href="https://authenticallyou.ca" className="font-script text-4xl md:text-6xl text-[#3D3D3D] hover:opacity-75 transition-opacity">
            Authentically You
          </a>
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

      <div className="px-6 pt-32 pb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl mx-auto"
        >

          {/* Hero */}
          <div className="bg-white/50 backdrop-blur-sm rounded-3xl p-10 md:p-14 soft-glow text-center mb-8">
            <Sparkles className="w-10 h-10 text-[#C9A86C] mx-auto mb-5" />
            <h1 className="font-serif text-3xl md:text-4xl text-[#3D3D3D] mb-4 leading-snug">
              Ready to go all in? Let&apos;s work together <em>1:1.</em>
            </h1>
            <p className="font-sans text-[#6B6B6B] leading-relaxed">
              This is private, deep-dive coaching with Elfina — for those who are done waiting and ready to finally show up fully, confidently, and as themselves on camera.
            </p>
          </div>

          {/* Is this for you? */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white/50 backdrop-blur-sm rounded-3xl p-10 soft-glow mb-8"
          >
            <h2 className="font-serif text-2xl text-[#3D3D3D] mb-7 text-center">Is this for you?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <p className="font-sans text-xs uppercase tracking-widest text-[#C9A86C] mb-4">This is for you if...</p>
                <ul className="space-y-3">
                  {[
                    "You've been trying to show up on camera for a while and something keeps stopping you",
                    "You know the blocks are deeper than just needing more practice",
                    "You're ready to invest in yourself and want private, personalised support",
                    "You want your content to feel like you — not a performance",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 font-sans text-sm text-[#3D3D3D]">
                      <span className="text-[#C9A86C] shrink-0 mt-0.5">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="font-sans text-xs uppercase tracking-widest text-[#6B6B6B] mb-4">This isn&apos;t for you if...</p>
                <ul className="space-y-3">
                  {[
                    "You're looking for a quick fix or a content template",
                    "You're not ready to do inner work alongside the practical",
                    "You prefer group coaching or a self-paced programme",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 font-sans text-sm text-[#6B6B6B]">
                      <span className="shrink-0 mt-0.5 opacity-40">✕</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

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
              <Stars size="w-4 h-4" />
              <p className="font-serif text-lg text-[#3D3D3D] leading-relaxed my-4 italic">
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
                {
                  name: "Åsa Strahlemo",
                  label: "Community Member",
                  image: "/review-profiles/Asa.jpeg",
                  quote: "If somebody told me 2 weeks ago that I would create a VSL, publish it on my Skool page AND win the highest prize in a video challenge, I would have thought it was a cruel joke. But something actually worked this time. You turned my nightmare into a daydream.",
                },
                {
                  name: "Vanessa Choi",
                  label: "Make Marketing Yours",
                  image: "/review-profiles/vanessa.png",
                  quote: "This 3-day challenge was a great way to take action. I found a filming style that suited me, gained the confidence to finally record, and by the end of the challenge, I had a video ready to post.",
                },
              ].map((t, i) => (
                <motion.div
                  key={t.name}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-white/80 flex flex-col"
                >
                  <Stars size="w-3.5 h-3.5" />
                  <p className="font-sans text-sm text-[#6B6B6B] leading-relaxed flex-grow my-4">
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

          {/* Scarcity + pricing header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-[#C9A86C]/10 border border-[#C9A86C]/25 text-[#C9A86C] font-sans text-xs font-semibold px-4 py-2 rounded-full mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C9A86C] animate-pulse inline-block" />
              Limited spots available
            </div>
            <h2 className="font-serif text-2xl text-[#3D3D3D]">Choose your level of support</h2>
          </div>

          {/* 1:1 Coaching tiers */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">

            {/* Standard — $888/month */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-white/80 flex flex-col"
            >
              <h3 className="font-serif text-3xl text-[#3D3D3D] mb-1">$888<span className="font-sans text-sm font-normal text-[#6B6B6B]">/month</span></h3>
              <p className="font-sans text-sm font-semibold text-[#3D3D3D] mb-6">Standard</p>
              <ul className="space-y-3 mb-8 flex-grow">
                {[
                  "🔥 Biweekly 1:1 with Elfina — internal + external, wherever you need to go",
                  "My Full Creator Studio Suite — all the tools to make content creation effortless",
                  "2 video audits/month reviewed as if they were my own — hooks, story + CTA",
                  "Find your winning hook — the same process I used to test 80 and build my VSL",
                  "Your unique filming style, vibe + personal brand — so you stand out every time you post",
                  "Full access to the entire Authentically You ecosystem",
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
                Apply — Standard
              </a>
            </motion.div>

            {/* Premium — $1,288/month */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-gradient-to-br from-[#C9A86C]/10 to-[#C5B4E3]/10 backdrop-blur-sm rounded-2xl p-8 border border-[#C9A86C]/30 flex flex-col"
            >
              <h3 className="font-serif text-3xl text-[#3D3D3D] mb-1">$1,288<span className="font-sans text-sm font-normal text-[#6B6B6B]">/month</span></h3>
              <p className="font-sans text-sm font-semibold text-[#3D3D3D] mb-6">Premium</p>
              <ul className="space-y-3 mb-8 flex-grow">
                {[
                  "Everything in Standard",
                  "💎 Weekly 1:1 — for clients ready to Elevate",
                  "Personal WhatsApp — direct access to Elfina between sessions",
                  "I'll build your roadmap how I built mine: for max efficiency + unstoppable growth",
                  "Potential Podcast guest appearance — claim your voice publicly",
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
                className="font-sans font-semibold bg-[#C9A86C] text-white px-8 py-3 rounded-full hover:bg-[#b8975b] transition-all soft-glow text-center"
              >
                Apply — Premium
              </a>
            </motion.div>

          </div>

          {/* Inline mini testimonial near CTA */}
          <div className="flex items-start gap-4 bg-white/40 rounded-2xl px-6 py-5 border border-white/60 mb-12">
            <img src="/review-profiles/mira.png" alt="Mira Nguyen" className="w-10 h-10 rounded-full object-cover border-2 border-white/80 shrink-0 mt-0.5" />
            <div>
              <Stars size="w-3 h-3" />
              <p className="font-serif text-sm italic text-[#3D3D3D] leading-relaxed mt-1.5">
                &ldquo;In only the first session, she helped me uncover so much. I think everybody should do sessions with her.&rdquo;
              </p>
              <p className="font-sans text-xs text-[#6B6B6B] mt-1.5">— Mira Nguyen, Community Member</p>
            </div>
          </div>

          {/* FAQ */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-12"
          >
            <h2 className="font-serif text-2xl text-[#3D3D3D] text-center mb-6">Questions</h2>
            <div className="space-y-2">
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className="bg-white/50 backdrop-blur-sm rounded-2xl border border-white/80 overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between px-6 py-4 text-left gap-4"
                  >
                    <span className="font-sans text-sm font-semibold text-[#3D3D3D]">{faq.q}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#C9A86C] shrink-0 transition-transform duration-200 ${openFaq === i ? "rotate-180" : ""}`}
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {openFaq === i && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <p className="font-sans text-sm text-[#6B6B6B] leading-relaxed px-6 pb-5">
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Soft exit — community option */}
          <div className="text-center border-t border-[#E0D5C1] pt-10 pb-4">
            <p className="font-sans text-sm text-[#6B6B6B] mb-3">Not ready for 1:1 just yet?</p>
            <a
              href="https://www.skool.com/authenticallyou/about"
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-sm font-semibold text-[#C9A86C] hover:text-[#b8975b] underline underline-offset-4 transition-colors"
            >
              Join the community from $0/month →
            </a>
          </div>

        </motion.div>
      </div>
    </div>
  );
}
