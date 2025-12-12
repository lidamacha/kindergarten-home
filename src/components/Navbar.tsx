import { useState } from "react";
import { Menu, X, Palette, Instagram, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const navLinks = [
    { name: t.nav.philosophy, href: "#philosophy" },
    { name: t.nav.activities, href: "#activities" },
    { name: t.nav.classes, href: "#classes" },
    { name: t.nav.contact, href: "#contact" },
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
              {language === "el" ? "Χρώματα & Γέλια" : "Colors & Laughter"}
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-4 py-2 text-foreground/80 hover:text-primary font-medium rounded-bubble transition-colors hover:bg-muted"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right side: Social + Language + Register */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Social Links */}
            <div className="flex items-center gap-1">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-muted transition-colors text-foreground/70 hover:text-primary"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-muted transition-colors text-foreground/70 hover:text-primary"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>

            {/* Language Switcher */}
            <div className="flex items-center bg-muted rounded-full p-1">
              <button
                onClick={() => setLanguage("el")}
                className={`px-3 py-1 rounded-full text-sm font-medium transition-all ${
                  language === "el"
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                EL
              </button>
              <button
                onClick={() => setLanguage("en")}
                className={`px-3 py-1 rounded-full text-sm font-medium transition-all ${
                  language === "en"
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                EN
              </button>
            </div>

            <Button variant="hero" size="sm">
              {t.nav.register}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
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
          <div className="lg:hidden pb-6 animate-fade-in-up">
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
              
              {/* Mobile Social Links */}
              <div className="flex items-center gap-4 px-4 py-3">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-foreground/70 hover:text-primary"
                >
                  <Instagram className="w-5 h-5" />
                  <span>Instagram</span>
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-foreground/70 hover:text-primary"
                >
                  <Facebook className="w-5 h-5" />
                  <span>Facebook</span>
                </a>
              </div>

              {/* Mobile Language Switcher */}
              <div className="flex items-center gap-2 px-4 py-3">
                <span className="text-sm text-muted-foreground">
                  {language === "el" ? "Γλώσσα:" : "Language:"}
                </span>
                <div className="flex items-center bg-muted rounded-full p-1">
                  <button
                    onClick={() => setLanguage("el")}
                    className={`px-3 py-1 rounded-full text-sm font-medium transition-all ${
                      language === "el"
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    EL
                  </button>
                  <button
                    onClick={() => setLanguage("en")}
                    className={`px-3 py-1 rounded-full text-sm font-medium transition-all ${
                      language === "en"
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    EN
                  </button>
                </div>
              </div>

              <Button variant="hero" size="default" className="mt-2 mx-4">
                {t.nav.register}
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
