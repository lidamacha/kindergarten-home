import { useState } from "react";
import { Menu, X, Palette } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Αρχική", href: "#home" },
    { name: "Σχετικά", href: "#about" },
    { name: "Δραστηριότητες", href: "#activities" },
    { name: "Επικοινωνία", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/90 backdrop-blur-md shadow-soft">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-soft group-hover:animate-wiggle transition-transform">
              <Palette className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground hidden sm:block">
              Χρώματα & Γέλια
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-4 py-2 text-foreground/80 hover:text-primary font-medium rounded-bubble transition-colors hover:bg-muted"
              >
                {link.name}
              </a>
            ))}
            <Button variant="hero" size="sm" className="ml-4">
              Εγγραφή
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-6 animate-fade-in-up">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-4 py-3 text-foreground/80 hover:text-primary font-medium rounded-lg transition-colors hover:bg-muted"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <Button variant="hero" size="default" className="mt-2">
                Εγγραφή
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
