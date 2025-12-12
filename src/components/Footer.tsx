import { Palette, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
              <Palette className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-lg font-bold">Χρώματα & Γέλια</span>
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <a href="#home" className="hover:text-primary transition-colors">Αρχική</a>
            <a href="#about" className="hover:text-primary transition-colors">Σχετικά</a>
            <a href="#activities" className="hover:text-primary transition-colors">Δραστηριότητες</a>
            <a href="#contact" className="hover:text-primary transition-colors">Επικοινωνία</a>
          </div>

          {/* Copyright */}
          <div className="flex items-center gap-1 text-sm text-primary-foreground/70">
            <span>Φτιαγμένο με</span>
            <Heart className="w-4 h-4 text-primary fill-primary" />
            <span>© 2024</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
