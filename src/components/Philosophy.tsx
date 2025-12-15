import { Heart, Sparkles, Users, TrendingUp } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { ScrollReveal, useStaggerAnimation } from "@/hooks/useScrollAnimation";

const Philosophy = () => {
  const { t } = useLanguage();
  const { ref: featuresRef, getItemStyle } = useStaggerAnimation(4, { staggerDelay: 150 });

  const features = [
    {
      icon: Heart,
      title: t.philosophy.features.love.title,
      description: t.philosophy.features.love.description,
      gradient: "from-primary/20 via-primary/10 to-transparent",
      iconGradient: "from-primary to-peach",
    },
    {
      icon: Sparkles,
      title: t.philosophy.features.creativity.title,
      description: t.philosophy.features.creativity.description,
      gradient: "from-accent/30 via-accent/15 to-transparent",
      iconGradient: "from-accent to-grass",
    },
    {
      icon: Users,
      title: t.philosophy.features.community.title,
      description: t.philosophy.features.community.description,
      gradient: "from-secondary/40 via-secondary/20 to-transparent",
      iconGradient: "from-secondary to-sky",
    },
    {
      icon: TrendingUp,
      title: t.philosophy.features.growth.title,
      description: t.philosophy.features.growth.description,
      gradient: "from-muted/40 via-muted/20 to-transparent",
      iconGradient: "from-grass to-accent",
    },
  ];

  return (
    <section id="philosophy" className="py-24 bg-card relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-br from-secondary/10 to-muted/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <ScrollReveal animation="fade-up">
            <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass border-secondary/30 font-semibold text-sm mb-6">
              <Heart className="w-4 h-4 text-secondary" />
              {t.philosophy.badge}
            </span>
          </ScrollReveal>
          <ScrollReveal animation="fade-up" delay={100}>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              {t.philosophy.title}
            </h2>
          </ScrollReveal>
          <ScrollReveal animation="fade-up" delay={200}>
            <p className="text-lg sm:text-xl text-muted-foreground">
              {t.philosophy.description}
            </p>
          </ScrollReveal>
        </div>

        {/* Features grid */}
        <div 
          ref={featuresRef as React.RefObject<HTMLDivElement>}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative p-8 rounded-3xl glass border-border/30 hover-lift transition-all duration-500"
              style={getItemStyle(index)}
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.iconGradient} flex items-center justify-center mb-6 shadow-soft group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
