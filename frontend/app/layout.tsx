import "./globals.css";
import Sidebar from "@/components/layout/Sidebar";
import Navbar from "@/components/layout/Navbar";

export const metadata = {
  title: "Texcio AI Suite",
  description: "AI SaaS platform",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="flex min-h-screen">
          <Sidebar />
          <div className="flex flex-col flex-1">
            <Navbar />
            <main className="p-6 bg-gray-50 flex-1">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
