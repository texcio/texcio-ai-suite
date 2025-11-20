"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bot, Plus, Settings } from "lucide-react";

export default function AgentsPage() {
  const agents = []; // Later you will replace with real DB data

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Agents</h1>
          <p className="text-muted-foreground">
            Create and manage your automated AI agents & workflows.
          </p>
        </div>

        <Button className="bg-black text-white hover:bg-gray-900 flex items-center gap-2">
          <Plus className="w-4 h-4" />
          Create Agent
        </Button>
      </div>

      {/* If no agents */}
      {agents.length === 0 && (
        <Card className="shadow-sm py-12">
          <CardContent className="text-center space-y-4">
            <Bot className="w-12 h-12 mx-auto text-gray-400" />
            <h2 className="text-xl font-semibold">No Agents Yet</h2>
            <p className="text-muted-foreground text-sm max-w-md mx-auto">
              AI Agents let you automate tasks like summarization, email responses,
              workflows, customer support, and more.
            </p>
            <Button className="bg-black text-white hover:bg-gray-900 mt-2">
              <Plus className="w-4 h-4 mr-2" />
              Create your first Agent
            </Button>
          </CardContent>
        </Card>
      )}

      {/* If agents exist — sample layout */}
      {agents.length > 0 && (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {agents.map((agent: any, index: number) => (
            <Card key={index} className="hover:shadow-md transition">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bot className="w-5 h-5 text-blue-500" />
                  {agent.name}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  {agent.description || "No description provided."}
                </p>
                <Button
                  variant="outline"
                  className="w-full flex items-center gap-2"
                >
                  <Settings className="w-4 h-4" /> Manage Agent
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
