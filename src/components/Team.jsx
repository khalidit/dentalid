import React from "react";

export function Team() {
  const teamMembers = [
    {
      name: "Dr MARZAK Hauda",
      img: "/images/team/dr-marak-hauda.jpg",
      alt: "Dr Marzak Hauda",
      diplomas: [
        "Diplôme d'État de docteur en chirurgie dentaire - PARIS VII",
        "DU Implantologie Orale et Maxillo-faciale en 2021 - PARIS XII",
      ],
    },
    {
      name: "Dr Fatiha Semmarene",
      img: "/images/team/profil-dentiste.png",
      alt: "Dr Fatiha Semmarene",
      diplomas: [
        "Diplôme d'État de docteur en chirurgie dentaire - Faculté de Chirurgie Dentaire de Nancy",
      ],
    },
    {
      name: "Dr Myriam BETTAIBI",
      img: "/images/team/profil-dentiste.png",
      alt: "Dr Myriam BETTAIBI",
      diplomas: ["Diplôme d'État de docteur en chirurgie dentaire"],
    },
    {
      name: "Simona",
      img: "/images/team/simona.jpg",
      alt: "Simona - Assistante dentaire",
      diplomas: ["Assistante dentaire qualifiée", "Référente du cabinet"],
    },
    {
      name: "Sali",
      img: "/images/team/profil-assistante.png",
      alt: "Sali - Assistante dentaire",
      diplomas: ["Assistante dentaire qualifiée"],
    },
  ];

  return (
    <section
      id="team"
      className="py-20 bg-gradient-to-b from-white via-emerald-50/40 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-display font-semibold text-slate-900 mt-4 mb-4">
            Une équipe experte et attentionnée
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Des praticiens expérimentés et une équipe bienveillante pour vous
            accompagner à chaque étape.
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
