import { Palette, Music, BookOpen, TreePine, Puzzle, Users } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Activities = () => {
  const { t } = useLanguage();

  const activities = [
    {
      icon: Palette,
      title: t.activities.items.art.title,
      description: t.activities.items.art.description,
      bgColor: "bg-primary/10",
      iconBg: "bg-primary",
    },
    {
      icon: Music,
      title: t.activities.items.music.title,
      description: t.activities.items.music.description,
      bgColor: "bg-accent/30",
      iconBg: "bg-sun",
    },
    {
      icon: BookOpen,
      title: t.activities.items.stories.title,
      description: t.activities.items.stories.description,
      bgColor: "bg-lavender/40",
      iconBg: "bg-lavender",
    },
    {
      icon: TreePine,
      title: t.activities.items.nature.title,
      description: t.activities.items.nature.description,
      bgColor: "bg-secondary",
      iconBg: "bg-grass",
    },
    {
      icon: Puzzle,
      title: t.activities.items.puzzles.title,
      description: t.activities.items.puzzles.description,
      bgColor: "bg-sky/30",
      iconBg: "bg-sky",
    },
    {
      icon: Users,
      title: t.activities.items.team.title,
      description: t.activities.items.team.description,
      bgColor: "bg-primary/10",
      iconBg: "bg-primary",
    },
  ];

  return (
    <section id="activities" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-accent text-accent-foreground font-medium text-sm mb-4">
            {t.activities.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            {t.activities.title}
          </h2>
          <p className="text-muted-foreground text-lg">
            {t.activities.description}
          </p>
        </div>

        {/* Activities grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity) => (
            <div
              key={activity.title}
              className={`group p-8 rounded-bubble ${activity.bgColor} transition-all duration-300 hover:shadow-playful hover:-translate-y-2`}
            >
              <div className={`w-16 h-16 rounded-full ${activity.iconBg} flex items-center justify-center mb-6 shadow-soft group-hover:animate-bounce-soft`}>
                <activity.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                {activity.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {activity.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Activities;
