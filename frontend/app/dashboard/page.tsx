import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, ImageIcon, Bot } from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="space-y-8">

      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-muted-foreground">
          Welcome to Texcio AI Suite. Choose a tool to get started.
        </p>
      </div>

      {/* Stats Section */}
      <div className="grid gap-6 md:grid-cols-3">

        {/* Summaries */}
        <Card className="shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="w-5 h-5" /> Summaries
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">0</p>
            <p className="text-xs text-muted-foreground">Generated this week</p>
          </CardContent>
        </Card>

        {/* Images */}
        <Card className="shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ImageIcon className="w-5 h-5" /> Images
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">0</p>
            <p className="text-xs text-muted-foreground">Created this week</p>
          </CardContent>
        </Card>

        {/* Agents */}
        <Card className="shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bot className="w-5 h-5" /> Agents
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">0</p>
            <p className="text-xs text-muted-foreground">Active workflows</p>
          </CardContent>
        </Card>

      </div>

      {/* Quick Actions */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>

        <div className="grid gap-4 md:grid-cols-3">

          <Card className="p-4 hover:bg-gray-50 transition cursor-pointer">
            <h3 className="font-semibold">Summarize Text</h3>
            <p className="text-sm text-muted-foreground">
              Quickly summarize long text documents.
            </p>
          </Card>

          <Card className="p-4 hover:bg-gray-50 transition cursor-pointer">
            <h3 className="font-semibold">Generate Images</h3>
            <p className="text-sm text-muted-foreground">
              Create AI-powered images from prompts.
            </p>
          </Card>

          <Card className="p-4 hover:bg-gray-50 transition cursor-pointer">
            <h3 className="font-semibold">Create AI Agent</h3>
            <p className="text-sm text-muted-foreground">
              Build specialized AI workflows.
            </p>
          </Card>

        </div>
      </div>

    </div>
  );
}
