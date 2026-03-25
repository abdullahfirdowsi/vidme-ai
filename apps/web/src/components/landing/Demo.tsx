"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function DemoPlaceholder() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="mx-auto w-full max-w-4xl"
    >
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-card/60 to-card/50 p-6 shadow-2xl">
        <div className="aspect-[16/9] w-full rounded-xl border border-border bg-gradient-to-b from-popover/40 via-popover/30 to-popover/20">
          <div className="flex h-full items-center justify-center">
            <div className="flex flex-col items-center gap-4">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-primary-foreground">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M5 3v18l15-9L5 3z" fill="currentColor"/></svg>
              </div>
              <div className="text-center text-sm text-muted-foreground">Demo preview — 30s AI pitch</div>
            </div>
          </div>
        </div>

        <div className="mt-4 flex justify-between">
          <div className="text-sm text-muted-foreground">Preview of a generated pitch</div>
          <Button variant="outline">Open Demo</Button>
        </div>
      </div>
    </motion.div>
  );
}
