"use client";

import Hero from "@/components/landing/Hero";
import FeatureCard from "@/components/landing/FeatureCard";
import ProblemCard from "@/components/landing/ProblemCard";
import DemoPlaceholder from "@/components/landing/Demo";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

function Step({ n, title, desc }: { n: number; title: string; desc: string }) {
  return (
    <div className="flex items-start gap-4">
      <div className="flex h-10 w-10 items-center justify-center rounded-md bg-white/6 text-white">{n}</div>
      <div>
        <div className="font-medium text-white">{title}</div>
        <div className="text-sm text-slate-300">{desc}</div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
  <div className="min-h-screen bg-background text-foreground">

      <main className="mx-auto w-full max-w-6xl px-4 py-12">
        <Hero />

        {/* Problem Section */}
        <section className="mt-12">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-6 text-2xl font-semibold">Tired of Applying and Getting Ignored?</h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <ProblemCard text="Applied to 50+ jobs, no response" />
              <ProblemCard text="Resume gets ignored" />
              <ProblemCard text="Lost among thousands of applicants" />
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section className="mt-14">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-6 text-2xl font-semibold">Meet VidMe</h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <FeatureCard title="AI-generated script" desc="Auto-generated, concise script tailored to the role and your strengths." />
              <FeatureCard title="Talking avatar video" desc="A natural-looking avatar delivers your pitch with confidence." />
              <FeatureCard title="Ready in 60 seconds" desc="From input to shareable video in under a minute." />
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="mt-14">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-6 text-2xl font-semibold">How it works</h2>
            <div className="grid gap-6 sm:grid-cols-3">
              <motion.div initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <Step n={1} title="Enter your details" desc="Tell us your role, skills and the job you want." />
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.06 }}>
                <Step n={2} title="AI generates your pitch" desc="Our model writes a short, persuasive 30s script." />
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.12 }}>
                <Step n={3} title="Share your video" desc="Download or link your clip directly to recruiters." />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Demo Section */}
        <section id="demo" className="mt-14">
          <h2 className="mb-6 text-2xl font-semibold">Demo</h2>
          <DemoPlaceholder />
        </section>

        {/* Final CTA */}
        <section className="mt-16 rounded-2xl bg-gradient-to-r from-[#0f1724]/30 to-transparent p-8">
          <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 sm:flex-row sm:justify-between">
            <div>
              <h3 className="text-2xl font-semibold">Your next job might be one video away</h3>
              <p className="mt-1 text-slate-300">Get started with a free trial and create your first 30s pitch.</p>
            </div>
            <div className="flex items-center gap-3">
              <Button className="rounded-full bg-gradient-to-r from-purple-500 to-blue-500 px-6 py-3">Try it Free</Button>
              <Button variant="ghost" className="rounded-full px-5 py-3">Contact Sales</Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
