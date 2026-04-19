const items = [
  {
    year: "2024 — aujourd'hui",
    title: "Développeur Fullstack",
    place: "Entreprise XYZ",
    desc: "Développement de features produit, refonte de l'architecture frontend.",
    type: "work",
  },
  {
    year: "2022 — 2024",
    title: "Master Informatique",
    place: "Université de Paris",
    desc: "Spécialisation en génie logiciel et systèmes distribués.",
    type: "education",
  },
  {
    year: "2021 — 2022",
    title: "Stage Développeur",
    place: "Startup ABC",
    desc: "Création d'une API REST et d'un dashboard React.",
    type: "work",
  },
  {
    year: "2019 — 2022",
    title: "Licence Informatique",
    place: "Université de Lyon",
    desc: "Algorithmique, bases de données, réseaux.",
    type: "education",
  },
];

export default function Timeline() {
  return (
    <div className="relative">
      <div className="absolute left-[7px] top-2 bottom-2 w-px bg-zinc-200 dark:bg-zinc-800" />
      <div className="space-y-6">
        {items.map((item, i) => (
          <div key={i} className="flex gap-4 pl-6 relative">
            <div
              className={`absolute left-0 top-1.5 w-3.5 h-3.5 rounded-full border-2 ${
                item.type === "work"
                  ? "bg-blue-500 border-blue-400"
                  : "bg-zinc-300 border-zinc-400 dark:bg-zinc-700 dark:border-zinc-500"
              }`}
            />
            <div className="space-y-1">
              <div className="flex items-baseline gap-2 flex-wrap">
                <span className="text-sm font-medium">{item.title}</span>
                <span className="text-xs text-zinc-400 dark:text-zinc-500">{item.place}</span>
              </div>
              <p className="text-xs text-zinc-400 dark:text-zinc-500">{item.desc}</p>
              <span className="text-xs font-mono text-zinc-400 dark:text-zinc-600">{item.year}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
