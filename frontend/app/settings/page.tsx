"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";

export default function SettingsPage() {
  const [theme, setTheme] = useState("light");
  const [emailAlerts, setEmailAlerts] = useState(true);
  const [pushAlerts, setPushAlerts] = useState(false);
  const [apiKey, setApiKey] = useState("");

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold">Settings</h1>
        <p className="text-muted-foreground">
          Manage your account, preferences, and API access.
        </p>
      </div>

      {/* GENERAL SETTINGS */}
      <Card className="p-6 space-y-6 shadow-sm">

        <h2 className="text-xl font-semibold">General Settings</h2>

        <div className="space-y-4">
          {/* Theme */}
          <div className="flex items-center justify-between">
            <label className="font-medium">Theme</label>
            <select
              value={theme}
              onChange={(e) => setTheme(e.target.value)}
              className="border rounded-md p-2"
            >
              <option value="light">Light Mode</option>
              <option value="dark">Dark Mode</option>
              <option value="system">System Default</option>
            </select>
          </div>

          {/* Email Alerts */}
          <div className="flex items-center justify-between">
            <label className="font-medium">Email Alerts</label>
            <Switch
              checked={emailAlerts}
              onCheckedChange={setEmailAlerts}
            />
          </div>

          {/* Push Notifications */}
          <div className="flex items-center justify-between">
            <label className="font-medium">Push Notifications</label>
            <Switch
              checked={pushAlerts}
              onCheckedChange={setPushAlerts}
            />
          </div>
        </div>
      </Card>

      {/* API KEY SETTINGS */}
      <Card className="p-6 space-y-6 shadow-sm">
        <h2 className="text-xl font-semibold">API Access</h2>

        <div className="space-y-2">
          <label className="font-medium">Your API Key</label>

          <Input
            placeholder="Enter API key..."
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
          />

          <p className="text-sm text-muted-foreground">
            Do not share this key with anyone.
          </p>
        </div>

        <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
          Save Settings
        </Button>
      </Card>
    </div>
  );
}
