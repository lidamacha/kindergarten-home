import { createContext, useContext, useState, ReactNode } from "react";

type Language = "el" | "en";

interface Translations {
  nav: {
    philosophy: string;
    activities: string;
    classes: string;
    contact: string;
    register: string;
  };
  hero: {
    welcome: string;
    title1: string;
    title2: string;
    description: string;
    cta: string;
    contact: string;
    experience: string;
    years: string;
  };
  philosophy: {
    badge: string;
    title: string;
    description: string;
    features: {
      love: { title: string; description: string };
      creativity: { title: string; description: string };
      community: { title: string; description: string };
      growth: { title: string; description: string };
    };
    stats: {
      children: string;
      experience: string;
      teachers: string;
      love: string;
    };
  };
  activities: {
    badge: string;
    title: string;
    description: string;
    items: {
      art: { title: string; description: string };
      music: { title: string; description: string };
      stories: { title: string; description: string };
      nature: { title: string; description: string };
      puzzles: { title: string; description: string };
      team: { title: string; description: string };
    };
  };
  classes: {
    badge: string;
    title: string;
    description: string;
    items: {
      infant: { title: string; ages: string; description: string };
      preschool: { title: string; ages: string; description: string };
      prek: { title: string; ages: string; description: string };
    };
  };
  contact: {
    badge: string;
    title: string;
    description: string;
    address: string;
    phone: string;
    email: string;
    hours: string;
    addressDetails: string[];
    phoneDetails: string[];
    emailDetails: string[];
    hoursDetails: string[];
    form: {
      title: string;
      name: string;
      namePlaceholder: string;
      emailPlaceholder: string;
      phonePlaceholder: string;
      message: string;
      messagePlaceholder: string;
      send: string;
    };
  };
  footer: {
    madeWith: string;
    followUs: string;
  };
}

const translations: Record<Language, Translations> = {
  el: {
    nav: {
      philosophy: "Φιλοσοφία",
      activities: "Δραστηριότητες",
      classes: "Τμήματα",
      contact: "Επικοινωνία",
      register: "Εγγραφή",
    },
    hero: {
      welcome: "Καλώς ήρθατε στο νηπιαγωγείο μας!",
      title1: "Χρώματα",
      title2: "& Γέλια",
      description: "Ένα χαρούμενο νηπιαγωγείο όπου τα παιδιά ανακαλύπτουν τον κόσμο μέσα από το παιχνίδι, τη δημιουργικότητα και την αγάπη.",
      cta: "Γνωρίστε μας",
      contact: "Επικοινωνία",
      experience: "χρόνια",
      years: "εμπειρίας",
    },
    philosophy: {
      badge: "Η Φιλοσοφία μας",
      title: "Ένα σπίτι γεμάτο χαρά",
      description: "Στα \"Χρώματα και Γέλια\" πιστεύουμε ότι κάθε παιδί είναι μοναδικό και αξίζει την καλύτερη αρχή στη ζωή του.",
      features: {
        love: { title: "Αγάπη & Φροντίδα", description: "Κάθε παιδί αντιμετωπίζεται με αγάπη και προσοχή σε ένα ασφαλές περιβάλλον." },
        creativity: { title: "Δημιουργικότητα", description: "Ενθαρρύνουμε τη φαντασία και τη δημιουργική έκφραση μέσα από το παιχνίδι." },
        community: { title: "Κοινότητα", description: "Χτίζουμε ισχυρούς δεσμούς μεταξύ παιδιών, γονέων και εκπαιδευτικών." },
        growth: { title: "Εξέλιξη", description: "Βοηθάμε κάθε παιδί να αναπτύξει τις δεξιότητές του στο δικό του ρυθμό." },
      },
      stats: {
        children: "Χαρούμενα παιδιά",
        experience: "Χρόνια εμπειρίας",
        teachers: "Εκπαιδευτικοί",
        love: "Αγάπη",
      },
    },
    activities: {
      badge: "Δραστηριότητες",
      title: "Κάθε μέρα μια νέα περιπέτεια",
      description: "Προσφέρουμε ένα πλούσιο πρόγραμμα δραστηριοτήτων που βοηθούν τα παιδιά να αναπτυχθούν σωματικά, πνευματικά και συναισθηματικά.",
      items: {
        art: { title: "Ζωγραφική & Τέχνη", description: "Εξερευνούμε χρώματα, σχήματα και υλικά για να εκφράσουμε τη δημιουργικότητά μας." },
        music: { title: "Μουσική & Χορός", description: "Ρυθμός, τραγούδι και κίνηση που γεμίζουν κάθε μέρα με χαρά." },
        stories: { title: "Παραμύθια", description: "Μαγικές ιστορίες που ταξιδεύουν τη φαντασία και καλλιεργούν την αγάπη για τα βιβλία." },
        nature: { title: "Φύση & Περιβάλλον", description: "Μαθαίνουμε να αγαπάμε και να προστατεύουμε τον πλανήτη μας." },
        puzzles: { title: "Παιχνίδια Λογικής", description: "Αναπτύσσουμε τη σκέψη μέσα από διασκεδαστικά παζλ και δραστηριότητες." },
        team: { title: "Ομαδικό Παιχνίδι", description: "Μαθαίνουμε τη συνεργασία, το μοίρασμα και τη φιλία." },
      },
    },
    classes: {
      badge: "Τμήματα",
      title: "Τα τμήματά μας",
      description: "Προσφέρουμε εξειδικευμένα προγράμματα για κάθε ηλικιακή ομάδα, προσαρμοσμένα στις ανάγκες κάθε παιδιού.",
      items: {
        infant: { title: "Νήπια", ages: "2.5 - 4 ετών", description: "Πρώτες εμπειρίες μάθησης μέσα από το παιχνίδι και την εξερεύνηση σε ένα ζεστό περιβάλλον." },
        preschool: { title: "Προνήπια", ages: "4 - 5 ετών", description: "Ανάπτυξη κοινωνικών δεξιοτήτων, γλώσσας και πρώτες γνώσεις αριθμητικής." },
        prek: { title: "Προσχολικό", ages: "5 - 6 ετών", description: "Προετοιμασία για το δημοτικό με έμφαση στην ανάγνωση, γραφή και μαθηματικά." },
      },
    },
    contact: {
      badge: "Επικοινωνία",
      title: "Ελάτε να μας γνωρίσετε!",
      description: "Θα χαρούμε να σας υποδεχτούμε και να σας ξεναγήσουμε στο χώρο μας. Επικοινωνήστε μαζί μας για να κλείσετε ραντεβού.",
      address: "Διεύθυνση",
      phone: "Τηλέφωνο",
      email: "Email",
      hours: "Ωράριο",
      addressDetails: ["Οδός Παιδείας 25", "Αθήνα, 12345"],
      phoneDetails: ["210 1234567", "697 1234567"],
      emailDetails: ["info@xromatakaigeleia.gr"],
      hoursDetails: ["Δευτέρα - Παρασκευή", "7:00 - 16:00"],
      form: {
        title: "Στείλτε μας μήνυμα",
        name: "Όνομα",
        namePlaceholder: "Το όνομά σας",
        emailPlaceholder: "you@example.com",
        phonePlaceholder: "Το τηλέφωνό σας",
        message: "Μήνυμα",
        messagePlaceholder: "Πείτε μας τι θέλετε να μάθετε...",
        send: "Αποστολή μηνύματος",
      },
    },
    footer: {
      madeWith: "Φτιαγμένο με",
      followUs: "Ακολουθήστε μας",
    },
  },
  en: {
    nav: {
      philosophy: "Philosophy",
      activities: "Activities",
      classes: "Classes",
      contact: "Contact",
      register: "Register",
    },
    hero: {
      welcome: "Welcome to our kindergarten!",
      title1: "Colors",
      title2: "& Laughter",
      description: "A joyful kindergarten where children discover the world through play, creativity and love.",
      cta: "Meet us",
      contact: "Contact",
      experience: "years of",
      years: "experience",
    },
    philosophy: {
      badge: "Our Philosophy",
      title: "A home full of joy",
      description: "At \"Colors and Laughter\" we believe that every child is unique and deserves the best start in life.",
      features: {
        love: { title: "Love & Care", description: "Every child is treated with love and attention in a safe environment." },
        creativity: { title: "Creativity", description: "We encourage imagination and creative expression through play." },
        community: { title: "Community", description: "We build strong bonds between children, parents and educators." },
        growth: { title: "Growth", description: "We help every child develop their skills at their own pace." },
      },
      stats: {
        children: "Happy children",
        experience: "Years of experience",
        teachers: "Teachers",
        love: "Love",
      },
    },
    activities: {
      badge: "Activities",
      title: "Every day a new adventure",
      description: "We offer a rich program of activities that help children develop physically, mentally and emotionally.",
      items: {
        art: { title: "Art & Painting", description: "We explore colors, shapes and materials to express our creativity." },
        music: { title: "Music & Dance", description: "Rhythm, singing and movement that fill every day with joy." },
        stories: { title: "Storytelling", description: "Magical stories that travel the imagination and cultivate a love for books." },
        nature: { title: "Nature & Environment", description: "We learn to love and protect our planet." },
        puzzles: { title: "Logic Games", description: "We develop thinking through fun puzzles and activities." },
        team: { title: "Team Play", description: "We learn cooperation, sharing and friendship." },
      },
    },
    classes: {
      badge: "Classes",
      title: "Our classes",
      description: "We offer specialized programs for each age group, tailored to the needs of each child.",
      items: {
        infant: { title: "Toddlers", ages: "2.5 - 4 years", description: "First learning experiences through play and exploration in a warm environment." },
        preschool: { title: "Preschool", ages: "4 - 5 years", description: "Development of social skills, language and first numeracy knowledge." },
        prek: { title: "Pre-K", ages: "5 - 6 years", description: "Preparation for elementary school with emphasis on reading, writing and mathematics." },
      },
    },
    contact: {
      badge: "Contact",
      title: "Come meet us!",
      description: "We would be happy to welcome you and show you around. Contact us to schedule an appointment.",
      address: "Address",
      phone: "Phone",
      email: "Email",
      hours: "Hours",
      addressDetails: ["25 Education Street", "Athens, 12345"],
      phoneDetails: ["+30 210 1234567", "+30 697 1234567"],
      emailDetails: ["info@colorsandlaughter.gr"],
      hoursDetails: ["Monday - Friday", "7:00 - 16:00"],
      form: {
        title: "Send us a message",
        name: "Name",
        namePlaceholder: "Your name",
        emailPlaceholder: "you@example.com",
        phonePlaceholder: "Your phone",
        message: "Message",
        messagePlaceholder: "Tell us what you want to learn...",
        send: "Send message",
      },
    },
    footer: {
      madeWith: "Made with",
      followUs: "Follow us",
    },
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("el");

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
