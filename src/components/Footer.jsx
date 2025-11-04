import { FaLinkedin, FaTwitter, FaLink } from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      className="
        w-full mt-12 py-6 px-6 text-center
        backdrop-blur-md shadow-[0_-2px_10px_rgba(0,0,0,0.05)]
        border-t border-white/20
        transition-all duration-300
      "
    >
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        {/* Left side - credits */}
        <div className="text-sm opacity-80 font-body leading-relaxed">
          Made with ❤️ — <span className="font-semibold">eunoia</span> • © 2025
          <br className="sm:hidden" />
          <span className="opacity-70 block sm:inline">
           
            by Akalya Thirumurugan
          </span>
          <br className="hidden sm:block" />
          <span className="opacity-70 block sm:inline text-xs sm:text-sm mt-1">
            Built with React, Tailwind & lots of coffee ☕
          </span>
        </div>

        {/* Right side - social links */}
        <div className="flex items-center justify-center gap-5 text-lg">
          <a
            href="https://x.com/Akalya_T03"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-amber-900 hover:drop-shadow-[0_0_6px_rgba(120,53,15,0.4)] transition"
            aria-label="Twitter (X)"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.linkedin.com/in/akalya-thirumurugan"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-amber-900 hover:drop-shadow-[0_0_6px_rgba(120,53,15,0.4)] transition"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://akalyadesigns.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-amber-900 hover:drop-shadow-[0_0_6px_rgba(120,53,15,0.4)] transition"
            aria-label="Portfolio Website"
          >
            <FaLink />
          </a>
        </div>
      </div>
    </footer>
  );
}
