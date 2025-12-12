import { Palette, Heart, Instagram, Facebook } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { language, t } = useLanguage();

  return (
    <footer className="bg-foreground text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
              <Palette className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-lg font-bold">
              {language === "el" ? "Χρώματα & Γέλια" : "Colors & Laughter"}
            </span>
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <a href="#philosophy" className="hover:text-primary transition-colors">{t.nav.philosophy}</a>
            <a href="#activities" className="hover:text-primary transition-colors">{t.nav.activities}</a>
            <a href="#classes" className="hover:text-primary transition-colors">{t.nav.classes}</a>
            <a href="#contact" className="hover:text-primary transition-colors">{t.nav.contact}</a>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <span className="text-sm text-primary-foreground/70">{t.footer.followUs}:</span>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-primary-foreground/10 hover:bg-primary transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-primary-foreground/10 hover:bg-primary transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-primary-foreground/10 flex items-center justify-center gap-1 text-sm text-primary-foreground/70">
          <span>{t.footer.madeWith}</span>
          <Heart className="w-4 h-4 text-primary fill-primary" />
          <span>© 2024 {language === "el" ? "Χρώματα & Γέλια" : "Colors & Laughter"}</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
