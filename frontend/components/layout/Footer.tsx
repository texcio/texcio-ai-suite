"use client";

export default function Footer() {
  return (
    <footer className="bg-black/30 backdrop-blur-xl border-t border-white/10 mt-20">
  <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-4 gap-10 text-gray-300">

    {/* Brand */}
    <div>
      <img src="/logo.png" alt="logo" className="h-12 mb-4 opacity-90" />
      <p className="text-gray-400 text-sm leading-relaxed">
        AI tools that supercharge productivity — summaries, images, agents & automation for business teams.
      </p>
    </div>

    {/* Links */}
    <div>
      <h4 className="text-white font-semibold mb-4">Product</h4>
      <ul className="space-y-2 text-sm">
        <li><a href="#features" className="hover:text-white">Features</a></li>
        <li><a href="#pricing" className="hover:text-white">Pricing</a></li>
        <li><a href="#workflow" className="hover:text-white">Workflow</a></li>
      </ul>
    </div>

    {/* Account */}
    <div>
      <h4 className="text-white font-semibold mb-4">Account</h4>
      <ul className="space-y-2 text-sm">
        <li><a href="/login" className="hover:text-white">Sign In</a></li>
        <li><a href="/register" className="hover:text-white">Get Started</a></li>
      </ul>
    </div>

    {/* Contact */}
    <div>
      <h4 className="text-white font-semibold mb-4">Support</h4>
      <ul className="space-y-2 text-sm">
        <li><a href="/contact" className="hover:text-white">Contact Us</a></li>
        <li><a className="hover:text-white" href="mailto:support@texcio.com">support@texcio.com</a></li>
      </ul>

      {/* Social Icons */}
      <div className="flex gap-4 mt-5 text-lg">
        <a href="#" className="hover:text-white"><i className="ri-twitter-x-fill"></i></a>
        <a href="#" className="hover:text-white"><i className="ri-linkedin-fill"></i></a>
        <a href="#" className="hover:text-white"><i className="ri-github-fill"></i></a>
      </div>
    </div>
  </div>

  {/* Bottom Bar */}
  <div className="text-center text-gray-500 py-6 border-t border-white/10 text-sm">
    © {new Date().getFullYear()} Texcio AI Suite. All rights reserved.
  </div>
</footer>

  );
}
