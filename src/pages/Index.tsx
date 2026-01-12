import {
  Phone,
  MapPin,
  Clock,
  CalendarCheck,
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
} from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CabinetCarousel } from "@/components/CabinetCarousel";
import { Team } from "@/components/Team";
import { Faq } from "@/components/Faq";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { useI18n } from "@/i18n";

const Index = () => {
  const { t, isRtl } = useI18n();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHoursOpen, setIsHoursOpen] = useState(false);
  const currentYear = new Date().getFullYear();
  const bookingUrl =
    "https://www.doctolib.fr/cabinet-dentaire/champs-sur-marne/cabinet-dentaire-dr-marzak";
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

  const textAlignClass = isRtl ? "text-right" : "text-left";

  const heroHighlightIcons = [
    <ShieldCheck className="h-5 w-5 text-emerald-600" />,
    <Sparkles className="h-5 w-5 text-emerald-600" />,
    <MapPin className="h-5 w-5 text-emerald-600" />,
  ];

  const heroHighlights = t.heroHighlights.map((highlight, index) => ({
    ...highlight,
    icon: heroHighlightIcons[index],
  }));

  const serviceAssets = [
    {
      icon: <Stethoscope className="w-7 h-7 text-emerald-600" />,
      image: "/images/services/soins-conservateurs.jpg",
    },
    {
      icon: <Shield className="w-7 h-7 text-emerald-600" />,
      image: "/images/services/protheses-dentaires.jpg",
    },
    {
      icon: <Heart className="w-7 h-7 text-emerald-600" />,
      image: "/images/services/implants-dentaires.jpg",
    },
    {
      icon: <Zap className="w-7 h-7 text-emerald-600" />,
      image: "/images/services/orthodontie.jpg",
    },
    {
      icon: <AlertTriangle className="w-7 h-7 text-emerald-600" />,
      image: "/images/services/urgences-dentaires.jpg",
    },
    {
      icon: <Sparkles className="w-7 h-7 text-emerald-600" />,
      image: "/images/services/blanchiment.jpg",
    },
    {
      icon: <ShieldCheck className="w-7 h-7 text-emerald-600" />,
      image: "/images/services/bruxisme.jpg",
    },
    {
      icon: <Activity className="w-7 h-7 text-emerald-600" />,
      image: "/images/services/endodontie.jpg",
    },
    {
      icon: <Layers className="w-7 h-7 text-emerald-600" />,
      image: "/images/services/facettes.jpg",
    },
    {
      icon: <Baby className="w-7 h-7 text-emerald-600" />,
      image: "/images/services/pedodontie.jpg",
    },
    {
      icon: <Radio className="w-7 h-7 text-emerald-600" />,
      image: "/images/services/imagerie-dentaire.jpg",
    },
    {
      icon: <Scan className="w-7 h-7 text-emerald-600" />,
      image: "/images/services/stellite.jpg",
    },
  ];

  const services = serviceAssets.map((service, index) => ({
    ...service,
    ...t.services[index],
  }));

  const advantageAssets = [
    { icon: <Award className="w-6 h-6 text-emerald-600" /> },
    { icon: <Shield className="w-6 h-6 text-emerald-600" /> },
    { icon: <Zap className="w-6 h-6 text-emerald-600" /> },
  ];

  const advantages = advantageAssets.map((advantage, index) => ({
    ...advantage,
    ...t.advantages[index],
  }));

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="bg-white/80 backdrop-blur-xl border-b border-emerald-100/60 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-emerald-500 to-sky-500 flex items-center justify-center shadow-sm">
                <img
                  src="images/logo.png"
                  alt={t.alt.logo}
                  className="w-6 h-6"
                />
              </div>
              <div>
                <p className="text-lg font-semibold text-slate-900">
                  {t.brand.doctorName}
                </p>
                <p className="text-xs text-slate-500">
                  {t.brand.clinicLabel}
                </p>
              </div>
            </div>

            <nav
              className={`hidden md:flex items-center text-sm font-medium ${
                isRtl ? "space-x-6 space-x-reverse" : "space-x-6"
              }`}
            >
              <button
                onClick={() => scrollToSection("accueil")}
                className="text-slate-600 hover:text-emerald-700 transition-colors"
              >
                {t.nav.home}
              </button>
              <button
                onClick={() => scrollToSection("cabinet")}
                className="text-slate-600 hover:text-emerald-700 transition-colors"
              >
                {t.nav.cabinet}
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-slate-600 hover:text-emerald-700 transition-colors"
              >
                {t.nav.services}
              </button>
              <button
                onClick={() => scrollToSection("team")}
                className="text-slate-600 hover:text-emerald-700 transition-colors"
              >
                {t.nav.team}
              </button>
              <button
                onClick={() => scrollToSection("faq")}
                className="text-slate-600 hover:text-emerald-700 transition-colors"
              >
                {t.nav.faq}
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-slate-600 hover:text-emerald-700 transition-colors"
              >
                {t.nav.contact}
              </button>
              <a
                href="tel:01-64-68-59-59"
                className="hidden lg:inline-flex items-center gap-2 rounded-full border border-emerald-100/70 bg-white/90 px-3 py-1.5 text-emerald-700 shadow-sm shadow-emerald-600/10 transition hover:border-emerald-200 hover:text-emerald-800 hover:shadow-md"
              >
                <Phone className="h-4 w-4" />
                <span>01-64-68-59-59</span>
              </a>
              <LanguageSwitcher />
            </nav>

            <Button
              size="sm"
              className="hidden md:inline-flex bg-emerald-600 hover:bg-emerald-700 text-white rounded-full px-5 shadow-lg shadow-emerald-600/30"
              onClick={() => window.open(bookingUrl, "_blank")}
            >
              <CalendarCheck className="h-4 w-4 mr-2" />
              {t.cta.bookShort}
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
                  className={`text-slate-700 hover:text-emerald-700 transition-colors ${textAlignClass}`}
                >
                  {t.nav.home}
                </button>
                <button
                  onClick={() => scrollToSection("cabinet")}
                  className={`text-slate-700 hover:text-emerald-700 transition-colors ${textAlignClass}`}
                >
                  {t.nav.cabinet}
                </button>
                <button
                  onClick={() => scrollToSection("services")}
                  className={`text-slate-700 hover:text-emerald-700 transition-colors ${textAlignClass}`}
                >
                  {t.nav.services}
                </button>
                <button
                  onClick={() => scrollToSection("team")}
                  className={`text-slate-700 hover:text-emerald-700 transition-colors ${textAlignClass}`}
                >
                  {t.nav.team}
                </button>
                <button
                  onClick={() => scrollToSection("faq")}
                  className={`text-slate-700 hover:text-emerald-700 transition-colors ${textAlignClass}`}
                >
                  {t.nav.faq}
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className={`text-slate-700 hover:text-emerald-700 transition-colors ${textAlignClass}`}
                >
                  {t.nav.contact}
                </button>
                <LanguageSwitcher fullWidth />
                <Button
                  className="bg-emerald-600 hover:bg-emerald-700 text-white w-full rounded-full"
                  onClick={() => window.open(bookingUrl, "_blank")}
                >
                  <CalendarCheck className="h-4 w-4 mr-2" />
                  {t.cta.bookShort}
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
            <div className="space-y-8 order-2 lg:order-1">
              <div
                className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-sm text-emerald-700 shadow-sm ring-1 ring-emerald-100/70 backdrop-blur animate-fade-up"
                style={{ animationDelay: "60ms" }}
              >
                <Sparkles className="h-4 w-4" />
                {t.hero.badge}
              </div>

              <h1
                className="hidden lg:block text-4xl sm:text-5xl lg:text-6xl font-display tracking-tight text-slate-900 animate-fade-up"
                style={{ animationDelay: "160ms" }}
              >
                {t.hero.title}
              </h1>
              <p
                className="text-lg text-slate-600 max-w-xl animate-fade-up"
                style={{ animationDelay: "240ms" }}
              >
                {t.hero.subtitle}
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
                  <CalendarCheck className="w-5 h-5 mr-2" />
                  {t.cta.bookLong}
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
                  {t.cta.locate}
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

            <div className="relative order-1 lg:order-2">
              <div className="absolute -top-6 -left-6 h-24 w-24 rounded-3xl bg-white/80 shadow-lg backdrop-blur animate-float" />
              <div className="relative overflow-hidden rounded-3xl border border-white/70 shadow-[0_30px_80px_-40px_rgba(16,185,129,0.55)]">
                <img
                  src="images/natural_look_smiling_with_healthy_white.jpg"
                  alt={t.alt.hero}
                  className="rounded-3xl w-full h-auto object-cover aspect-[4/5]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/10 to-transparent lg:hidden" />
                <div className="absolute inset-x-0 bottom-0 p-6 lg:hidden">
                  <h1 className="text-3xl sm:text-4xl font-display tracking-tight text-white drop-shadow-[0_6px_24px_rgba(15,23,42,0.55)]">
                    {t.hero.title}
                  </h1>
                </div>
              </div>
              <div className="absolute top-6 right-6 rounded-full bg-white/90 px-4 py-2 text-md font-semibold text-emerald-700 shadow-lg">
                {t.hero.newPatients}
              </div>
              <button
                type="button"
                onClick={() => setIsHoursOpen(true)}
                aria-haspopup="dialog"
                className={`absolute -bottom-6 left-6 hidden lg:flex rounded-2xl bg-white/90 px-4 py-3 shadow-lg backdrop-blur border border-emerald-100/60 ${textAlignClass} transition hover:-translate-y-0.5 hover:shadow-xl`}
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">
                      {t.hero.hoursTitle}
                    </p>
                    <p className="text-xs text-slate-500">{t.hero.hoursCta}</p>
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
              {t.servicesSection.title}
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              {t.servicesSection.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group relative overflow-hidden rounded-2xl border border-emerald-100/60 bg-white/80 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-emerald-500 via-sky-500 to-emerald-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 flex h-10 w-10 items-center justify-center rounded-xl bg-white/90 shadow">
                    {service.icon}
                  </div>
                </div>
                <CardContent className={`p-6 ${textAlignClass}`}>
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
              {t.advantagesSection.title}
            </h2>
            <p className="text-lg text-slate-600">
              {t.advantagesSection.subtitle}
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
              {t.contactSection.title}
            </h2>
            <p className="text-lg text-slate-600">
              {t.contactSection.subtitle}
            </p>
          </div>

          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8">
            <div className="space-y-6">
              <div className="rounded-3xl border border-emerald-100/60 bg-white/90 p-6 shadow-xl backdrop-blur">
                <div className="flex items-center justify-between flex-wrap gap-4 mb-6">
                  <h3 className="text-2xl font-semibold text-slate-900">
                    {t.contactCard.title}
                  </h3>
                  <Button
                    className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-full"
                    onClick={() => window.open(bookingUrl, "_blank")}
                  >
                    <CalendarCheck className="h-4 w-4 mr-2" />
                    {t.cta.bookShort}
                  </Button>
                </div>

                <div className="flex flex-col gap-6 text-sm text-slate-600">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-emerald-600 mt-1" />
                    <div>
                      <p className="font-semibold text-slate-900">
                        {t.contactCard.addressLabel}
                      </p>
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
                      <p className="font-semibold text-slate-900">
                        {t.contactCard.phoneLabel}
                      </p>
                      <a
                        href="tel:01-64-68-59-59"
                        className="inline-flex rounded-full bg-emerald-50/80 px-3 py-1 text-emerald-700 shadow-sm transition hover:bg-emerald-50 hover:text-emerald-800 hover:shadow-md"
                      >
                        01-64-68-59-59
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-emerald-600 mt-1" />
                    <div>
                      <p className="font-semibold text-slate-900">
                        {t.contactCard.emailLabel}
                      </p>
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
                        {t.contactCard.hoursLabel}
                      </p>
                      <div className="space-y-1">
                        <p>
                          {t.hours.summary.weekdays.label} :{" "}
                          {t.hours.summary.weekdays.time}
                        </p>
                        <p>
                          {t.hours.summary.saturday.label} :{" "}
                          {t.hours.summary.saturday.time}
                        </p>
                        <p>
                          {t.hours.summary.sunday.label} :{" "}
                          {t.hours.summary.sunday.time}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl border border-emerald-100/60 bg-white/80 p-6 shadow-md">
                <h4 className="font-semibold text-slate-900 mb-3">
                  {t.transports.title}
                </h4>
                <div className="text-slate-600 text-sm space-y-1">
                  <p>
                    <strong>{t.transports.rerLabel}:</strong>{" "}
                    {t.transports.rerDetail}
                  </p>
                  <p>
                    <strong>{t.transports.busLabel}:</strong>{" "}
                    {t.transports.busDetail}
                  </p>
                  <p>
                    <strong>{t.transports.stopsLabel}:</strong>{" "}
                    {t.transports.stopsDetail}
                  </p>
                  <p>
                    <strong>{t.transports.parkingLabel}:</strong>{" "}
                    {t.transports.parkingDetail}
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
                title={t.map.title}
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
            aria-label={t.modal.closeOverlay}
          />
          <div className="relative w-full max-w-md rounded-3xl border border-emerald-100/70 bg-white shadow-2xl">
            <div className="flex items-start justify-between gap-4 p-6 pb-4">
              <div>
                <p className="text-sm font-semibold text-emerald-600">
                  {t.modal.label}
                </p>
                <h3 className="text-2xl font-display text-slate-900 mt-1">
                  {t.modal.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setIsHoursOpen(false)}
                className="h-10 w-10 rounded-full border border-emerald-100 text-slate-500 hover:text-emerald-700 hover:border-emerald-200 transition"
                aria-label={t.cta.close}
              >
                <X className="h-5 w-5 mx-auto" />
              </button>
            </div>
            <div className="px-6 pb-6 space-y-2 text-sm text-slate-600">
              <div className="flex items-center justify-between rounded-2xl bg-emerald-50/70 px-4 py-2">
                <span className="font-medium text-slate-900">
                  {t.hours.summary.weekdays.label}
                </span>
                <span>{t.hours.summary.weekdays.time}</span>
              </div>
              <div className="flex items-center justify-between rounded-2xl bg-emerald-50/70 px-4 py-2">
                <span className="font-medium text-slate-900">
                  {t.hours.summary.saturday.label}
                </span>
                <span>{t.hours.summary.saturday.time}</span>
              </div>
              <div className="flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-2">
                <span className="font-medium text-slate-900">
                  {t.hours.summary.sunday.label}
                </span>
                <span>{t.hours.summary.sunday.time}</span>
              </div>
              <div className="pt-4 flex flex-col sm:flex-row gap-3">
                <Button
                  className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-full w-full"
                  onClick={() => window.open(bookingUrl, "_blank")}
                >
                  <CalendarCheck className="h-4 w-4 mr-2" />
                  {t.cta.bookShort}
                </Button>
                <Button
                  variant="outline"
                  className="border-emerald-200 text-emerald-700 hover:bg-emerald-50 rounded-full w-full"
                  onClick={() => setIsHoursOpen(false)}
                >
                  {t.cta.close}
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
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                  <img
                    src="images/logo.png"
                    alt={t.alt.logo}
                    className="w-7 h-7"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    {t.brand.clinicLabel}
                  </h3>
                  <p className="text-emerald-200 text-sm">
                    {t.brand.doctorName}
                  </p>
                </div>
              </div>
              <p className="text-emerald-100/70 leading-relaxed max-w-sm">
                {t.footer.description}
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">
                {t.footer.contactTitle}
              </h4>
              <ul className="space-y-2 text-emerald-100/80">
                <li>
                  <a
                    href="tel:01-64-68-59-59"
                    className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-emerald-100/90 ring-1 ring-white/10 transition hover:bg-white/15 hover:text-white"
                  >
                    <Phone className="h-4 w-4" />
                    <span>01 64 68 59 59</span>
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
              &copy; {currentYear} {t.footer.rights}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
