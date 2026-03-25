"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative mx-auto w-full max-w-4xl rounded-2xl px-6 py-16 text-center"
    >
      <div className="rounded-2xl bg-gradient-to-b from-white/3 to-white/2 p-8 backdrop-blur-md">
        <h1 className="mb-4 text-4xl font-semibold leading-tight text-foreground sm:text-5xl">
          Get Noticed by Recruiters in 30 Seconds
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
          Create a personalized AI video pitch and stand out from 1000+ applicants
        </p>

        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <Link href="#create">
            <Button
              className="relative overflow-visible rounded-full bg-gradient-to-r from-purple-500 to-blue-500 px-6 py-3 text-primary-foreground shadow-lg"
            >
              <span className="z-10">Create My Video</span>
              <span className="absolute inset-0 -z-10 rounded-full blur-lg opacity-60 bg-gradient-to-r from-purple-500 to-blue-500" />
            </Button>
          </Link>

          <Link href="#demo">
            <Button variant="ghost" className="rounded-full px-6 py-3 text-muted-foreground">
              See Demo
            </Button>
          </Link>
        </div>
      </div>
    </motion.section>
  );
}
