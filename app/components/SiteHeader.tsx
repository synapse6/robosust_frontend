"use client";

import { Facebook, Github, Instagram, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Events", href: "/events" },
  { label: "Executive", href: "/executive-members" },
  { label: "Projects", href: "/projects" },
  { label: "Forum", href: "#forum" },
];
const socials = [
  { label: "Facebook", Icon: Facebook },
  { label: "Instagram", Icon: Instagram },
  { label: "GitHub", Icon: Github },
];

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (!isMenuOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isMenuOpen]);

  return (
    <header className="fixed left-0 right-0 top-0 z-20 h-[76px] border-b border-white/10 bg-[#05070c]/70 backdrop-blur-xl">
      <div className="container-shell grid h-full grid-cols-[1fr_auto_1fr] items-center px-7 md:px-0">
        <div className="hidden items-center gap-3 sm:flex">
          {socials.map(({ label, Icon }) => (
            <a
              key={label}
              href="#"
              aria-label={label}
              className="grid h-9 w-9 place-items-center rounded-full border border-white/10 text-[#dce2ec] transition hover:-translate-y-0.5 hover:border-[#3d7cff]/60"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>
        <a
          href="/"
          className="justify-self-start text-[18px] font-bold tracking-[0.08em] md:justify-self-center"
        >
          ROBO<span className="text-[#ff3b46]">SUST</span>
        </a>
        <nav className="hidden items-center justify-self-end gap-6 text-[13px] text-[#cbd1dc] md:flex">
          {navItems.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="group relative pb-2 text-[#cbd1dc] transition hover:text-white"
            >
              <span className="relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-[#ff3b46] after:to-[#3d7cff] after:transition-all after:duration-300 group-hover:after:w-full">
                {label}
              </span>
            </a>
          ))}
        </nav>
        <button
          type="button"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMenuOpen((open) => !open)}
          className="menu ml-auto grid h-9 w-9 place-items-center rounded-full border border-white/10 text-[#dce2ec] transition hover:border-[#3d7cff]/60 md:hidden"
        >
          {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>
      {isMenuOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="border-t border-white/10 bg-[#080b12]/95 px-7 py-5 shadow-2xl shadow-black/30 backdrop-blur-xl md:hidden"
        >
          <div className="container-shell flex flex-col gap-1">
            {navItems.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                onClick={() => setIsMenuOpen(false)}
                className="border-b border-white/10 py-3 text-sm text-[#dce2ec] transition hover:text-white"
              >
                {label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
