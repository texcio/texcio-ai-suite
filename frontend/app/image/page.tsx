"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function ImageGenerator() {
  const [prompt, setPrompt] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const generateImage = async () => {
    if (!prompt.trim()) return;
    setLoading(true);
    setImageUrl("");

    try {
      const response = await fetch("/api/generate-image", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });

      const data = await response.json();

      if (data.imageUrl) {
        setImageUrl(data.imageUrl);
      } else {
        alert(data.error || "Image generation failed");
      }
    } catch (error) {
      alert("Something went wrong!");
    }

    setLoading(false);
  };

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-3xl font-bold">Image Generator</h1>
      <p className="text-muted-foreground">Generate AI-powered images using OpenAI.</p>

      <div className="flex gap-2">
        <Input
          placeholder="Describe your image..."
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
        <Button onClick={generateImage} disabled={loading}>
          {loading ? "Generating..." : "Generate"}
        </Button>
      </div>

      {imageUrl && (
        <div className="mt-6">
          <img
            src={imageUrl}
            alt="Generated image"
            className="rounded shadow-lg border"
          />
        </div>
      )}
    </div>
  );
}
