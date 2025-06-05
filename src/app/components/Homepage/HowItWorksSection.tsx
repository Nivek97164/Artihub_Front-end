const steps = [
  {
    number: 1,
    title: "Publication de votre projet",
    description: "En 2 minutes chrono",
  },
  {
    number: 2,
    title: "Rencontre avec l’artisan",
    description: "Vous échangez avec l’artisan idéal et recevez un devis détaillé.",
  },
  {
    number: 3,
    title: "Conception du projet",
    description: "Définition de la conception et technique de votre projet.",
  },
  {
    number: 4,
    title: "Début des travaux",
    description: "Les travaux démarrent selon le planning défini, avec un suivi jusqu’à la livraison.",
  },
];

const HowItWorksSection = () => (
  <section className="w-full bg-[#FFD2C7] py-16">
    <div className="max-w-screen-xl mx-auto px-4">
      <h2 className="text-2xl font-bold text-[#7d1524] mb-8 text-center">
        Comment ça marche ?
      </h2>
      <div className="flex flex-col md:flex-row justify-between gap-10">
        {steps.map((step) => (
          <div
            key={step.number}
            className="relative bg-white rounded-3xl shadow p-8 flex-1 w-[90vw] max-w-[320px] min-w-[240px] mx-auto mb-10"
          >
            {/* Pastille à gauche qui déborde */}
            <span className="absolute -top-6 -left-3 bg-[#7d1524] border-4 border-[#FFD2C7] text-white font-bold w-16 h-16 flex items-center justify-center rounded-full shadow text-lg z-10">
              {step.number}
            </span>
            <div className="mt-4">
              <h3 className="font-bold text-[#111] text-lg mb-2">{step.title}</h3>
              <p className="text-[#222] text-base">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorksSection;
