import {
  Phone,
  MapPin,
  Clock,
  Mail,
  Menu,
  X,
  Stethoscope,
  Shield,
  Heart,
  Zap,
  Award,
  AlertTriangle,
  Sparkles,
  Scan,
  Activity,
  Layers,
  ShieldCheck,
  Baby,
  Radio,
  Settings,
} from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CabinetCarousel } from "@/components/CabinetCarousel";
import { Team } from "@/components/Team";
import { Faq } from "@/components/Faq";

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHoursOpen, setIsHoursOpen] = useState(false);
  const currentYear = new Date().getFullYear();
  const bookingUrl =
    "https://www.doctolib.fr/dentiste/champs-sur-marne/hauda-marzak";
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
    setIsMenuOpen(false);
  };

  const heroHighlights = [
    {
      icon: <ShieldCheck className="h-5 w-5 text-emerald-600" />,
      title: "Hygiène maîtrisée",
      description: "Protocoles rigoureux pour une sécurité maximale.",
    },
    {
      icon: <Sparkles className="h-5 w-5 text-emerald-600" />,
      title: "Esthétique naturelle",
      description: "Des soins précis pour un sourire harmonieux.",
    },
    {
      icon: <MapPin className="h-5 w-5 text-emerald-600" />,
      title: "Accès facile",
      description: "RER A et bus à proximité immédiate.",
    },
  ];

  const services = [
    {
      icon: <Stethoscope className="w-7 h-7 text-emerald-600" />,
      title: "Soins Conservateurs",
      description:
        "Caries, détartrage, soins de routine pour préserver vos dents naturelles",
    },
    {
      icon: <Shield className="w-7 h-7 text-emerald-600" />,
      title: "Prothèses Dentaires",
      description: "Couronnes, bridges, dentiers fixes ou amovibles sur mesure",
    },
    {
      icon: <Heart className="w-7 h-7 text-emerald-600" />,
      title: "Implants Dentaires",
      description: "Solutions durables et esthétiques, implantologie avancée",
    },
    {
      icon: <Zap className="w-7 h-7 text-emerald-600" />,
      title: "Orthodontie",
      description: "Alignement et correction dentaire, gouttières dentaires",
    },
    {
      icon: <AlertTriangle className="w-7 h-7 text-emerald-600" />,
      title: "Urgences Dentaires",
      description:
        "Prise en charge rapide des urgences et extractions dentaires",
    },
    {
      icon: <Sparkles className="w-7 h-7 text-emerald-600" />,
      title: "Blanchiment des dents",
      description: "Éclaircissement dentaire pour un sourire éclatant",
    },
    {
      icon: <ShieldCheck className="w-7 h-7 text-emerald-600" />,
      title: "Bruxisme",
      description:
        "Traitement du grincement de dents, gouttières de protection",
    },
    {
      icon: <Activity className="w-7 h-7 text-emerald-600" />,
      title: "Endodontie",
      description: "Traitement des canaux radiculaires, dévitalisation",
    },
    {
      icon: <Layers className="w-7 h-7 text-emerald-600" />,
      title: "Facettes Dentaires",
      description: "Facettes esthétiques pour corriger forme et couleur",
    },
    {
      icon: <Settings className="w-7 h-7 text-emerald-600" />,
      title: "Prothèses sur Implant",
      description: "Prothèses fixes stabilisées sur implants dentaires",
    },
    {
      icon: <Baby className="w-7 h-7 text-emerald-600" />,
      title: "Pédodontie",
      description: "Soins dentaires spécialisés pour enfants et adolescents",
    },
    {
      icon: <Radio className="w-7 h-7 text-emerald-600" />,
      title: "Imagerie Dentaire",
      description: "Radio panoramique, Cône beam 3D pour diagnostic précis",
    },
    {
      icon: <Scan className="w-7 h-7 text-emerald-600" />,
      title: "Stellite Dentaire",
      description: "Prothèses partielles en alliage métallique léger",
    },
  ];

  const advantages = [
    {
      icon: <Award className="w-6 h-6 text-emerald-600" />,
      title: "Équipements Modernes",
      description: "Technologies de pointe pour des soins optimaux",
    },
    {
      icon: <Shield className="w-6 h-6 text-emerald-600" />,
      title: "Accessible PMR",
      description: "Cabinet au rez-de-chaussée, entièrement accessible",
    },
    {
      icon: <Zap className="w-6 h-6 text-emerald-600" />,
      title: "Bien Desservi",
      description: "RER A + Bus (lignes 211, 213, 220)",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="bg-white/80 backdrop-blur-xl border-b border-emerald-100/60 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-emerald-500 to-sky-500 flex items-center justify-center mr-3 shadow-sm">
                <img
                  src="images/logo.png"
                  alt="Cabinet Dentaire Logo"
                  className="w-6 h-6"
                />
              </div>
              <div>
                <p className="text-lg font-semibold text-slate-900">
                  Dr Marzak
                </p>
                <p className="text-xs text-slate-500">Cabinet Dentaire</p>
              </div>
            </div>

            <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
              <button
                onClick={() => scrollToSection("accueil")}
                className="text-slate-600 hover:text-emerald-700 transition-colors"
              >
                Accueil
              </button>
              <button
                onClick={() => scrollToSection("cabinet")}
                className="text-slate-600 hover:text-emerald-700 transition-colors"
              >
                Le Cabinet
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-slate-600 hover:text-emerald-700 transition-colors"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("team")}
                className="text-slate-600 hover:text-emerald-700 transition-colors"
              >
                Notre Équipe
              </button>
              <button
                onClick={() => scrollToSection("faq")}
                className="text-slate-600 hover:text-emerald-700 transition-colors"
              >
                FAQ
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-slate-600 hover:text-emerald-700 transition-colors"
              >
                Contact
              </button>
              <a
                href="tel:01-64-68-59-59"
                className="hidden lg:inline-flex items-center rounded-full border border-emerald-100/70 px-3 py-1 text-emerald-700 hover:border-emerald-200 hover:text-emerald-800 transition"
              >
                01-64-68-59-59
              </a>
            </nav>

            <Button
              size="sm"
              className="hidden md:inline-flex bg-emerald-600 hover:bg-emerald-700 text-white rounded-full px-5 shadow-lg shadow-emerald-600/30"
              onClick={() => window.open(bookingUrl, "_blank")}
            >
              Prendre RDV
            </Button>

            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden bg-white/95 border-t border-emerald-100/60 py-4 rounded-b-3xl shadow-xl">
              <nav className="flex flex-col space-y-4 px-2 text-sm font-medium">
                <button
                  onClick={() => scrollToSection("accueil")}
                  className="text-slate-700 hover:text-emerald-700 transition-colors text-left"
                >
                  Accueil
                </button>
                <button
                  onClick={() => scrollToSection("cabinet")}
                  className="text-slate-700 hover:text-emerald-700 transition-colors text-left"
                >
                  Le Cabinet
                </button>
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-slate-700 hover:text-emerald-700 transition-colors text-left"
                >
                  Services
                </button>
                <button
                  onClick={() => scrollToSection("team")}
                  className="text-slate-700 hover:text-emerald-700 transition-colors text-left"
                >
                  Notre Équipe
                </button>
                <button
                  onClick={() => scrollToSection("faq")}
                  className="text-slate-700 hover:text-emerald-700 transition-colors text-left"
                >
                  FAQ
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-slate-700 hover:text-emerald-700 transition-colors text-left"
                >
                  Contact
                </button>
                <Button
                  className="bg-emerald-600 hover:bg-emerald-700 text-white w-full rounded-full"
                  onClick={() => window.open(bookingUrl, "_blank")}
                >
                  Prendre RDV
                </Button>
              </nav>
            </div>
          )}
        </div>
      </header>

      <section id="accueil" className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-[radial-gradient(60rem_45rem_at_10%_-10%,rgba(16,185,129,0.18),transparent_70%),radial-gradient(50rem_40rem_at_90%_0%,rgba(14,165,233,0.16),transparent_65%)]"
          aria-hidden="true"
        />
        <div
          className="absolute -top-24 right-0 h-72 w-72 rounded-full bg-emerald-200/50 blur-3xl animate-float"
          aria-hidden="true"
        />
        <div
          className="absolute -bottom-24 -left-10 h-72 w-72 rounded-full bg-sky-200/40 blur-3xl animate-float"
          style={{ animationDelay: "1.5s" }}
          aria-hidden="true"
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
            <div className="space-y-8">
              <div
                className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-sm text-emerald-700 shadow-sm ring-1 ring-emerald-100/70 backdrop-blur animate-fade-up"
                style={{ animationDelay: "60ms" }}
              >
                <Sparkles className="h-4 w-4" />
                Cabinet dentaire moderne à Champs-sur-Marne
              </div>

              <h1
                className="text-4xl sm:text-5xl lg:text-6xl font-display tracking-tight text-slate-900 animate-fade-up"
                style={{ animationDelay: "160ms" }}
              >
                Un sourire confiant commence par des soins attentionnés.
              </h1>
              <p
                className="text-lg text-slate-600 max-w-xl animate-fade-up"
                style={{ animationDelay: "240ms" }}
              >
                Des traitements personnalisés, une équipe bienveillante et un
                cabinet pensé pour votre confort au cœur de Champs-sur-Marne.
              </p>
              <div
                className="flex flex-col sm:flex-row gap-4 animate-fade-up"
                style={{ animationDelay: "320ms" }}
              >
                <Button
                  size="lg"
                  className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-full px-8 shadow-lg shadow-emerald-600/30"
                  onClick={() => window.open(bookingUrl, "_blank")}
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Prendre rendez-vous
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-emerald-200 text-emerald-700 hover:bg-emerald-50 rounded-full px-8"
                  onClick={() =>
                    document
                      .getElementById("contact")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  <MapPin className="w-5 h-5 mr-2" />
                  Nous localiser
                </Button>
              </div>
              <div
                className="grid gap-4 sm:grid-cols-3 animate-fade-up"
                style={{ animationDelay: "400ms" }}
              >
                {heroHighlights.map((highlight, index) => (
                  <div
                    key={index}
                    className="rounded-2xl border border-white/80 bg-white/70 p-4 shadow-sm backdrop-blur"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50">
                        {highlight.icon}
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-slate-900">
                          {highlight.title}
                        </p>
                        <p className="text-xs text-slate-500">
                          {highlight.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -top-6 -left-6 h-24 w-24 rounded-3xl bg-white/80 shadow-lg backdrop-blur animate-float" />
              <div className="relative overflow-hidden rounded-3xl border border-white/70 shadow-[0_30px_80px_-40px_rgba(16,185,129,0.55)]">
                <img
                  src="images/natural_look_smiling_with_healthy_white.jpg"
                  alt="Sourire éclatant et naturel"
                  className="rounded-3xl w-full h-auto object-cover aspect-[4/5]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent" />
              </div>
              <div className="absolute top-6 right-6 rounded-full bg-white/90 px-4 py-2 text-m font-semibold text-emerald-900 shadow-lg">
                Nouveaux patients bienvenus
              </div>
              <button
                type="button"
                onClick={() => setIsHoursOpen(true)}
                aria-haspopup="dialog"
                className="absolute -bottom-6 left-6 rounded-2xl bg-white/90 px-4 py-3 shadow-lg backdrop-blur border border-emerald-100/60 text-left transition hover:-translate-y-0.5 hover:shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">
                      Horaires flexibles
                    </p>
                    <p className="text-xs text-slate-500">Voir les horaires</p>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>

      <CabinetCarousel />

      <section
        id="services"
        className="py-20 bg-gradient-to-b from-white via-emerald-50/40 to-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-display font-semibold text-slate-900 mb-4">
              Nos Services
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Une gamme complète de soins dentaires pour toute la famille, avec
              des équipements modernes et une approche personnalisée.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group relative overflow-hidden rounded-2xl border border-emerald-100/60 bg-white/80 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-emerald-500 via-sky-500 to-emerald-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <CardContent className="p-6 text-left">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-slate-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-display font-semibold text-slate-900 mb-4">
              Pourquoi nous choisir ?
            </h2>
            <p className="text-lg text-slate-600">
              Un cabinet moderne, accessible et parfaitement situé pour votre
              confort.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {advantages.map((advantage, index) => (
              <div
                key={index}
                className="rounded-2xl border border-emerald-100/60 bg-white/80 p-6 shadow-sm backdrop-blur transition-shadow duration-300 hover:shadow-lg"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50">
                    {advantage.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-1">
                      {advantage.title}
                    </h3>
                    <p className="text-slate-600 text-sm">
                      {advantage.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Team />

      <section
        id="contact"
        className="py-20 bg-gradient-to-br from-emerald-50/60 via-white to-sky-50/60"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-display font-semibold text-slate-900 mb-4">
              Contact & Localisation
            </h2>
            <p className="text-lg text-slate-600">
              Facilement accessible en transport en commun et en voiture.
            </p>
          </div>

          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8">
            <div className="space-y-6">
              <div className="rounded-3xl border border-emerald-100/60 bg-white/90 p-6 shadow-xl backdrop-blur">
                <div className="flex items-center justify-between flex-wrap gap-4 mb-6">
                  <h3 className="text-2xl font-semibold text-slate-900">
                    Informations Pratiques
                  </h3>
                  <Button
                    className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-full"
                    onClick={() => window.open(bookingUrl, "_blank")}
                  >
                    Prendre RDV
                  </Button>
                </div>

                <div className="flex flex-col gap-6 text-sm text-slate-600">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-emerald-600 mt-1" />
                    <div>
                      <p className="font-semibold text-slate-900">Adresse</p>
                      <p>
                        2 Cours du Luzard
                        <br />
                        77420 Champs-sur-Marne
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-emerald-600 mt-1" />
                    <div>
                      <p className="font-semibold text-slate-900">Téléphone</p>
                      <a
                        href="tel:01-64-68-59-59"
                        className="text-emerald-700 hover:text-emerald-800 transition-colors"
                      >
                        01-64-68-59-59
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-emerald-600 mt-1" />
                    <div>
                      <p className="font-semibold text-slate-900">Email</p>
                      <a
                        href="mailto:cabinet.drmk@gmail.com"
                        className="text-emerald-700 hover:text-emerald-800 transition-colors"
                      >
                        cabinet.drmk@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-emerald-600 mt-1" />
                    <div>
                      <p className="font-semibold text-slate-900 mb-2">
                        Horaires d'ouverture
                      </p>
                      <div className="space-y-1">
                        <p>Lun, Mar, Jeu, Ven : 09h00-19h30</p>
                        <p>Samedi : 09h00-14h00</p>
                        <p>Dimanche : Fermé</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl border border-emerald-100/60 bg-white/80 p-6 shadow-md">
                <h4 className="font-semibold text-slate-900 mb-3">
                  Transports
                </h4>
                <div className="text-slate-600 text-sm space-y-1">
                  <p>
                    <strong>RER A :</strong> Station Noisiel
                  </p>
                  <p>
                    <strong>Bus :</strong> Lignes 211, 213, 220
                  </p>
                  <p>
                    <strong>Arrêts :</strong> Collège Le Luzard, Commissariat
                  </p>
                  <p>
                    <strong>Parking :</strong> 29 Square de Diane, Noisiel
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl overflow-hidden border border-emerald-100/60 bg-white/80 shadow-xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d328.19625351537735!2d2.612125814269313!3d48.84733966492076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e60f69e6d39dc3%3A0xc3d684eb725d595c!2sDr%20Marzak%20-%20Cabinet%20dentaire%20Dentalid!5e0!3m2!1sfr!2sma!4v1751137299231!5m2!1sfr!2sma"
                style={{ width: "100%", height: "100%", border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Plan d'accès cabinet dentaire"
              />
            </div>
          </div>
        </div>
      </section>

      {isHoursOpen && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center px-4 py-8"
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
            onClick={() => setIsHoursOpen(false)}
            aria-label="Fermer la fenêtre horaires"
          />
          <div className="relative w-full max-w-md rounded-3xl border border-emerald-100/70 bg-white shadow-2xl">
            <div className="flex items-start justify-between gap-4 p-6 pb-4">
              <div>
                <p className="text-sm font-semibold text-emerald-600">
                  Horaires
                </p>
                <h3 className="text-2xl font-display text-slate-900 mt-1">
                  Horaires d'ouverture
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setIsHoursOpen(false)}
                className="h-10 w-10 rounded-full border border-emerald-100 text-slate-500 hover:text-emerald-700 hover:border-emerald-200 transition"
                aria-label="Fermer"
              >
                <X className="h-5 w-5 mx-auto" />
              </button>
            </div>
            <div className="px-6 pb-6 space-y-2 text-sm text-slate-600">
              <div className="flex items-center justify-between rounded-2xl bg-emerald-50/70 px-4 py-2">
                <span className="font-medium text-slate-900">
                  Lun, Mar, Jeu, Ven
                </span>
                <span>09h00 - 19h30</span>
              </div>
              <div className="flex items-center justify-between rounded-2xl bg-emerald-50/70 px-4 py-2">
                <span className="font-medium text-slate-900">Samedi</span>
                <span>09h00 - 14h00</span>
              </div>
              <div className="flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-2">
                <span className="font-medium text-slate-900">Dimanche</span>
                <span>Fermé</span>
              </div>
              <div className="pt-4 flex flex-col sm:flex-row gap-3">
                <Button
                  className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-full w-full"
                  onClick={() => window.open(bookingUrl, "_blank")}
                >
                  Prendre RDV
                </Button>
                <Button
                  variant="outline"
                  className="border-emerald-200 text-emerald-700 hover:bg-emerald-50 rounded-full w-full"
                  onClick={() => setIsHoursOpen(false)}
                >
                  Fermer
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      <Faq />

      <footer className="bg-gradient-to-br from-slate-950 via-emerald-950 to-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center mr-3">
                  <img
                    src="images/logo.png"
                    alt="Cabinet Dentaire Logo"
                    className="w-7 h-7"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    Cabinet Dentaire
                  </h3>
                  <p className="text-emerald-200 text-sm">Dr Marzak</p>
                </div>
              </div>
              <p className="text-emerald-100/70 leading-relaxed max-w-sm">
                Soins dentaires de qualité dans un environnement moderne et
                rassurant.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-emerald-100/80">
                <li>
                  <a
                    href="tel:01-64-68-59-59"
                    className="flex items-center gap-2 text-emerald-200 hover:text-emerald-100 transition"
                  >
                    📞 01 64 68 59 59
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:cabinet.drmk@gmail.com"
                    className="flex items-center gap-2 text-emerald-200 hover:text-emerald-100 transition"
                  >
                    ✉️ cabinet.drmk@gmail.com
                  </a>
                </li>
                <li>
                  <p className="text-emerald-100/70 text-sm leading-relaxed">
                    2 Cours du Luzard
                    <br />
                    77420 Champs-sur-Marne
                  </p>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-emerald-100/70 text-sm">
            <p>
              &copy; {currentYear} Cabinet Dentaire Dr Marzak. Tous droits
              réservés.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
