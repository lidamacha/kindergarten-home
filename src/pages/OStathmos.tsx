import { ArrowLeft, Heart, Users, Building } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ScrollReveal } from "@/hooks/useScrollAnimation";

const OStathmos = () => {
  const { language } = useLanguage();

  const content = {
    el: {
      title: "Ο Σταθμός",
      subtitle: "Γνωρίστε μας",
      ownersTitle: "Οι Ιδιοκτήτριες",
      facilitiesTitle: "Οι Εγκαταστάσεις μας",
      staffTitle: "Το Προσωπικό μας",
      staffDescription: "Στο «Χρώματα και Γέλια» η επιλογή του προσωπικού γίνεται με αυστηρά κριτήρια. Αναζητούμε παιδαγωγούς με πραγματική αγάπη για τα παιδιά, εξειδικευμένη κατάρτιση και διάθεση για συνεχή εξέλιξη. Κάθε μέλος της ομάδας μας μοιράζεται την ίδια φιλοσοφία: να δημιουργούμε ένα περιβάλλον όπου τα παιδιά νιώθουν ασφάλεια, χαρά και έμπνευση για μάθηση.",
      facilitiesDescription: "Οι εγκαταστάσεις μας έχουν σχεδιαστεί με γνώμονα την ασφάλεια και την άνεση των παιδιών. Διαθέτουμε σύγχρονες αίθουσες διδασκαλίας, χώρους παιχνιδιού εσωτερικούς και εξωτερικούς, καθώς και ειδικά διαμορφωμένους χώρους για δημιουργικές δραστηριότητες.",
      backHome: "Πίσω στην αρχική",
      owners: [
        {
          name: "Αναστασία Καραμήτσου",
          role: "Ιδιοκτήτρια, Παιδαγωγός & Υπεύθυνη Τμημάτων",
          description: "Η Αναστασία Καραμήτσου, ιδιοκτήτρια, παιδαγωγός και υπεύθυνη τμημάτων, φροντίζει ώστε το παιχνίδι, η μάθηση και η τέχνη να συνυπάρχουν αρμονικά, ακόμη και στις πιο απλές καθημερινές ασχολίες."
        },
        {
          name: "Αρχοντούλα Καραμήτσου",
          role: "Ιδιοκτήτρια & Παιδαγωγός",
          description: "Ένα από τα πρώτα χαμόγελα που θα συναντήσετε στο «Χρώματα και Γέλια» είναι αυτό της Αρχοντούλας Καραμήτσου, ιδιοκτήτριας του σχολείου και παιδαγωγού."
        }
      ]
    },
    en: {
      title: "Our Center",
      subtitle: "Get to know us",
      ownersTitle: "The Owners",
      facilitiesTitle: "Our Facilities",
      staffTitle: "Our Staff",
      staffDescription: "At \"Colors and Laughter\" staff selection is made with strict criteria. We seek educators with genuine love for children, specialized training, and a disposition for continuous growth. Every member of our team shares the same philosophy: to create an environment where children feel safe, happy, and inspired to learn.",
      facilitiesDescription: "Our facilities are designed with the safety and comfort of children in mind. We have modern classrooms, indoor and outdoor play areas, as well as specially designed spaces for creative activities.",
      backHome: "Back to home",
      owners: [
        {
          name: "Anastasia Karamitsou",
          role: "Owner, Educator & Class Supervisor",
          description: "Anastasia Karamitsou, owner, educator and class supervisor, ensures that play, learning and art coexist harmoniously, even in the simplest daily activities."
        },
        {
          name: "Archontoula Karamitsou",
          role: "Owner & Educator",
          description: "One of the first smiles you will encounter at \"Colors and Laughter\" is that of Archontoula Karamitsou, owner of the school and educator."
        }
      ]
    }
  };

  const c = content[language];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <ScrollReveal animation="fade-up">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass border-primary/30 font-semibold text-sm mb-6">
                <Building className="w-4 h-4 text-primary" />
                {c.subtitle}
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                {c.title}
              </h1>
            </div>
          </ScrollReveal>

          {/* Owners Section */}
          <section className="mb-20">
            <ScrollReveal animation="fade-up">
              <h2 className="text-3xl font-bold text-foreground mb-10 text-center flex items-center justify-center gap-3">
                <Heart className="w-8 h-8 text-primary" />
                {c.ownersTitle}
              </h2>
            </ScrollReveal>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {c.owners.map((owner, index) => (
                <ScrollReveal key={owner.name} animation={index === 0 ? "fade-right" : "fade-left"} delay={index * 100}>
                  <div className="glass rounded-3xl p-8 border-border/30 shadow-playful hover-lift h-full">
                    {/* Placeholder for owner image */}
                    <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 mx-auto mb-6 flex items-center justify-center">
                      <Users className="w-12 h-12 text-primary/60" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground text-center mb-2">
                      {owner.name}
                    </h3>
                    <p className="text-primary font-medium text-center mb-4">
                      {owner.role}
                    </p>
                    <p className="text-muted-foreground text-center leading-relaxed">
                      {owner.description}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </section>

          {/* Staff Section */}
          <section className="mb-20">
            <ScrollReveal animation="fade-up">
              <div className="glass rounded-3xl p-8 lg:p-12 border-border/30 shadow-playful max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-foreground mb-6 text-center flex items-center justify-center gap-3">
                  <Users className="w-8 h-8 text-secondary" />
                  {c.staffTitle}
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed text-center">
                  {c.staffDescription}
                </p>
              </div>
            </ScrollReveal>
          </section>

          {/* Facilities Section */}
          <section className="mb-16">
            <ScrollReveal animation="fade-up">
              <div className="glass rounded-3xl p-8 lg:p-12 border-border/30 shadow-playful max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-foreground mb-6 text-center flex items-center justify-center gap-3">
                  <Building className="w-8 h-8 text-accent" />
                  {c.facilitiesTitle}
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed text-center mb-8">
                  {c.facilitiesDescription}
                </p>
                {/* Placeholder for facilities images */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <div
                      key={i}
                      className="aspect-square rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center"
                    >
                      <Building className="w-8 h-8 text-muted-foreground/40" />
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </section>

          {/* Back Button */}
          <ScrollReveal animation="fade-up">
            <div className="text-center">
              <Button
                variant="outline"
                size="lg"
                className="group glass"
                onClick={() => window.location.href = "/"}
              >
                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                {c.backHome}
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default OStathmos;