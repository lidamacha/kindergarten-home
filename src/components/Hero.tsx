import { Sparkles, ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-playground.webp";
import { useLanguage } from "@/contexts/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
      style={{
        background: "var(--gradient-hero)",
      }}
    >
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-[5%] w-24 h-24 rounded-full bg-gradient-to-br from-accent/50 to-sun/30 animate-float blur-sm" style={{ animationDelay: "0s" }} />
        <div className="absolute top-40 right-[10%] w-16 h-16 rounded-full bg-gradient-to-br from-sky/50 to-lavender/30 animate-float" style={{ animationDelay: "0.5s" }} />
        <div className="absolute bottom-40 left-[15%] w-32 h-32 rounded-full bg-gradient-to-br from-secondary/60 to-grass/20 animate-float blur-sm" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/3 right-[20%] w-14 h-14 rounded-full bg-gradient-to-br from-lavender/50 to-primary/20 animate-float" style={{ animationDelay: "1.5s" }} />
        <div className="absolute bottom-1/4 right-[8%] w-20 h-20 rounded-full bg-gradient-to-br from-peach/50 to-accent/20 animate-float" style={{ animationDelay: "2s" }} />
        
        {/* Decorative lines */}
        <div className="absolute top-1/4 left-0 w-40 h-[2px] bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        <div className="absolute bottom-1/3 right-0 w-60 h-[2px] bg-gradient-to-r from-transparent via-sky/20 to-transparent" />
      </div>

      <div className="container mx-auto px-4 py-12 lg:py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass border-primary/20 animate-fade-in-up">
              <Sparkles className="w-4 h-4 text-primary animate-pulse" />
              <span className="text-sm font-semibold text-foreground">{t.hero.title1} {t.hero.title2}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              <span className="text-foreground">{t.hero.welcome}</span>
              <br />
              <span className="text-gradient">{t.hero.title1} {t.hero.title2}</span>
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              {t.hero.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              <Button variant="hero" size="xl" className="group">
                {t.hero.cta}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="xl" className="group glass">
                <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
                {t.hero.contact}
              </Button>
            </div>

          </div>

          {/* Hero Image */}
          <div className="relative animate-fade-in-up lg:animate-slide-in-right" style={{ animationDelay: "0.2s" }}>
            <div className="relative">
              {/* Glow effect behind image */}
              <div className="absolute inset-4 bg-gradient-to-br from-primary/30 via-lavender/20 to-sky/30 rounded-[3rem] blur-3xl animate-pulse-glow" />
              
              {/* Main image container */}
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-float transform hover:scale-[1.02] transition-all duration-500 animate-blob" style={{ animationPlayState: 'paused' }}>
                <img
                  src={heroImage}
                  alt={t.hero.welcome}
                  className="w-full h-auto object-cover aspect-[4/3]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/10 via-transparent to-transparent" />
              </div>
            </div>

            {/* Floating badge - Experience */}
            <div className="absolute -bottom-4 -left-4 lg:-left-8 glass rounded-2xl p-4 shadow-playful animate-bounce-soft">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-grass to-secondary flex items-center justify-center">
                  <span className="text-xl">🎨</span>
                </div>
                <div>
                  <p className="font-bold text-foreground">20+ {t.hero.experience}</p>
                  <p className="text-xs text-muted-foreground">{t.hero.years}</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Wave decoration at bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path
            d="M0 60L48 54C96 48 192 36 288 30C384 24 480 24 576 33C672 42 768 60 864 66C960 72 1056 66 1152 54C1248 42 1344 24 1392 15L1440 6V120H0Z"
            fill="hsl(var(--card))"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
