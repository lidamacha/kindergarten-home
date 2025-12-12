import { Palette, Music, BookOpen, TreePine, Puzzle, Users } from "lucide-react";

const activities = [
  {
    icon: Palette,
    title: "Ζωγραφική & Τέχνη",
    description: "Εξερευνούμε χρώματα, σχήματα και υλικά για να εκφράσουμε τη δημιουργικότητά μας.",
    bgColor: "bg-primary/10",
    iconBg: "bg-primary",
  },
  {
    icon: Music,
    title: "Μουσική & Χορός",
    description: "Ρυθμός, τραγούδι και κίνηση που γεμίζουν κάθε μέρα με χαρά.",
    bgColor: "bg-accent/30",
    iconBg: "bg-sun",
  },
  {
    icon: BookOpen,
    title: "Παραμύθια",
    description: "Μαγικές ιστορίες που ταξιδεύουν τη φαντασία και καλλιεργούν την αγάπη για τα βιβλία.",
    bgColor: "bg-lavender/40",
    iconBg: "bg-lavender",
  },
  {
    icon: TreePine,
    title: "Φύση & Περιβάλλον",
    description: "Μαθαίνουμε να αγαπάμε και να προστατεύουμε τον πλανήτη μας.",
    bgColor: "bg-secondary",
    iconBg: "bg-grass",
  },
  {
    icon: Puzzle,
    title: "Παιχνίδια Λογικής",
    description: "Αναπτύσσουμε τη σκέψη μέσα από διασκεδαστικά παζλ και δραστηριότητες.",
    bgColor: "bg-sky/30",
    iconBg: "bg-sky",
  },
  {
    icon: Users,
    title: "Ομαδικό Παιχνίδι",
    description: "Μαθαίνουμε τη συνεργασία, το μοίρασμα και τη φιλία.",
    bgColor: "bg-primary/10",
    iconBg: "bg-primary",
  },
];

const Activities = () => {
  return (
    <section id="activities" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-accent text-accent-foreground font-medium text-sm mb-4">
            Δραστηριότητες
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Κάθε μέρα μια νέα περιπέτεια
          </h2>
          <p className="text-muted-foreground text-lg">
            Προσφέρουμε ένα πλούσιο πρόγραμμα δραστηριοτήτων που βοηθούν τα παιδιά 
            να αναπτυχθούν σωματικά, πνευματικά και συναισθηματικά.
          </p>
        </div>

        {/* Activities grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
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
