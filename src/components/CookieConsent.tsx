import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { Cookie, X } from "lucide-react";

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { language } = useLanguage();

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      // Small delay for better UX
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookieConsent", "declined");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:max-w-md z-50 animate-fade-in">
      <div className="glass rounded-2xl p-6 shadow-playful border border-border/30">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
            <Cookie className="w-5 h-5 text-white" />
          </div>
          <div className="flex-1">
            <h3 className="font-bold text-foreground mb-2">
              {language === "el" ? "Χρήση Cookies" : "Cookie Notice"}
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              {language === "el"
                ? "Χρησιμοποιούμε cookies για να βελτιώσουμε την εμπειρία σας στον ιστότοπό μας."
                : "We use cookies to improve your experience on our website."}
            </p>
            <div className="flex items-center gap-2">
              <Button
                variant="hero"
                size="sm"
                onClick={handleAccept}
                className="flex-1"
              >
                {language === "el" ? "Αποδοχή" : "Accept"}
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={handleDecline}
                className="flex-1 glass"
              >
                {language === "el" ? "Απόρριψη" : "Decline"}
              </Button>
            </div>
          </div>
          <button
            onClick={handleDecline}
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
