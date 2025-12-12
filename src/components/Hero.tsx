import { Button } from "@/components/ui/button";
import { Sparkles, Heart } from "lucide-react";
import heroImage from "@/assets/hero-kids.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
      style={{
        background: "var(--gradient-hero)",
      }}
    >
      {/* Floating decorative elements */}
      <div className="absolute top-32 left-10 w-16 h-16 rounded-full bg-accent/60 animate-float" style={{ animationDelay: "0s" }} />
      <div className="absolute top-48 right-20 w-12 h-12 rounded-full bg-sky/60 animate-float" style={{ animationDelay: "0.5s" }} />
      <div className="absolute bottom-32 left-1/4 w-20 h-20 rounded-full bg-secondary/60 animate-float" style={{ animationDelay: "1s" }} />
      <div className="absolute top-1/3 right-1/4 w-10 h-10 rounded-full bg-lavender/60 animate-float" style={{ animationDelay: "1.5s" }} />

      <div className="container mx-auto px-4 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left space-y-6 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/80 shadow-soft">
              <Sparkles className="w-5 h-5 text-accent" />
              <span className="text-sm font-medium text-muted-foreground">
                Καλώς ήρθατε στο νηπιαγωγείο μας!
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Χρώματα
              <span className="block text-primary">&amp; Γέλια</span>
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0">
              Ένα χαρούμενο νηπιαγωγείο όπου τα παιδιά ανακαλύπτουν τον κόσμο 
              μέσα από το παιχνίδι, τη δημιουργικότητα και την αγάπη.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <Button variant="hero" size="xl">
                <Heart className="w-5 h-5" />
                Γνωρίστε μας
              </Button>
              <Button variant="outline" size="xl">
                Επικοινωνία
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <div className="relative rounded-blob overflow-hidden shadow-float transform hover:scale-[1.02] transition-transform duration-500">
              <img
                src={heroImage}
                alt="Παιδιά που παίζουν στο νηπιαγωγείο"
                className="w-full h-auto object-cover aspect-[4/3]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent" />
            </div>
            
            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 bg-card rounded-bubble p-4 shadow-playful animate-bounce-soft">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-grass flex items-center justify-center">
                  <span className="text-lg">🎨</span>
                </div>
                <div>
                  <p className="font-bold text-foreground text-sm">20+ χρόνια</p>
                  <p className="text-xs text-muted-foreground">εμπειρίας</p>
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
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="hsl(var(--card))"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
