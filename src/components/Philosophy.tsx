import { Heart, Star, Users, Award } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Philosophy = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: Heart,
      title: t.philosophy.features.love.title,
      description: t.philosophy.features.love.description,
      color: "bg-primary/10",
      iconColor: "text-primary",
    },
    {
      icon: Star,
      title: t.philosophy.features.creativity.title,
      description: t.philosophy.features.creativity.description,
      color: "bg-accent/30",
      iconColor: "text-accent-foreground",
    },
    {
      icon: Users,
      title: t.philosophy.features.community.title,
      description: t.philosophy.features.community.description,
      color: "bg-secondary",
      iconColor: "text-secondary-foreground",
    },
    {
      icon: Award,
      title: t.philosophy.features.growth.title,
      description: t.philosophy.features.growth.description,
      color: "bg-sky/30",
      iconColor: "text-sky-foreground",
    },
  ];

  const stats = [
    { number: "150+", label: t.philosophy.stats.children },
    { number: "20+", label: t.philosophy.stats.experience },
    { number: "12", label: t.philosophy.stats.teachers },
    { number: "100%", label: t.philosophy.stats.love },
  ];

  return (
    <section id="philosophy" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-secondary text-secondary-foreground font-medium text-sm mb-4">
            {t.philosophy.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            {t.philosophy.title}
          </h2>
          <p className="text-muted-foreground text-lg">
            {t.philosophy.description}
          </p>
        </div>

        {/* Features grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group p-6 rounded-bubble bg-card shadow-soft hover:shadow-playful transition-all duration-300 hover:-translate-y-2 border border-border/50"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-14 h-14 rounded-bubble ${feature.color} flex items-center justify-center mb-4 group-hover:animate-wiggle`}>
                <feature.icon className={`w-7 h-7 ${feature.iconColor}`} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center p-6">
              <div className="text-4xl sm:text-5xl font-bold text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-muted-foreground font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
