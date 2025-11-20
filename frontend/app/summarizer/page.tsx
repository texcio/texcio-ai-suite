"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function SummarizerPage() {
  const [text, setText] = useState("");
  const [summary, setSummary] = useState("");

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Summarizer</h1>
      <p className="text-muted-foreground">
        Paste your text below and generate a quick summary.
      </p>

      <Card className="p-4 space-y-4">
        <Textarea
          placeholder="Paste text here..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="h-40"
        />

        <Button className="w-full md:w-auto" disabled={!text}>
          Summarize Text
        </Button>
      </Card>

      {summary && (
        <Card className="p-4">
          <h2 className="text-xl font-semibold mb-2">Summary</h2>
          <p className="text-gray-800">{summary}</p>
        </Card>
      )}
    </div>
  );
}
