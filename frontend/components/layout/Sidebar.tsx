import {
  Home,
  ImageIcon,
  FileText,
  Bot,
  Settings,
  CreditCard,
  User,
} from "lucide-react";
import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-white border-r p-4 flex flex-col">
      <h1 className="text-xl font-bold mb-6">Texcio AI Suite</h1>

      <nav className="flex-1 space-y-2">
        <Link href="/dashboard" className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded-md">
          <Home size={18} /> Dashboard
        </Link>

        <Link href="/summarizer" className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded-md">
          <FileText size={18} /> Summarizer
        </Link>

        <Link href="/image" className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded-md">
          <ImageIcon size={18} /> Image Generator
        </Link>

        <Link href="/agents" className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded-md">
          <Bot size={18} /> Agents
        </Link>

        <Link href="/settings" className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded-md">
          <Settings size={18} /> Settings
        </Link>

        <Link href="/billing" className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded-md">
          <CreditCard size={18} /> Billing
        </Link>

        <Link href="/profile" className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded-md">
          <User size={18} /> Profile
        </Link>
      </nav>
    </aside>
  );
}
