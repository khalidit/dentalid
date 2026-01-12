export const languageOptions = [
  { code: "fr", label: "Français" },
  { code: "en", label: "English" },
  { code: "ar", label: "العربية" },
  { code: "de", label: "Deutsch" },
  { code: "es", label: "Español" },
  { code: "it", label: "Italiano" },
  { code: "zh", label: "中文" },
] as const;

export type Language = (typeof languageOptions)[number]["code"];

type HoursDay = { label: string; time: string };

type FaqAnswer = string | { type: "hours" };

export type Translation = {
  language: { label: string };
  brand: { doctorName: string; clinicLabel: string; fullName: string };
  nav: {
    home: string;
    cabinet: string;
    services: string;
    team: string;
    faq: string;
    contact: string;
  };
  cta: { bookShort: string; bookLong: string; locate: string; close: string };
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    newPatients: string;
    hoursTitle: string;
    hoursCta: string;
  };
  heroHighlights: Array<{ title: string; description: string }>;
  servicesSection: { title: string; subtitle: string };
  services: Array<{ title: string; description: string }>;
  advantagesSection: { title: string; subtitle: string };
  advantages: Array<{ title: string; description: string }>;
  team: {
    title: string;
    subtitle: string;
    members: Array<{ name: string; alt: string; diplomas: string[] }>;
  };
  contactSection: { title: string; subtitle: string };
  contactCard: {
    title: string;
    addressLabel: string;
    phoneLabel: string;
    emailLabel: string;
    hoursLabel: string;
  };
  hours: {
    days: HoursDay[];
    summary: { weekdays: HoursDay; saturday: HoursDay; sunday: HoursDay };
  };
  transports: {
    title: string;
    rerLabel: string;
    rerDetail: string;
    busLabel: string;
    busDetail: string;
    stopsLabel: string;
    stopsDetail: string;
    parkingLabel: string;
    parkingDetail: string;
  };
  map: { title: string };
  modal: { label: string; title: string; closeOverlay: string };
  footer: { description: string; contactTitle: string; rights: string };
  faq: {
    title: string;
    subtitle: string;
    hoursIntro: string;
    items: Array<{ question: string; answer: FaqAnswer }>;
  };
  cabinetCarousel: {
    title: string;
    subtitle: string;
    imageAlt: (index: number) => string;
  };
  alt: { logo: string; hero: string };
  notFound: { message: string; cta: string };
};

export const translations: Record<Language, Translation> = {
  fr: {
    language: { label: "Langue" },
    brand: {
      doctorName: "Dr Marzak",
      clinicLabel: "Cabinet Dentaire",
      fullName: "Cabinet Dentaire Dr Marzak",
    },
    nav: {
      home: "Accueil",
      cabinet: "Le Cabinet",
      services: "Services",
      team: "Notre Équipe",
      faq: "FAQ",
      contact: "Contact",
    },
    cta: {
      bookShort: "Prendre RDV",
      bookLong: "Prendre rendez-vous",
      locate: "Nous localiser",
      close: "Fermer",
    },
    hero: {
      badge: "Cabinet dentaire moderne à Champs-sur-Marne",
      title: "Un sourire confiant commence par des soins attentionnés.",
      subtitle:
        "Des traitements personnalisés, une équipe bienveillante et un cabinet pensé pour votre confort au cœur de Champs-sur-Marne.",
      newPatients: "Nouveaux patients bienvenus",
      hoursTitle: "Horaires flexibles",
      hoursCta: "Voir les horaires",
    },
    heroHighlights: [
      {
        title: "Hygiène maîtrisée",
        description: "Protocoles rigoureux pour une sécurité maximale.",
      },
      {
        title: "Esthétique naturelle",
        description: "Des soins précis pour un sourire harmonieux.",
      },
      {
        title: "Accès facile",
        description: "RER A et bus à proximité immédiate.",
      },
    ],
    servicesSection: {
      title: "Nos Services",
      subtitle:
        "Une gamme complète de soins dentaires pour toute la famille, avec des équipements modernes et une approche personnalisée.",
    },
    services: [
      {
        title: "Soins Conservateurs",
        description:
          "Caries, détartrage, soins de routine pour préserver vos dents naturelles",
      },
      {
        title: "Prothèses Dentaires",
        description:
          "Couronnes, bridges, dentiers fixes ou amovibles sur mesure",
      },
      {
        title: "Implants Dentaires",
        description: "Solutions durables et esthétiques, implantologie avancée",
      },
      {
        title: "Orthodontie",
        description: "Alignement et correction dentaire, gouttières dentaires",
      },
      {
        title: "Urgences Dentaires",
        description:
          "Prise en charge rapide des urgences et extractions dentaires",
      },
      {
        title: "Blanchiment des dents",
        description: "Éclaircissement dentaire pour un sourire éclatant",
      },
      {
        title: "Bruxisme",
        description:
          "Traitement du grincement de dents, gouttières de protection",
      },
      {
        title: "Endodontie",
        description: "Traitement des canaux radiculaires, dévitalisation",
      },
      {
        title: "Facettes Dentaires",
        description: "Facettes esthétiques pour corriger forme et couleur",
      },
      {
        title: "Pédodontie",
        description: "Soins dentaires spécialisés pour enfants et adolescents",
      },
      {
        title: "Imagerie Dentaire",
        description: "Radio panoramique, Cône beam 3D pour diagnostic précis",
      },
      {
        title: "Stellite Dentaire",
        description: "Prothèses partielles en alliage métallique léger",
      },
    ],
    advantagesSection: {
      title: "Pourquoi nous choisir ?",
      subtitle:
        "Un cabinet moderne, accessible et parfaitement situé pour votre confort.",
    },
    advantages: [
      {
        title: "Équipements Modernes",
        description: "Technologies de pointe pour des soins optimaux",
      },
      {
        title: "Accessible PMR",
        description: "Cabinet au rez-de-chaussée, entièrement accessible",
      },
      {
        title: "Bien Desservi",
        description: "RER A + Bus (lignes 211, 213, 220)",
      },
    ],
    team: {
      title: "Une équipe experte et attentionnée",
      subtitle:
        "Des praticiens expérimentés et une équipe bienveillante pour vous accompagner à chaque étape.",
      members: [
        {
          name: "Dr MARZAK Hauda",
          alt: "Dr Marzak Hauda",
          diplomas: [
            "Diplôme d'État de docteur en chirurgie dentaire - PARIS VII",
            "DU Implantologie Orale et Maxillo-faciale en 2021 - PARIS XII",
          ],
        },
        {
          name: "Dr Fatiha Semmarene",
          alt: "Dr Fatiha Semmarene",
          diplomas: [
            "Diplôme d'État de docteur en chirurgie dentaire - Faculté de Chirurgie Dentaire de Nancy",
          ],
        },
        {
          name: "Dr Myriam BETTAIBI",
          alt: "Dr Myriam BETTAIBI",
          diplomas: ["Diplôme d'État de docteur en chirurgie dentaire"],
        },
        {
          name: "Simona",
          alt: "Simona - Assistante dentaire",
          diplomas: ["Assistante dentaire qualifiée", "Référente du cabinet"],
        },
        {
          name: "Sali",
          alt: "Sali - Assistante dentaire",
          diplomas: ["Assistante dentaire qualifiée"],
        },
      ],
    },
    contactSection: {
      title: "Contact & Localisation",
      subtitle: "Facilement accessible en transport en commun et en voiture.",
    },
    contactCard: {
      title: "Informations Pratiques",
      addressLabel: "Adresse",
      phoneLabel: "Téléphone",
      emailLabel: "Email",
      hoursLabel: "Horaires d'ouverture",
    },
    hours: {
      days: [
        { label: "Lundi", time: "09h00 - 19h30" },
        { label: "Mardi", time: "09h00 - 19h30" },
        { label: "Mercredi", time: "09h00 - 19h30" },
        { label: "Jeudi", time: "09h00 - 19h30" },
        { label: "Vendredi", time: "09h00 - 19h30" },
        { label: "Samedi", time: "09h00 - 14h00" },
        { label: "Dimanche", time: "Fermé" },
      ],
      summary: {
        weekdays: { label: "Lun, Mar, Mer, Jeu, Ven", time: "09h00 - 19h30" },
        saturday: { label: "Samedi", time: "09h00 - 14h00" },
        sunday: { label: "Dimanche", time: "Fermé" },
      },
    },
    transports: {
      title: "Transports",
      rerLabel: "RER A",
      rerDetail: "Station Noisiel",
      busLabel: "Bus",
      busDetail: "Lignes 211, 213, 220",
      stopsLabel: "Arrêts",
      stopsDetail: "Collège Le Luzard, Commissariat",
      parkingLabel: "Parking",
      parkingDetail: "29 Square de Diane, Noisiel",
    },
    map: { title: "Plan d'accès cabinet dentaire" },
    modal: {
      label: "Horaires",
      title: "Horaires d'ouverture",
      closeOverlay: "Fermer la fenêtre horaires",
    },
    footer: {
      description:
        "Soins dentaires de qualité dans un environnement moderne et rassurant.",
      contactTitle: "Contact",
      rights: "Cabinet Dentaire Dr Marzak. Tous droits réservés.",
    },
    faq: {
      title: "Questions Fréquentes",
      subtitle:
        "Retrouvez les réponses aux questions les plus courantes concernant notre cabinet dentaire à Champs-sur-Marne.",
      hoursIntro: "Le cabinet Dentalid est ouvert :",
      items: [
        {
          question: "Quelle est l'adresse de Dr Hauda MARZAK ?",
          answer:
            "L'adresse de Dr Hauda MARZAK est 2 Cours du Luzard, 77420 Champs-sur-Marne",
        },
        {
          question: "Quels sont les horaires d'ouverture du cabinet?",
          answer: { type: "hours" },
        },
        {
          question:
            "Quels sont les moyens de paiement acceptés par Dr Hauda MARZAK ?",
          answer:
            "Dr Hauda MARZAK accepte les moyens de paiements suivants : chèques, espèces et carte bancaire. Pour les traitements importants, des solutions de paiement échelonné peuvent être étudiées.",
        },
        {
          question: "Est-ce que Dr Hauda MARZAK accepte la carte Vitale ?",
          answer:
            "Oui, Dr Hauda MARZAK accepte la carte Vitale. Les soins sont remboursés par la Sécurité Sociale selon les tarifs conventionnés, et nous acceptons la plupart des mutuelles en tiers payant.",
        },
        {
          question: "Quelles sont les langues parlées par Dr Hauda MARZAK ?",
          answer:
            "Dr Hauda MARZAK parle français. Le cabinet peut également accueillir des patients parlant d'autres langues selon les besoins.",
        },
        {
          question:
            "Est-ce que Dr Hauda MARZAK accepte des nouveaux patients ?",
          answer:
            "Oui, Dr Hauda MARZAK accepte des nouveaux patients. N'hésitez pas à prendre rendez-vous en appelant le 01-64-68-59-59 ou en envoyant un email à cabinet.drmk@gmail.com.",
        },
      ],
    },
    cabinetCarousel: {
      title: "Découvrez notre cabinet",
      subtitle:
        "Un environnement moderne et professionnel pour votre bien-être dentaire",
      imageAlt: (index) => `Image ${index}`,
    },
    alt: {
      logo: "Cabinet Dentaire Logo",
      hero: "Sourire éclatant et naturel",
    },
    notFound: { message: "Oups ! Page introuvable", cta: "Retour à l'accueil" },
  },
  en: {
    language: { label: "Language" },
    brand: {
      doctorName: "Dr Marzak",
      clinicLabel: "Dental Clinic",
      fullName: "Dr Marzak Dental Clinic",
    },
    nav: {
      home: "Home",
      cabinet: "The Clinic",
      services: "Services",
      team: "Our Team",
      faq: "FAQ",
      contact: "Contact",
    },
    cta: {
      bookShort: "Book appointment",
      bookLong: "Book an appointment",
      locate: "Find us",
      close: "Close",
    },
    hero: {
      badge: "Modern dental clinic in Champs-sur-Marne",
      title: "A confident smile starts with attentive care.",
      subtitle:
        "Personalized treatments, a caring team, and a clinic designed for your comfort in the heart of Champs-sur-Marne.",
      newPatients: "New patients welcome",
      hoursTitle: "Flexible hours",
      hoursCta: "See hours",
    },
    heroHighlights: [
      {
        title: "Strict hygiene",
        description: "Rigorous protocols for maximum safety.",
      },
      {
        title: "Natural aesthetics",
        description: "Precise care for a harmonious smile.",
      },
      {
        title: "Easy access",
        description: "RER A and buses nearby.",
      },
    ],
    servicesSection: {
      title: "Our Services",
      subtitle:
        "A full range of dental care for the whole family, with modern equipment and a personalized approach.",
    },
    services: [
      {
        title: "Conservative Care",
        description:
          "Cavities, scaling, and routine care to preserve your natural teeth",
      },
      {
        title: "Dental Prosthetics",
        description: "Crowns, bridges, custom fixed or removable dentures",
      },
      {
        title: "Dental Implants",
        description: "Durable, aesthetic solutions and advanced implantology",
      },
      {
        title: "Orthodontics",
        description: "Alignment and correction, clear aligners",
      },
      {
        title: "Dental Emergencies",
        description: "Rapid care for emergencies and dental extractions",
      },
      {
        title: "Teeth Whitening",
        description: "Teeth whitening for a brighter smile",
      },
      {
        title: "Bruxism",
        description: "Treatment for teeth grinding, protective guards",
      },
      {
        title: "Endodontics",
        description: "Root canal treatment and devitalization",
      },
      {
        title: "Dental Veneers",
        description: "Aesthetic veneers to correct shape and color",
      },
      {
        title: "Pediatric Dentistry",
        description: "Specialized dental care for children and teenagers",
      },
      {
        title: "Dental Imaging",
        description: "Panoramic X-ray, 3D cone beam for precise diagnosis",
      },
      {
        title: "Stellite Denture",
        description: "Lightweight metal-alloy partial dentures",
      },
    ],
    advantagesSection: {
      title: "Why choose us?",
      subtitle:
        "A modern, accessible clinic in a convenient location for your comfort.",
    },
    advantages: [
      {
        title: "Modern Equipment",
        description: "State-of-the-art technology for optimal care",
      },
      {
        title: "Wheelchair accessible",
        description: "Ground-floor clinic, fully accessible",
      },
      {
        title: "Well connected",
        description: "RER A + Bus (lines 211, 213, 220)",
      },
    ],
    team: {
      title: "An expert, attentive team",
      subtitle:
        "Experienced practitioners and a caring team to support you at every step.",
      members: [
        {
          name: "Dr MARZAK Hauda",
          alt: "Dr Marzak Hauda",
          diplomas: [
            "State diploma of Doctor of Dental Surgery – Paris VII",
            "University Diploma in Oral and Maxillofacial Implantology (2021) – Paris XII",
          ],
        },
        {
          name: "Dr Fatiha Semmarene",
          alt: "Dr Fatiha Semmarene",
          diplomas: [
            "State diploma of Doctor of Dental Surgery – Faculty of Dental Surgery of Nancy",
          ],
        },
        {
          name: "Dr Myriam BETTAIBI",
          alt: "Dr Myriam BETTAIBI",
          diplomas: ["State diploma of Doctor of Dental Surgery"],
        },
        {
          name: "Simona",
          alt: "Simona - Dental assistant",
          diplomas: ["Qualified dental assistant", "Practice coordinator"],
        },
        {
          name: "Sali",
          alt: "Sali - Dental assistant",
          diplomas: ["Qualified dental assistant"],
        },
      ],
    },
    contactSection: {
      title: "Contact & Location",
      subtitle: "Easy to reach by public transport or by car.",
    },
    contactCard: {
      title: "Practical information",
      addressLabel: "Address",
      phoneLabel: "Phone",
      emailLabel: "Email",
      hoursLabel: "Opening hours",
    },
    hours: {
      days: [
        { label: "Monday", time: "09:00 - 19:30" },
        { label: "Tuesday", time: "09:00 - 19:30" },
        { label: "Wednesday", time: "09:00 - 19:30" },
        { label: "Thursday", time: "09:00 - 19:30" },
        { label: "Friday", time: "09:00 - 19:30" },
        { label: "Saturday", time: "09:00 - 14:00" },
        { label: "Sunday", time: "Closed" },
      ],
      summary: {
        weekdays: { label: "Mon, Tue, Wed, Thu, Fri", time: "09:00 - 19:30" },
        saturday: { label: "Saturday", time: "09:00 - 14:00" },
        sunday: { label: "Sunday", time: "Closed" },
      },
    },
    transports: {
      title: "Transportation",
      rerLabel: "RER A",
      rerDetail: "Noisiel station",
      busLabel: "Bus",
      busDetail: "Lines 211, 213, 220",
      stopsLabel: "Stops",
      stopsDetail: "Collège Le Luzard, Commissariat",
      parkingLabel: "Parking",
      parkingDetail: "29 Square de Diane, Noisiel",
    },
    map: { title: "Dental clinic access map" },
    modal: {
      label: "Hours",
      title: "Opening hours",
      closeOverlay: "Close hours window",
    },
    footer: {
      description: "Quality dental care in a modern, reassuring environment.",
      contactTitle: "Contact",
      rights: "Dr Marzak Dental Clinic. All rights reserved.",
    },
    faq: {
      title: "Frequently Asked Questions",
      subtitle:
        "Find answers to the most common questions about our dental clinic in Champs-sur-Marne.",
      hoursIntro: "The Dentalid clinic is open:",
      items: [
        {
          question: "What is Dr Hauda MARZAK's address?",
          answer:
            "Dr Hauda MARZAK's address is 2 Cours du Luzard, 77420 Champs-sur-Marne",
        },
        {
          question: "What are the clinic's opening hours?",
          answer: { type: "hours" },
        },
        {
          question: "What payment methods are accepted by Dr Hauda MARZAK?",
          answer:
            "Dr Hauda MARZAK accepts the following payment methods: cheques, cash, and bank cards. For major treatments, installment payment solutions can be considered.",
        },
        {
          question: "Does Dr Hauda MARZAK accept the Carte Vitale?",
          answer:
            "Yes, Dr Hauda MARZAK accepts the Carte Vitale. Treatments are reimbursed by Social Security according to the standard rates, and we accept most complementary insurance plans for third-party payment.",
        },
        {
          question: "Which languages does Dr Hauda MARZAK speak?",
          answer:
            "Dr Hauda MARZAK speaks French. The clinic can also welcome patients who speak other languages as needed.",
        },
        {
          question: "Does Dr Hauda MARZAK accept new patients?",
          answer:
            "Yes, Dr Hauda MARZAK accepts new patients. Feel free to book an appointment by calling 01-64-68-59-59 or emailing cabinet.drmk@gmail.com.",
        },
      ],
    },
    cabinetCarousel: {
      title: "Discover our clinic",
      subtitle: "A modern, professional environment for your dental well-being",
      imageAlt: (index) => `Image ${index}`,
    },
    alt: {
      logo: "Dental clinic logo",
      hero: "Bright, natural smile",
    },
    notFound: { message: "Oops! Page not found", cta: "Return to Home" },
  },
  ar: {
    language: { label: "اللغة" },
    brand: {
      doctorName: "Dr Marzak",
      clinicLabel: "عيادة الأسنان",
      fullName: "عيادة د. MARZAK لطب الأسنان",
    },
    nav: {
      home: "الرئيسية",
      cabinet: "العيادة",
      services: "الخدمات",
      team: "فريقنا",
      faq: "الأسئلة الشائعة",
      contact: "اتصل بنا",
    },
    cta: {
      bookShort: "احجز موعدًا",
      bookLong: "احجز موعدًا",
      locate: "اعثر علينا",
      close: "إغلاق",
    },
    hero: {
      badge: "عيادة أسنان حديثة في شامب-سور-مارن",
      title: "ابتسامة واثقة تبدأ بعناية دقيقة.",
      subtitle:
        "علاجات مخصّصة، وفريق متعاطف، وعيادة صُممت لراحتكم في قلب شامب-سور-مارن.",
      newPatients: "نرحّب بالمرضى الجدد",
      hoursTitle: "مواعيد مرنة",
      hoursCta: "عرض المواعيد",
    },
    heroHighlights: [
      {
        title: "تعقيم صارم",
        description: "بروتوكولات صارمة لسلامة قصوى.",
      },
      {
        title: "جمال طبيعي",
        description: "علاجات دقيقة لابتسامة متناغمة.",
      },
      {
        title: "سهولة الوصول",
        description: "قطار RER A والحافلات على مقربة مباشرة.",
      },
    ],
    servicesSection: {
      title: "خدماتنا",
      subtitle:
        "مجموعة متكاملة من علاجات الأسنان لكل أفراد العائلة، مع تجهيزات حديثة ونهج مخصص.",
    },
    services: [
      {
        title: "علاجات تحفظية",
        description:
          "علاج التسوّس، إزالة الجير، ورعاية دورية للحفاظ على أسنانكم الطبيعية",
      },
      {
        title: "تعويضات الأسنان",
        description: "تيجان، جسور، أطقم ثابتة أو متحركة مصممة حسب المقاس",
      },
      {
        title: "زراعة الأسنان",
        description: "حلول متينة وجمالية، وزراعة متقدمة",
      },
      {
        title: "تقويم الأسنان",
        description: "محاذاة وتصحيح الأسنان، وتقويمات شفافة",
      },
      {
        title: "طوارئ الأسنان",
        description: "عناية سريعة بالطوارئ وخلع الأسنان",
      },
      {
        title: "تبييض الأسنان",
        description: "تفتيح الأسنان لابتسامة أكثر إشراقًا",
      },
      {
        title: "صرير الأسنان",
        description: "علاج صرير الأسنان، وواقيات ليلية",
      },
      {
        title: "علاج الجذور",
        description: "علاج قنوات الجذور وإزالة العصب",
      },
      {
        title: "قشور تجميلية",
        description: "قشور تجميلية لتصحيح الشكل واللون",
      },
      {
        title: "طب أسنان الأطفال",
        description: "رعاية متخصصة للأطفال والمراهقين",
      },
      {
        title: "تصوير الأسنان",
        description: "أشعة بانورامية وتصوير مخروط ثلاثي الأبعاد لتشخيص دقيق",
      },
      {
        title: "طقم ستلايت",
        description: "أطقم جزئية من سبيكة معدنية خفيفة",
      },
    ],
    advantagesSection: {
      title: "لماذا تختارنا؟",
      subtitle: "عيادة حديثة، مهيأة وسهلة الوصول لراحتكم.",
    },
    advantages: [
      {
        title: "معدات حديثة",
        description: "تقنيات متقدمة لرعاية مثالية",
      },
      {
        title: "مهيأة لذوي الحركة المحدودة",
        description: "العيادة في الطابق الأرضي ومهيأة بالكامل",
      },
      {
        title: "موقع مريح",
        description: "RER A + حافلات (الخطوط 211، 213، 220)",
      },
    ],
    team: {
      title: "فريق خبير ومهتم",
      subtitle: "ممارسون ذوو خبرة وفريق متعاطف لمرافقتكم في كل خطوة.",
      members: [
        {
          name: "Dr MARZAK Hauda",
          alt: "Dr Marzak Hauda",
          diplomas: [
            "دبلوم الدولة دكتور في جراحة الأسنان – باريس 7",
            "دبلوم جامعي في زراعة الأسنان الفموية والوجه والفكين (2021) – باريس 12",
          ],
        },
        {
          name: "Dr Fatiha Semmarene",
          alt: "Dr Fatiha Semmarene",
          diplomas: [
            "دبلوم الدولة دكتورة في جراحة الأسنان – كلية جراحة الأسنان بنانسي",
          ],
        },
        {
          name: "Dr Myriam BETTAIBI",
          alt: "Dr Myriam BETTAIBI",
          diplomas: ["دبلوم الدولة دكتورة في جراحة الأسنان"],
        },
        {
          name: "Simona",
          alt: "Simona - مساعدة أسنان",
          diplomas: ["مساعدة أسنان مؤهلة", "مسؤولة العيادة"],
        },
        {
          name: "Sali",
          alt: "Sali - مساعدة أسنان",
          diplomas: ["مساعدة أسنان مؤهلة"],
        },
      ],
    },
    contactSection: {
      title: "التواصل والموقع",
      subtitle: "سهل الوصول بوسائل النقل العامة وبالسيارة.",
    },
    contactCard: {
      title: "معلومات عملية",
      addressLabel: "العنوان",
      phoneLabel: "الهاتف",
      emailLabel: "البريد الإلكتروني",
      hoursLabel: "ساعات العمل",
    },
    hours: {
      days: [
        { label: "الاثنين", time: "09:00 - 19:30" },
        { label: "الثلاثاء", time: "09:00 - 19:30" },
        { label: "الأربعاء", time: "09:00 - 19:30" },
        { label: "الخميس", time: "09:00 - 19:30" },
        { label: "الجمعة", time: "09:00 - 19:30" },
        { label: "السبت", time: "09:00 - 14:00" },
        { label: "الأحد", time: "مغلق" },
      ],
      summary: {
        weekdays: {
          label: "الاثنين، الثلاثاء، الأربعاء، الخميس، الجمعة",
          time: "09:00 - 19:30",
        },
        saturday: { label: "السبت", time: "09:00 - 14:00" },
        sunday: { label: "الأحد", time: "مغلق" },
      },
    },
    transports: {
      title: "وسائل النقل",
      rerLabel: "RER A",
      rerDetail: "محطة نويزييل",
      busLabel: "الحافلات",
      busDetail: "الخطوط 211، 213، 220",
      stopsLabel: "المحطات",
      stopsDetail: "Collège Le Luzard، Commissariat",
      parkingLabel: "موقف سيارات",
      parkingDetail: "29 Square de Diane، Noisiel",
    },
    map: { title: "خريطة الوصول إلى عيادة الأسنان" },
    modal: {
      label: "الساعات",
      title: "ساعات العمل",
      closeOverlay: "إغلاق نافذة المواعيد",
    },
    footer: {
      description: "رعاية أسنان عالية الجودة في بيئة حديثة ومطمئنة.",
      contactTitle: "التواصل",
      rights: "عيادة د. MARZAK لطب الأسنان. جميع الحقوق محفوظة.",
    },
    faq: {
      title: "الأسئلة الشائعة",
      subtitle:
        "اعثر على إجابات لأكثر الأسئلة شيوعًا حول عيادتنا في شامب-سور-مارن.",
      hoursIntro: "عيادة Dentalid مفتوحة:",
      items: [
        {
          question: "ما عنوان الدكتورة Hauda MARZAK؟",
          answer:
            "عنوان الدكتورة Hauda MARZAK هو 2 Cours du Luzard، 77420 Champs-sur-Marne",
        },
        {
          question: "ما هي ساعات عمل العيادة؟",
          answer: { type: "hours" },
        },
        {
          question: "ما وسائل الدفع المقبولة لدى الدكتورة Hauda MARZAK؟",
          answer:
            "تقبل الدكتورة Hauda MARZAK وسائل الدفع التالية: الشيكات، النقد وبطاقات الدفع. وبالنسبة للعلاجات المهمة، يمكن دراسة حلول للدفع بالتقسيط.",
        },
        {
          question: "هل تقبل الدكتورة Hauda MARZAK بطاقة Carte Vitale؟",
          answer:
            "نعم، تقبل الدكتورة Hauda MARZAK بطاقة Carte Vitale. تُسدد العلاجات من طرف الضمان الاجتماعي وفق التعريفات المتعاقد عليها، ونقبل معظم شركات التأمين التكميلي بنظام الدفع من الطرف الثالث.",
        },
        {
          question: "ما اللغات التي تتحدثها الدكتورة Hauda MARZAK؟",
          answer:
            "تتحدث الدكتورة Hauda MARZAK الفرنسية. ويمكن للعيادة أيضًا استقبال مرضى يتحدثون لغات أخرى حسب الحاجة.",
        },
        {
          question: "هل تقبل الدكتورة Hauda MARZAK مرضى جدد؟",
          answer:
            "نعم، تقبل الدكتورة Hauda MARZAK مرضى جدد. لا تتردد في حجز موعد عبر الاتصال على 01-64-68-59-59 أو عبر البريد الإلكتروني cabinet.drmk@gmail.com.",
        },
      ],
    },
    cabinetCarousel: {
      title: "اكتشف عيادتنا",
      subtitle: "بيئة حديثة ومهنية لراحتكم وصحة أسنانكم",
      imageAlt: (index) => `صورة ${index}`,
    },
    alt: {
      logo: "شعار عيادة الأسنان",
      hero: "ابتسامة مشرقة وطبيعية",
    },
    notFound: {
      message: "عذرًا! الصفحة غير موجودة",
      cta: "العودة إلى الصفحة الرئيسية",
    },
  },
  de: {
    language: { label: "Sprache" },
    brand: {
      doctorName: "Dr Marzak",
      clinicLabel: "Zahnarztpraxis",
      fullName: "Zahnarztpraxis Dr. Marzak",
    },
    nav: {
      home: "Startseite",
      cabinet: "Die Praxis",
      services: "Leistungen",
      team: "Unser Team",
      faq: "FAQ",
      contact: "Kontakt",
    },
    cta: {
      bookShort: "Termin buchen",
      bookLong: "Einen Termin vereinbaren",
      locate: "Anfahrt",
      close: "Schließen",
    },
    hero: {
      badge: "Moderne Zahnarztpraxis in Champs-sur-Marne",
      title: "Ein selbstbewusstes Lächeln beginnt mit einfühlsamer Behandlung.",
      subtitle:
        "Individuelle Behandlungen, ein fürsorgliches Team und eine Praxis, die auf Ihren Komfort ausgerichtet ist – im Herzen von Champs-sur-Marne.",
      newPatients: "Neue Patienten willkommen",
      hoursTitle: "Flexible Öffnungszeiten",
      hoursCta: "Öffnungszeiten ansehen",
    },
    heroHighlights: [
      {
        title: "Strikte Hygiene",
        description: "Strenge Protokolle für maximale Sicherheit.",
      },
      {
        title: "Natürliche Ästhetik",
        description: "Präzise Behandlungen für ein harmonisches Lächeln.",
      },
      {
        title: "Gute Erreichbarkeit",
        description: "RER A und Busse in unmittelbarer Nähe.",
      },
    ],
    servicesSection: {
      title: "Unsere Leistungen",
      subtitle:
        "Ein umfassendes Angebot an Zahnbehandlungen für die ganze Familie – mit moderner Ausstattung und individueller Betreuung.",
    },
    services: [
      {
        title: "Zahnerhaltende Behandlungen",
        description:
          "Kariesbehandlung, Zahnsteinentfernung und Routinepflege zum Erhalt Ihrer natürlichen Zähne",
      },
      {
        title: "Zahnersatz",
        description:
          "Kronen, Brücken, maßgefertigte festsitzende oder herausnehmbare Prothesen",
      },
      {
        title: "Zahnimplantate",
        description:
          "Langlebige, ästhetische Lösungen und fortschrittliche Implantologie",
      },
      {
        title: "Kieferorthopädie",
        description: "Ausrichtung und Korrektur, transparente Schienen",
      },
      {
        title: "Zahnmedizinische Notfälle",
        description: "Schnelle Versorgung von Notfällen und Zahnextraktionen",
      },
      {
        title: "Zahnaufhellung",
        description: "Zahnaufhellung für ein strahlenderes Lächeln",
      },
      {
        title: "Bruxismus",
        description: "Behandlung von Zähneknirschen, Schutzschienen",
      },
      {
        title: "Endodontie",
        description: "Wurzelkanalbehandlung, Devitalisierung",
      },
      {
        title: "Zahnveneers",
        description: "Ästhetische Veneers zur Korrektur von Form und Farbe",
      },
      {
        title: "Kinderzahnheilkunde",
        description: "Spezialisierte Zahnbehandlung für Kinder und Jugendliche",
      },
      {
        title: "Dentale Bildgebung",
        description: "Panorama-Röntgen, 3D-DVT für präzise Diagnostik",
      },
      {
        title: "Stellite-Prothese",
        description: "Teilprothesen aus leichter Metalllegierung",
      },
    ],
    advantagesSection: {
      title: "Warum wir?",
      subtitle:
        "Eine moderne, barrierefreie Praxis in idealer Lage für Ihren Komfort.",
    },
    advantages: [
      {
        title: "Moderne Ausstattung",
        description:
          "Technologie auf dem neuesten Stand für optimale Behandlungen",
      },
      {
        title: "Barrierefrei",
        description: "Praxis im Erdgeschoss, vollständig zugänglich",
      },
      {
        title: "Sehr gut angebunden",
        description: "RER A + Bus (Linien 211, 213, 220)",
      },
    ],
    team: {
      title: "Ein erfahrenes, einfühlsames Team",
      subtitle:
        "Erfahrene Behandler und ein fürsorgliches Team begleiten Sie bei jedem Schritt.",
      members: [
        {
          name: "Dr MARZAK Hauda",
          alt: "Dr Marzak Hauda",
          diplomas: [
            "Staatliches Diplom als Doktor der Zahnchirurgie – Paris VII",
            "Universitätsdiplom in oraler und maxillofazialer Implantologie (2021) – Paris XII",
          ],
        },
        {
          name: "Dr Fatiha Semmarene",
          alt: "Dr Fatiha Semmarene",
          diplomas: [
            "Staatliches Diplom als Doktor der Zahnchirurgie – Fakultät für Zahnchirurgie Nancy",
          ],
        },
        {
          name: "Dr Myriam BETTAIBI",
          alt: "Dr Myriam BETTAIBI",
          diplomas: ["Staatliches Diplom als Doktor der Zahnchirurgie"],
        },
        {
          name: "Simona",
          alt: "Simona - Dentalassistentin",
          diplomas: [
            "Qualifizierte zahnmedizinische Fachangestellte",
            "Praxisreferentin",
          ],
        },
        {
          name: "Sali",
          alt: "Sali - Dentalassistentin",
          diplomas: ["Qualifizierte zahnmedizinische Fachangestellte"],
        },
      ],
    },
    contactSection: {
      title: "Kontakt & Anfahrt",
      subtitle:
        "Bequem erreichbar mit öffentlichen Verkehrsmitteln oder dem Auto.",
    },
    contactCard: {
      title: "Praktische Informationen",
      addressLabel: "Adresse",
      phoneLabel: "Telefon",
      emailLabel: "E-Mail",
      hoursLabel: "Öffnungszeiten",
    },
    hours: {
      days: [
        { label: "Montag", time: "09:00 - 19:30" },
        { label: "Dienstag", time: "09:00 - 19:30" },
        { label: "Mittwoch", time: "09:00 - 19:30" },
        { label: "Donnerstag", time: "09:00 - 19:30" },
        { label: "Freitag", time: "09:00 - 19:30" },
        { label: "Samstag", time: "09:00 - 14:00" },
        { label: "Sonntag", time: "Geschlossen" },
      ],
      summary: {
        weekdays: { label: "Mo, Di, Mi, Do, Fr", time: "09:00 - 19:30" },
        saturday: { label: "Samstag", time: "09:00 - 14:00" },
        sunday: { label: "Sonntag", time: "Geschlossen" },
      },
    },
    transports: {
      title: "Anfahrt",
      rerLabel: "RER A",
      rerDetail: "Bahnhof Noisiel",
      busLabel: "Bus",
      busDetail: "Linien 211, 213, 220",
      stopsLabel: "Haltestellen",
      stopsDetail: "Collège Le Luzard, Commissariat",
      parkingLabel: "Parken",
      parkingDetail: "29 Square de Diane, Noisiel",
    },
    map: { title: "Anfahrtskarte Zahnarztpraxis" },
    modal: {
      label: "Öffnungszeiten",
      title: "Öffnungszeiten",
      closeOverlay: "Öffnungszeiten schließen",
    },
    footer: {
      description:
        "Zahnmedizinische Qualität in einer modernen, beruhigenden Umgebung.",
      contactTitle: "Kontakt",
      rights: "Zahnarztpraxis Dr. Marzak. Alle Rechte vorbehalten.",
    },
    faq: {
      title: "Häufige Fragen",
      subtitle:
        "Hier finden Sie Antworten auf die häufigsten Fragen zu unserer Zahnarztpraxis in Champs-sur-Marne.",
      hoursIntro: "Die Dentalid-Praxis ist geöffnet:",
      items: [
        {
          question: "Wie lautet die Adresse von Dr. Hauda MARZAK?",
          answer:
            "Die Adresse von Dr. Hauda MARZAK ist 2 Cours du Luzard, 77420 Champs-sur-Marne",
        },
        {
          question: "Wie sind die Öffnungszeiten der Praxis?",
          answer: { type: "hours" },
        },
        {
          question: "Welche Zahlungsmethoden akzeptiert Dr. Hauda MARZAK?",
          answer:
            "Dr. Hauda MARZAK akzeptiert folgende Zahlungsmethoden: Schecks, Bargeld und Bankkarten. Bei größeren Behandlungen können Ratenzahlungen in Betracht gezogen werden.",
        },
        {
          question: "Akzeptiert Dr. Hauda MARZAK die Carte Vitale?",
          answer:
            "Ja, Dr. Hauda MARZAK akzeptiert die Carte Vitale. Die Behandlungen werden von der Sozialversicherung zu den Vertragssätzen erstattet, und wir akzeptieren die meisten Zusatzversicherungen im Rahmen des Drittzahlerverfahrens.",
        },
        {
          question: "Welche Sprachen spricht Dr. Hauda MARZAK?",
          answer:
            "Dr. Hauda MARZAK spricht Französisch. Die Praxis kann je nach Bedarf auch Patientinnen und Patienten empfangen, die andere Sprachen sprechen.",
        },
        {
          question: "Nimmt Dr. Hauda MARZAK neue Patienten an?",
          answer:
            "Ja, Dr. Hauda MARZAK nimmt neue Patienten an. Vereinbaren Sie gern einen Termin unter 01-64-68-59-59 oder per E-Mail an cabinet.drmk@gmail.com.",
        },
      ],
    },
    cabinetCarousel: {
      title: "Entdecken Sie unsere Praxis",
      subtitle:
        "Eine moderne, professionelle Umgebung für Ihr zahnmedizinisches Wohlbefinden",
      imageAlt: (index) => `Bild ${index}`,
    },
    alt: {
      logo: "Logo der Zahnarztpraxis",
      hero: "Strahlendes, natürliches Lächeln",
    },
    notFound: { message: "Ups! Seite nicht gefunden", cta: "Zur Startseite" },
  },
  es: {
    language: { label: "Idioma" },
    brand: {
      doctorName: "Dr Marzak",
      clinicLabel: "Clínica dental",
      fullName: "Clínica dental Dr. Marzak",
    },
    nav: {
      home: "Inicio",
      cabinet: "La clínica",
      services: "Servicios",
      team: "Nuestro equipo",
      faq: "Preguntas frecuentes",
      contact: "Contacto",
    },
    cta: {
      bookShort: "Pedir cita",
      bookLong: "Reservar una cita",
      locate: "Cómo llegar",
      close: "Cerrar",
    },
    hero: {
      badge: "Clínica dental moderna en Champs-sur-Marne",
      title: "Una sonrisa segura comienza con una atención cuidadosa.",
      subtitle:
        "Tratamientos personalizados, un equipo atento y una clínica pensada para tu comodidad en el corazón de Champs-sur-Marne.",
      newPatients: "Nuevos pacientes bienvenidos",
      hoursTitle: "Horarios flexibles",
      hoursCta: "Ver horarios",
    },
    heroHighlights: [
      {
        title: "Higiene rigurosa",
        description: "Protocolos rigurosos para una seguridad máxima.",
      },
      {
        title: "Estética natural",
        description: "Tratamientos precisos para una sonrisa armoniosa.",
      },
      {
        title: "Acceso fácil",
        description: "RER A y autobuses muy cerca.",
      },
    ],
    servicesSection: {
      title: "Nuestros servicios",
      subtitle:
        "Una gama completa de atención dental para toda la familia, con equipamiento moderno y un enfoque personalizado.",
    },
    services: [
      {
        title: "Tratamientos conservadores",
        description:
          "Caries, limpieza dental y cuidados de rutina para conservar tus dientes naturales",
      },
      {
        title: "Prótesis dentales",
        description:
          "Coronas, puentes y dentaduras fijas o removibles a medida",
      },
      {
        title: "Implantes dentales",
        description: "Soluciones duraderas y estéticas, implantología avanzada",
      },
      {
        title: "Ortodoncia",
        description:
          "Alineación y corrección dental, alineadores transparentes",
      },
      {
        title: "Urgencias dentales",
        description: "Atención rápida a urgencias y extracciones dentales",
      },
      {
        title: "Blanqueamiento dental",
        description: "Blanqueamiento para una sonrisa más luminosa",
      },
      {
        title: "Bruxismo",
        description: "Tratamiento del bruxismo, férulas de protección",
      },
      {
        title: "Endodoncia",
        description: "Tratamiento de conductos y desvitalización",
      },
      {
        title: "Carillas dentales",
        description: "Carillas estéticas para corregir forma y color",
      },
      {
        title: "Odontopediatría",
        description: "Atención dental especializada para niños y adolescentes",
      },
      {
        title: "Imagenología dental",
        description:
          "Radiografía panorámica y Cone Beam 3D para un diagnóstico preciso",
      },
      {
        title: "Prótesis Stellite",
        description: "Prótesis parciales en aleación metálica ligera",
      },
    ],
    advantagesSection: {
      title: "¿Por qué elegirnos?",
      subtitle:
        "Una clínica moderna, accesible y perfectamente situada para tu comodidad.",
    },
    advantages: [
      {
        title: "Equipamiento moderno",
        description: "Tecnología de vanguardia para una atención óptima",
      },
      {
        title: "Accesible para movilidad reducida",
        description: "Clínica en planta baja, totalmente accesible",
      },
      {
        title: "Bien comunicada",
        description: "RER A + bus (líneas 211, 213, 220)",
      },
    ],
    team: {
      title: "Un equipo experto y atento",
      subtitle:
        "Profesionales con experiencia y un equipo cercano para acompañarte en cada etapa.",
      members: [
        {
          name: "Dr MARZAK Hauda",
          alt: "Dra. Marzak Hauda",
          diplomas: [
            "Diploma estatal de Doctora en Cirugía Dental – París VII",
            "Diploma universitario en Implantología Oral y Maxilofacial (2021) – París XII",
          ],
        },
        {
          name: "Dr Fatiha Semmarene",
          alt: "Dra. Fatiha Semmarene",
          diplomas: [
            "Diploma estatal de Doctora en Cirugía Dental – Facultad de Cirugía Dental de Nancy",
          ],
        },
        {
          name: "Dr Myriam BETTAIBI",
          alt: "Dra. Myriam BETTAIBI",
          diplomas: ["Diploma estatal de Doctora en Cirugía Dental"],
        },
        {
          name: "Simona",
          alt: "Simona - Asistente dental",
          diplomas: [
            "Asistente dental titulada",
            "Responsable del consultorio",
          ],
        },
        {
          name: "Sali",
          alt: "Sali - Asistente dental",
          diplomas: ["Asistente dental titulada"],
        },
      ],
    },
    contactSection: {
      title: "Contacto y ubicación",
      subtitle: "Fácilmente accesible en transporte público y en coche.",
    },
    contactCard: {
      title: "Información práctica",
      addressLabel: "Dirección",
      phoneLabel: "Teléfono",
      emailLabel: "Correo electrónico",
      hoursLabel: "Horario de apertura",
    },
    hours: {
      days: [
        { label: "Lunes", time: "09:00 - 19:30" },
        { label: "Martes", time: "09:00 - 19:30" },
        { label: "Miércoles", time: "09:00 - 19:30" },
        { label: "Jueves", time: "09:00 - 19:30" },
        { label: "Viernes", time: "09:00 - 19:30" },
        { label: "Sábado", time: "09:00 - 14:00" },
        { label: "Domingo", time: "Cerrado" },
      ],
      summary: {
        weekdays: { label: "Lun, Mar, Mié, Jue, Vie", time: "09:00 - 19:30" },
        saturday: { label: "Sábado", time: "09:00 - 14:00" },
        sunday: { label: "Domingo", time: "Cerrado" },
      },
    },
    transports: {
      title: "Transporte",
      rerLabel: "RER A",
      rerDetail: "Estación Noisiel",
      busLabel: "Bus",
      busDetail: "Líneas 211, 213, 220",
      stopsLabel: "Paradas",
      stopsDetail: "Collège Le Luzard, Commissariat",
      parkingLabel: "Parking",
      parkingDetail: "29 Square de Diane, Noisiel",
    },
    map: { title: "Mapa de acceso a la clínica dental" },
    modal: {
      label: "Horarios",
      title: "Horario de apertura",
      closeOverlay: "Cerrar ventana de horarios",
    },
    footer: {
      description:
        "Atención dental de calidad en un entorno moderno y tranquilizador.",
      contactTitle: "Contacto",
      rights: "Clínica dental Dr. Marzak. Todos los derechos reservados.",
    },
    faq: {
      title: "Preguntas frecuentes",
      subtitle:
        "Encuentra respuestas a las preguntas más comunes sobre nuestra clínica dental en Champs-sur-Marne.",
      hoursIntro: "La clínica Dentalid está abierta:",
      items: [
        {
          question: "¿Cuál es la dirección de la Dra. Hauda MARZAK?",
          answer:
            "La dirección de la Dra. Hauda MARZAK es 2 Cours du Luzard, 77420 Champs-sur-Marne",
        },
        {
          question: "¿Cuáles son los horarios de apertura de la clínica?",
          answer: { type: "hours" },
        },
        {
          question: "¿Qué medios de pago acepta la Dra. Hauda MARZAK?",
          answer:
            "La Dra. Hauda MARZAK acepta los siguientes medios de pago: cheques, efectivo y tarjeta bancaria. Para tratamientos importantes, se pueden estudiar opciones de pago fraccionado.",
        },
        {
          question: "¿La Dra. Hauda MARZAK acepta la Carte Vitale?",
          answer:
            "Sí, la Dra. Hauda MARZAK acepta la Carte Vitale. Los tratamientos están reembolsados por la Seguridad Social según las tarifas convenidas, y aceptamos la mayoría de las mutuas con pago por terceros.",
        },
        {
          question: "¿Qué idiomas habla la Dra. Hauda MARZAK?",
          answer:
            "La Dra. Hauda MARZAK habla francés. La clínica también puede atender a pacientes que hablen otros idiomas según las necesidades.",
        },
        {
          question: "¿La Dra. Hauda MARZAK acepta nuevos pacientes?",
          answer:
            "Sí, la Dra. Hauda MARZAK acepta nuevos pacientes. Puedes pedir cita llamando al 01-64-68-59-59 o enviando un email a cabinet.drmk@gmail.com.",
        },
      ],
    },
    cabinetCarousel: {
      title: "Descubre nuestra clínica",
      subtitle: "Un entorno moderno y profesional para tu bienestar dental",
      imageAlt: (index) => `Imagen ${index}`,
    },
    alt: {
      logo: "Logo de la clínica dental",
      hero: "Sonrisa brillante y natural",
    },
    notFound: {
      message: "¡Vaya! Página no encontrada",
      cta: "Volver al inicio",
    },
  },
  it: {
    language: { label: "Lingua" },
    brand: {
      doctorName: "Dr Marzak",
      clinicLabel: "Studio dentistico",
      fullName: "Studio dentistico Dr. Marzak",
    },
    nav: {
      home: "Home",
      cabinet: "Lo studio",
      services: "Servizi",
      team: "Il nostro team",
      faq: "FAQ",
      contact: "Contatti",
    },
    cta: {
      bookShort: "Prenota",
      bookLong: "Prenota un appuntamento",
      locate: "Dove siamo",
      close: "Chiudi",
    },
    hero: {
      badge: "Studio dentistico moderno a Champs-sur-Marne",
      title: "Un sorriso sicuro inizia con cure attente.",
      subtitle:
        "Trattamenti personalizzati, un team premuroso e uno studio pensato per il tuo comfort nel cuore di Champs-sur-Marne.",
      newPatients: "Nuovi pazienti benvenuti",
      hoursTitle: "Orari flessibili",
      hoursCta: "Vedi orari",
    },
    heroHighlights: [
      {
        title: "Igiene rigorosa",
        description: "Protocolli rigorosi per la massima sicurezza.",
      },
      {
        title: "Estetica naturale",
        description: "Cure precise per un sorriso armonioso.",
      },
      {
        title: "Accesso facile",
        description: "RER A e autobus a pochi passi.",
      },
    ],
    servicesSection: {
      title: "I nostri servizi",
      subtitle:
        "Una gamma completa di cure dentali per tutta la famiglia, con attrezzature moderne e un approccio personalizzato.",
    },
    services: [
      {
        title: "Cure conservative",
        description:
          "Carie, detartrasi e cure di routine per preservare i denti naturali",
      },
      {
        title: "Protesi dentarie",
        description: "Corone, ponti, protesi fisse o rimovibili su misura",
      },
      {
        title: "Impianti dentali",
        description: "Soluzioni durature ed estetiche, implantologia avanzata",
      },
      {
        title: "Ortodonzia",
        description:
          "Allineamento e correzione dentale, mascherine trasparenti",
      },
      {
        title: "Urgenze dentali",
        description: "Gestione rapida delle urgenze ed estrazioni",
      },
      {
        title: "Sbiancamento dentale",
        description: "Sbiancamento per un sorriso più luminoso",
      },
      {
        title: "Bruxismo",
        description: "Trattamento del digrignamento, bite di protezione",
      },
      {
        title: "Endodonzia",
        description: "Terapia canalare, devitalizzazione",
      },
      {
        title: "Faccette dentali",
        description: "Faccette estetiche per correggere forma e colore",
      },
      {
        title: "Odontoiatria pediatrica",
        description: "Cure dentali specializzate per bambini e adolescenti",
      },
      {
        title: "Imaging dentale",
        description:
          "Radiografia panoramica e Cone Beam 3D per diagnosi precisa",
      },
      {
        title: "Protesi Stellite",
        description: "Protesi parziali in lega metallica leggera",
      },
    ],
    advantagesSection: {
      title: "Perché sceglierci?",
      subtitle:
        "Uno studio moderno, accessibile e perfettamente situato per il tuo comfort.",
    },
    advantages: [
      {
        title: "Attrezzature moderne",
        description: "Tecnologie all'avanguardia per cure ottimali",
      },
      {
        title: "Accessibile",
        description: "Studio al piano terra, completamente accessibile",
      },
      {
        title: "Ben collegato",
        description: "RER A + bus (linee 211, 213, 220)",
      },
    ],
    team: {
      title: "Un team esperto e attento",
      subtitle:
        "Professionisti esperti e un team premuroso per accompagnarti in ogni fase.",
      members: [
        {
          name: "Dr MARZAK Hauda",
          alt: "Dr Marzak Hauda",
          diplomas: [
            "Diploma di Stato di Dottoressa in Chirurgia Odontoiatrica – Parigi VII",
            "Diploma universitario in Implantologia Orale e Maxillo-facciale (2021) – Parigi XII",
          ],
        },
        {
          name: "Dr Fatiha Semmarene",
          alt: "Dr Fatiha Semmarene",
          diplomas: [
            "Diploma di Stato di Dottoressa in Chirurgia Odontoiatrica – Facoltà di Chirurgia Odontoiatrica di Nancy",
          ],
        },
        {
          name: "Dr Myriam BETTAIBI",
          alt: "Dr Myriam BETTAIBI",
          diplomas: [
            "Diploma di Stato di Dottoressa in Chirurgia Odontoiatrica",
          ],
        },
        {
          name: "Simona",
          alt: "Simona - Assistente dentale",
          diplomas: [
            "Assistente dentale qualificata",
            "Referente dello studio",
          ],
        },
        {
          name: "Sali",
          alt: "Sali - Assistente dentale",
          diplomas: ["Assistente dentale qualificata"],
        },
      ],
    },
    contactSection: {
      title: "Contatto e posizione",
      subtitle: "Facilmente raggiungibile con i mezzi pubblici e in auto.",
    },
    contactCard: {
      title: "Informazioni pratiche",
      addressLabel: "Indirizzo",
      phoneLabel: "Telefono",
      emailLabel: "Email",
      hoursLabel: "Orari di apertura",
    },
    hours: {
      days: [
        { label: "Lunedì", time: "09:00 - 19:30" },
        { label: "Martedì", time: "09:00 - 19:30" },
        { label: "Mercoledì", time: "09:00 - 19:30" },
        { label: "Giovedì", time: "09:00 - 19:30" },
        { label: "Venerdì", time: "09:00 - 19:30" },
        { label: "Sabato", time: "09:00 - 14:00" },
        { label: "Domenica", time: "Chiuso" },
      ],
      summary: {
        weekdays: { label: "Lun, Mar, Mer, Gio, Ven", time: "09:00 - 19:30" },
        saturday: { label: "Sabato", time: "09:00 - 14:00" },
        sunday: { label: "Domenica", time: "Chiuso" },
      },
    },
    transports: {
      title: "Trasporti",
      rerLabel: "RER A",
      rerDetail: "Stazione Noisiel",
      busLabel: "Bus",
      busDetail: "Linee 211, 213, 220",
      stopsLabel: "Fermate",
      stopsDetail: "Collège Le Luzard, Commissariat",
      parkingLabel: "Parcheggio",
      parkingDetail: "29 Square de Diane, Noisiel",
    },
    map: { title: "Mappa di accesso allo studio dentistico" },
    modal: {
      label: "Orari",
      title: "Orari di apertura",
      closeOverlay: "Chiudi finestra orari",
    },
    footer: {
      description:
        "Cure dentali di qualità in un ambiente moderno e rassicurante.",
      contactTitle: "Contatti",
      rights: "Studio dentistico Dr. Marzak. Tutti i diritti riservati.",
    },
    faq: {
      title: "Domande frequenti",
      subtitle:
        "Trova le risposte alle domande più comuni sul nostro studio dentistico a Champs-sur-Marne.",
      hoursIntro: "Lo studio Dentalid è aperto:",
      items: [
        {
          question: "Qual è l'indirizzo della Dr.ssa Hauda MARZAK?",
          answer:
            "L'indirizzo della Dr.ssa Hauda MARZAK è 2 Cours du Luzard, 77420 Champs-sur-Marne",
        },
        {
          question: "Quali sono gli orari di apertura dello studio?",
          answer: { type: "hours" },
        },
        {
          question: "Quali metodi di pagamento accetta la Dr.ssa Hauda MARZAK?",
          answer:
            "La Dr.ssa Hauda MARZAK accetta i seguenti metodi di pagamento: assegni, contanti e carta bancaria. Per trattamenti importanti, possono essere valutate soluzioni di pagamento rateale.",
        },
        {
          question: "La Dr.ssa Hauda MARZAK accetta la Carte Vitale?",
          answer:
            "Sì, la Dr.ssa Hauda MARZAK accetta la Carte Vitale. Le cure sono rimborsate dalla Sécurité Sociale secondo le tariffe convenzionate e accettiamo la maggior parte delle assicurazioni integrative con pagamento da terzi.",
        },
        {
          question: "Quali lingue parla la Dr.ssa Hauda MARZAK?",
          answer:
            "La Dr.ssa Hauda MARZAK parla francese. Lo studio può anche accogliere pazienti che parlano altre lingue, secondo le necessità.",
        },
        {
          question: "La Dr.ssa Hauda MARZAK accetta nuovi pazienti?",
          answer:
            "Sì, la Dr.ssa Hauda MARZAK accetta nuovi pazienti. Puoi prenotare chiamando il 01-64-68-59-59 o scrivendo a cabinet.drmk@gmail.com.",
        },
      ],
    },
    cabinetCarousel: {
      title: "Scopri il nostro studio",
      subtitle:
        "Un ambiente moderno e professionale per il tuo benessere dentale",
      imageAlt: (index) => `Immagine ${index}`,
    },
    alt: {
      logo: "Logo dello studio dentistico",
      hero: "Sorriso luminoso e naturale",
    },
    notFound: { message: "Ops! Pagina non trovata", cta: "Torna alla home" },
  },
  zh: {
    language: { label: "语言" },
    brand: {
      doctorName: "Dr Marzak",
      clinicLabel: "牙科诊所",
      fullName: "Dr Marzak 牙科诊所",
    },
    nav: {
      home: "首页",
      cabinet: "诊所",
      services: "服务",
      team: "我们的团队",
      faq: "常见问题",
      contact: "联系",
    },
    cta: {
      bookShort: "预约",
      bookLong: "预约就诊",
      locate: "找到我们",
      close: "关闭",
    },
    hero: {
      badge: "位于尚普-叙尔-马恩的现代牙科诊所",
      title: "自信的笑容始于细致的呵护。",
      subtitle:
        "个性化治疗、贴心团队，以及位于尚普-叙尔-马恩市中心、为舒适而设的诊所。",
      newPatients: "欢迎新患者",
      hoursTitle: "灵活的营业时间",
      hoursCta: "查看时间",
    },
    heroHighlights: [
      {
        title: "严格卫生",
        description: "严格的流程，确保最高安全性。",
      },
      {
        title: "自然美学",
        description: "精准护理，打造和谐笑容。",
      },
      {
        title: "交通便利",
        description: "RER A 和公交近在咫尺。",
      },
    ],
    servicesSection: {
      title: "我们的服务",
      subtitle: "为全家提供完整的牙科护理，配备现代设备并提供个性化方案。",
    },
    services: [
      {
        title: "保守治疗",
        description: "龋齿治疗、洁牙、日常护理，保护天然牙。",
      },
      {
        title: "牙科修复",
        description: "牙冠、牙桥、定制的固定或可摘义齿。",
      },
      {
        title: "牙种植",
        description: "持久、美观的解决方案，先进种植技术。",
      },
      {
        title: "正畸",
        description: "牙齿排列与矫正，隐形矫治器。",
      },
      {
        title: "牙科急诊",
        description: "快速处理急诊与拔牙。",
      },
      {
        title: "牙齿美白",
        description: "让笑容更亮白。",
      },
      {
        title: "磨牙症",
        description: "治疗磨牙，保护牙垫。",
      },
      {
        title: "根管治疗",
        description: "根管治疗、失活治疗。",
      },
      {
        title: "牙贴面",
        description: "用于改善形态与颜色的美学贴面。",
      },
      {
        title: "儿童牙科",
        description: "为儿童与青少年提供专业护理。",
      },
      {
        title: "牙科影像",
        description: "全景片与 3D CBCT，精准诊断。",
      },
      {
        title: "斯特莱特义齿",
        description: "轻质金属合金的部分义齿。",
      },
    ],
    advantagesSection: {
      title: "为什么选择我们？",
      subtitle: "现代化、无障碍且位置便利，为舒适就诊而设。",
    },
    advantages: [
      {
        title: "现代设备",
        description: "先进技术，保障最佳护理。",
      },
      {
        title: "无障碍通行",
        description: "诊所在一层，完全无障碍。",
      },
      {
        title: "交通便利",
        description: "RER A + 公交（线路 211、213、220）。",
      },
    ],
    team: {
      title: "专业且贴心的团队",
      subtitle: "经验丰富的医生与贴心团队全程陪伴。",
      members: [
        {
          name: "Dr MARZAK Hauda",
          alt: "Dr Marzak Hauda",
          diplomas: [
            "国家口腔外科博士学位 — 巴黎第七大学",
            "口腔与颌面种植学大学文凭（2021）— 巴黎第十二大学",
          ],
        },
        {
          name: "Dr Fatiha Semmarene",
          alt: "Dr Fatiha Semmarene",
          diplomas: ["国家口腔外科博士学位 — 南锡牙科外科学院"],
        },
        {
          name: "Dr Myriam BETTAIBI",
          alt: "Dr Myriam BETTAIBI",
          diplomas: ["国家口腔外科博士学位"],
        },
        {
          name: "Simona",
          alt: "Simona - 牙科助理",
          diplomas: ["合格牙科助理", "诊所协调员"],
        },
        {
          name: "Sali",
          alt: "Sali - 牙科助理",
          diplomas: ["合格牙科助理"],
        },
      ],
    },
    contactSection: {
      title: "联系与位置",
      subtitle: "公共交通或驾车均可轻松到达。",
    },
    contactCard: {
      title: "实用信息",
      addressLabel: "地址",
      phoneLabel: "电话",
      emailLabel: "邮箱",
      hoursLabel: "营业时间",
    },
    hours: {
      days: [
        { label: "周一", time: "09:00 - 19:30" },
        { label: "周二", time: "09:00 - 19:30" },
        { label: "周三", time: "09:00 - 19:30" },
        { label: "周四", time: "09:00 - 19:30" },
        { label: "周五", time: "09:00 - 19:30" },
        { label: "周六", time: "09:00 - 14:00" },
        { label: "周日", time: "休息" },
      ],
      summary: {
        weekdays: { label: "周一至周五", time: "09:00 - 19:30" },
        saturday: { label: "周六", time: "09:00 - 14:00" },
        sunday: { label: "周日", time: "休息" },
      },
    },
    transports: {
      title: "交通",
      rerLabel: "RER A",
      rerDetail: "Noisiel 站",
      busLabel: "公交",
      busDetail: "线路 211、213、220",
      stopsLabel: "站点",
      stopsDetail: "Collège Le Luzard, Commissariat",
      parkingLabel: "停车",
      parkingDetail: "29 Square de Diane, Noisiel",
    },
    map: { title: "牙科诊所交通地图" },
    modal: {
      label: "营业时间",
      title: "营业时间",
      closeOverlay: "关闭营业时间窗口",
    },
    footer: {
      description: "在现代、安心的环境中提供高品质牙科护理。",
      contactTitle: "联系我们",
      rights: "Dr Marzak 牙科诊所。保留所有权利。",
    },
    faq: {
      title: "常见问题",
      subtitle: "了解关于我们在尚普-叙尔-马恩的牙科诊所的常见问题解答。",
      hoursIntro: "Dentalid 诊所营业时间：",
      items: [
        {
          question: "Hauda MARZAK 医生的地址是什么？",
          answer:
            "Hauda MARZAK 医生的地址是 2 Cours du Luzard，77420 Champs-sur-Marne。",
        },
        {
          question: "诊所的营业时间是什么？",
          answer: { type: "hours" },
        },
        {
          question: "Hauda MARZAK 医生接受哪些付款方式？",
          answer:
            "Hauda MARZAK 医生接受以下付款方式：支票、现金和银行卡。对于较大治疗，可商议分期付款方案。",
        },
        {
          question: "Hauda MARZAK 医生接受 Carte Vitale 吗？",
          answer:
            "是的，Hauda MARZAK 医生接受 Carte Vitale。治疗费用按法国社保标准报销，我们也接受大多数互助保险的第三方支付。",
        },
        {
          question: "Hauda MARZAK 医生会说哪些语言？",
          answer:
            "Hauda MARZAK 医生会说法语。根据需要，诊所也可以接待使用其他语言的患者。",
        },
        {
          question: "Hauda MARZAK 医生接受新患者吗？",
          answer:
            "是的，Hauda MARZAK 医生接受新患者。欢迎致电 01-64-68-59-59 或发送邮件至 cabinet.drmk@gmail.com 预约。",
        },
      ],
    },
    cabinetCarousel: {
      title: "探索我们的诊所",
      subtitle: "现代、专业的环境，守护您的口腔健康",
      imageAlt: (index) => `图片 ${index}`,
    },
    alt: {
      logo: "牙科诊所标志",
      hero: "明亮自然的笑容",
    },
    notFound: { message: "糟糕！未找到页面", cta: "返回首页" },
  },
};

export const defaultLanguage: Language = "fr";

export const isSupportedLanguage = (value: string): value is Language =>
  languageOptions.some((option) => option.code === value);

export const isRtlLanguage = (language: Language) => language === "ar";
