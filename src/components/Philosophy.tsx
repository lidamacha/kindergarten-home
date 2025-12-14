import { Heart, Sparkles, Users, TrendingUp } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Philosophy = () => {
  const { t } = useLanguage();

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
      iconGradient: "from-accent to-sun",
    },
    {
      icon: Users,
      title: t.philosophy.features.community.title,
      description: t.philosophy.features.community.description,
      gradient: "from-secondary/40 via-secondary/20 to-transparent",
      iconGradient: "from-grass to-secondary",
    },
    {
      icon: TrendingUp,
      title: t.philosophy.features.growth.title,
      description: t.philosophy.features.growth.description,
      gradient: "from-sky/30 via-sky/15 to-transparent",
      iconGradient: "from-sky to-lavender",
    },
  ];

  const stats = [
    { number: "150+", label: t.philosophy.stats.children, icon: "👶" },
    { number: "20+", label: t.philosophy.stats.experience, icon: "📅" },
    { number: "12", label: t.philosophy.stats.teachers, icon: "👩‍🏫" },
    { number: "100%", label: t.philosophy.stats.love, icon: "💖" },
  ];

  return (
    <section id="philosophy" className="py-24 bg-card relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-primary/5 to-lavender/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-br from-sky/5 to-secondary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass border-secondary/30 font-semibold text-sm mb-6 animate-fade-in-up">
            <Heart className="w-4 h-4 text-primary" />
            {t.philosophy.badge}
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            {t.philosophy.title}
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            {t.philosophy.description}
          </p>
        </div>

        {/* Features grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-20">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative p-8 rounded-3xl glass border-border/30 hover-lift hover-glow transition-all duration-500 animate-fade-in-up"
              style={{ animationDelay: `${0.1 * index}s` }}
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

        {/* Stats */}
        <div className="glass rounded-3xl p-8 lg:p-12 border-border/30">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={stat.label} 
                className="text-center group animate-fade-in-up"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <div className="text-4xl mb-3 group-hover:scale-125 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gradient mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
