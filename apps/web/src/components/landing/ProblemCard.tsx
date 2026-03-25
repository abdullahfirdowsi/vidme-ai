"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ProblemCard({ text }: { text: string }) {
  return (
    <Card className="rounded-lg border-transparent bg-card/30 p-4">
      <CardHeader className="px-0">
        <CardTitle className="text-foreground">{text}</CardTitle>
      </CardHeader>
      <CardContent className="px-0 pt-2 text-muted-foreground">You’re not alone — this is a common story for many applicants.</CardContent>
    </Card>
  );
}
