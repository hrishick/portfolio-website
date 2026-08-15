import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "../utils/cn";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Certifications", href: "#certifications" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const checkbox = document.getElementById("mobile-menu-toggle") as HTMLInputElement;
    if (checkbox) checkbox.checked = false;
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/80 backdrop-blur-lg border-b border-white/5 py-4"
          : "bg-transparent py-6"
      )}
    >
      <input type="checkbox" id="mobile-menu-toggle" className="hidden" />
      <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
        <a
          href="#home"
          onClick={(e) => handleClick(e, "#home")}
          className="text-2xl font-heading font-bold text-gradient"
        >
          Portfolio.
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleClick(e, link.href)}
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Mobile Nav Toggle */}
        <label
          htmlFor="mobile-menu-toggle"
          className="md:hidden text-slate-300 hover:text-white cursor-pointer"
        >
          <Menu className="w-6 h-6 menu-icon" />
          <X className="w-6 h-6 x-icon hidden" />
        </label>
      </div>

      {/* Mobile Menu */}
      <div
        className="mobile-menu md:hidden bg-surface border-white/5 overflow-hidden transition-all duration-300 max-h-0 border-b-0"
      >
        <nav className="flex flex-col py-4 px-6 gap-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleClick(e, link.href)}
              className="text-base font-medium text-slate-300 hover:text-white hover:bg-white/5 p-2 rounded-lg transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
