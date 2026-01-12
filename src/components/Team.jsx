import React from "react";
import { useI18n } from "@/i18n";

export function Team() {
  const { t } = useI18n();
  const teamImages = [
    "/images/team/dr-marak-hauda.jpg",
    "/images/team/profil-dentiste.png",
    "/images/team/profil-dentiste.png",
    "/images/team/simona.jpg",
    "/images/team/profil-assistante.png",
  ];
  const teamMembers = t.team.members.map((member, index) => ({
    ...member,
    img: teamImages[index] ?? "/images/team/profil-assistante.png",
  }));

  return (
    <section
      id="team"
      className="py-20 bg-gradient-to-b from-white via-emerald-50/40 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-display font-semibold text-slate-900 mt-4 mb-4">
            {t.team.title}
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            {t.team.subtitle}
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group rounded-3xl border border-emerald-100/60 bg-white/80 shadow-sm overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={member.img}
                  alt={member.alt}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  {member.name}
                </h3>
                {member.diplomas.map((dip, i) => (
                  <p
                    key={i}
                    className="text-slate-600 text-sm leading-relaxed"
                  >
                    {dip}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
