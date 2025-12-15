import { useState, useEffect } from "react";
import { Menu, X, Instagram, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import logo from "@/assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav.philosophy, href: "#philosophy" },
    { name: t.nav.activities, href: "#activities" },
    { name: t.nav.classes, href: "#classes" },
    { name: t.nav.contact, href: "#contact" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled 
        ? 'glass shadow-soft py-2' 
        : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <img 
              src={logo} 
              alt="Χρώματα και Γέλια Logo" 
              className="w-12 h-12 object-contain group-hover:scale-110 transition-transform duration-300"
            />
            <div className="hidden sm:block">
              <span className="text-xl font-bold text-foreground block leading-tight">
                {language === "el" ? "Χρώματα" : "Colors"}
              </span>
              <span className="text-sm font-medium text-muted-foreground leading-tight">
                {language === "el" ? "& Γέλια" : "& Laughter"}
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative px-4 py-2 text-foreground/80 hover:text-primary font-medium rounded-xl transition-all duration-300 hover:bg-primary/5 group"
              >
                {link.name}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-primary to-accent rounded-full group-hover:w-1/2 transition-all duration-300" />
              </a>
            ))}
          </div>

          {/* Right side: Social + Language + Register */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Social Links */}
            <div className="flex items-center gap-1">
              <a
                href="https://www.instagram.com/chromatakaigelia.preschool/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl hover:bg-primary/10 transition-all duration-300 text-foreground/70 hover:text-primary hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/chromatakaigelia.preschool/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl hover:bg-primary/10 transition-all duration-300 text-foreground/70 hover:text-primary hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>

            {/* Language Switcher */}
            <div className="flex items-center glass rounded-full p-1 border-border/30">
              <button
                onClick={() => setLanguage("el")}
                className={`px-3 py-1.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                  language === "el"
                    ? "bg-gradient-to-r from-secondary to-accent text-white shadow-soft"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                EL
              </button>
              <button
                onClick={() => setLanguage("en")}
                className={`px-3 py-1.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                  language === "en"
                    ? "bg-gradient-to-r from-secondary to-accent text-white shadow-soft"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                EN
              </button>
            </div>

            <Button variant="hero" size="default" className="shadow-soft hover:shadow-playful">
              {t.nav.register}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2.5 rounded-xl glass border-border/30 transition-all duration-300 hover:scale-105"
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
          <div className="lg:hidden py-6 animate-fade-in-up">
            <div className="glass rounded-2xl p-4 border-border/30 space-y-2">
              {navLinks.map((link, index) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block px-4 py-3 text-foreground/80 hover:text-primary font-medium rounded-xl transition-all duration-300 hover:bg-primary/5 animate-fade-in-up"
                  style={{ animationDelay: `${0.05 * index}s` }}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              
              {/* Mobile Social Links */}
              <div className="flex items-center gap-4 px-4 py-3 border-t border-border/30 mt-2 pt-4">
                <a
                  href="https://www.instagram.com/chromatakaigelia.preschool/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-foreground/70 hover:text-primary transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                  <span className="text-sm font-medium">Instagram</span>
                </a>
                <a
                  href="https://www.facebook.com/chromatakaigelia.preschool/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-foreground/70 hover:text-primary transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                  <span className="text-sm font-medium">Facebook</span>
                </a>
              </div>

              {/* Mobile Language Switcher */}
              <div className="flex items-center gap-3 px-4 py-3">
                <span className="text-sm text-muted-foreground font-medium">
                  {language === "el" ? "Γλώσσα:" : "Language:"}
                </span>
                <div className="flex items-center glass-light rounded-full p-1 border-border/20">
                  <button
                    onClick={() => setLanguage("el")}
                    className={`px-3 py-1.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                      language === "el"
                        ? "bg-gradient-to-r from-secondary to-accent text-white"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    EL
                  </button>
                  <button
                    onClick={() => setLanguage("en")}
                    className={`px-3 py-1.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                      language === "en"
                        ? "bg-gradient-to-r from-secondary to-accent text-white"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    EN
                  </button>
                </div>
              </div>

              <Button variant="hero" size="lg" className="w-full mt-2">
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
