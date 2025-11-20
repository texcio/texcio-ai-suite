"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function ProfilePage() {
  const [name, setName] = useState("Sudhakar Ajithraj");
  const [email, setEmail] = useState("sudhakar@texcio.ai");
  const [role] = useState("Founder & Director");

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold">Profile</h1>
        <p className="text-muted-foreground">
          Manage your personal information and account details.
        </p>
      </div>

      {/* Profile Card */}
      <Card className="p-6 space-y-6 shadow-sm">
        {/* Avatar */}
        <div className="flex items-center gap-4">
          <img
            src="https://api.dicebear.com/7.x/notionists/svg?seed=texcio"
            alt="User Avatar"
            className="w-20 h-20 rounded-full border shadow"
          />

          <div>
            <h2 className="text-xl font-semibold">{name}</h2>
            <p className="text-muted-foreground">{role}</p>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {/* Name */}
          <div className="space-y-2">
            <label className="font-medium">Full Name</label>
            <Input
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          {/* Email */}
          <div className="space-y-2">
            <label className="font-medium">Email Address</label>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Role (read only) */}
          <div className="space-y-2">
            <label className="font-medium">Role</label>
            <Input value={role} disabled />
          </div>

          {/* Password */}
          <div className="space-y-2">
            <label className="font-medium">New Password</label>
            <Input type="password" placeholder="********" />
          </div>
        </div>

        <div className="flex gap-4">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white">
            Save Changes
          </Button>

          <Button variant="outline" className="text-red-600 border-red-600">
            Logout
          </Button>
        </div>
      </Card>
    </div>
  );
}
