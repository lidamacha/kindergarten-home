import { Palette, Heart, Instagram, Facebook, ArrowUp } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { language, t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-foreground text-primary-foreground overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-foreground via-foreground to-primary/20 opacity-50" />
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid md:grid-cols-3 gap-12 items-center">
          {/* Logo & Description */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-peach flex items-center justify-center">
                <Palette className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-xl font-bold block leading-tight">
                  {language === "el" ? "Χρώματα" : "Colors"}
                </span>
                <span className="text-sm font-medium text-primary-foreground/70 leading-tight">
                  {language === "el" ? "& Γέλια" : "& Laughter"}
                </span>
              </div>
            </div>
            <p className="text-primary-foreground/70 text-sm max-w-xs mx-auto md:mx-0">
              {language === "el" 
                ? "Όπου κάθε παιδί ανακαλύπτει τη χαρά της μάθησης μέσα από το παιχνίδι." 
                : "Where every child discovers the joy of learning through play."}
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center gap-6">
            <a href="#philosophy" className="text-primary-foreground/70 hover:text-primary transition-colors font-medium">
              {t.nav.philosophy}
            </a>
            <a href="#activities" className="text-primary-foreground/70 hover:text-primary transition-colors font-medium">
              {t.nav.activities}
            </a>
            <a href="#classes" className="text-primary-foreground/70 hover:text-primary transition-colors font-medium">
              {t.nav.classes}
            </a>
            <a href="#contact" className="text-primary-foreground/70 hover:text-primary transition-colors font-medium">
              {t.nav.contact}
            </a>
          </div>

          {/* Social & Back to top */}
          <div className="flex flex-col items-center md:items-end gap-4">
            <div className="flex items-center gap-4">
              <span className="text-sm text-primary-foreground/70">{t.footer.followUs}:</span>
              <a
                href="https://www.instagram.com/chromatakaigelia.preschool/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-primary-foreground/10 hover:bg-gradient-to-br hover:from-primary hover:to-peach flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/chromatakaigelia.preschool/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-primary-foreground/10 hover:bg-gradient-to-br hover:from-sky hover:to-lavender flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 text-sm text-primary-foreground/70 hover:text-primary transition-colors group"
            >
              <span>{language === "el" ? "Πάνω" : "Back to top"}</span>
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-sm text-primary-foreground/60">
            <span>{t.footer.madeWith}</span>
            <Heart className="w-4 h-4 text-primary fill-primary animate-pulse" />
            <span>© 2024 {language === "el" ? "Χρώματα & Γέλια" : "Colors & Laughter"}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
