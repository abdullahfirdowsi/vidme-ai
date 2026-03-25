"use client";
import * as React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

export default function FeatureCard({ title, desc, icon }: { title: string; desc: string; icon?: React.ReactNode }) {
  return (
    <Card className="rounded-xl border-transparent bg-card/40 p-4">
      <CardHeader className="px-0">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-purple-600 to-blue-500 text-primary-foreground">
            {icon ?? <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="opacity-90"><path d="M12 2v20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M5 7h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>}
          </div>
          <CardTitle className="text-foreground">{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="px-0 pt-3 text-muted-foreground">{desc}</CardContent>
    </Card>
  );
}
