import Image from "next/image";

const services = [
  {
    img: "/servicespage/services1.png", // <-- à remplacer par ton vrai chemin
    title: "Label de qualité",
    bold: "Renforcez votre crédibilité avec un certificat reconnu.",
    description:
      "Obtenez un label exclusif qui valorise votre professionnalisme et garantit vos compétences. Ce certificat est un atout incontournable pour rassurer vos prospects et vous démarquer de la concurrence.",
    reverse: false,
  },
  {
    img: "/servicespage/services2.png", // <-- à remplacer par ton vrai chemin
    title: "Opportunités de chantiers",
    bold: "Trouvez des projets adaptés à vos compétences.",
    description:
      "Recevez des demandes de devis qualifiées directement sur votre tableau de bord. Une solution idéale pour trouver des chantiers adaptés à vos compétences et développer votre clientèle sans effort supplémentaire.",
    reverse: true,
  },
  {
    img: "/servicespage/services3.png", // <-- à remplacer par ton vrai chemin
    title: "Gestion simplifiée des devis et factures",
    bold: "Optimisez votre gestion administrative.",
    description:
      "Simplifiez la gestion de vos devis et factures en les créant, envoyant et suivant facilement, tout en restant concentré sur votre activité.",
    reverse: false,
  },
];

const NosServicesSection = () => (
  <section className="max-w-screen-xl mx-auto py-12 px-4">

    <h2 className="text-3xl md:text-3xl font-bold text-[#7d1524] mb-[90px]">

      Boostez votre activité avec nos solutions tout-en-un !
    </h2>
    <h2 className="text-2xl md:text-3xl font-bold text-[#7d1524] mb-8">
      Nos services
    </h2>
    <p className="text-gray-700 mb-10">
      Chez ArtiHub, nous proposons une gamme complète de services et d’abonnements adaptés aux besoins des artisans. Que vous cherchiez à valoriser vos compétences, trouver de nouveaux chantiers ou optimiser votre gestion administrative, nos solutions vous accompagnent à chaque étape de votre activité.
    </p>
    <div className="grid gap-10">
      {/* Première ligne (Label qualité) */}
      <div className="flex flex-col md:flex-row md:items-center gap-6">
        <div className="flex-shrink-0 flex justify-center md:justify-start">
          <Image
            src="/servicespage/services1.png"
            alt="Label de qualité"
            width={290}
            height={170}
            className="rounded-xl object-cover shadow"
          />
        </div>
        <div className="flex-1 mt-4 md:mt-0">
          <h3 className="text-[#7d1524] font-bold text-lg mb-2">
            Label de qualité
          </h3>
          <b>{services[0].bold}</b>
          <p className="mt-1">{services[0].description}</p>
        </div>
      </div>
      {/* Deuxième ligne (Opportunités) */}
      <div className="flex flex-col-reverse md:flex-row md:items-center gap-6">
        <div className="flex-1 mt-4 md:mt-0">
          <h3 className="text-[#7d1524] font-bold text-lg mb-2">
            Opportunités de chantiers
          </h3>
          <b>{services[1].bold}</b>
          <p className="mt-1">{services[1].description}</p>
        </div>
        <div className="flex-shrink-0 flex justify-center md:justify-end">
          <Image
            src="/servicespage/services2.png"
            alt="Opportunités de chantiers"
            width={290}
            height={170}
            className="rounded-xl object-cover shadow"
          />
        </div>
      </div>
      {/* Troisième ligne (Gestion devis/factures) */}
      <div className="flex flex-col md:flex-row md:items-center gap-6">
        <div className="flex-shrink-0 flex justify-center md:justify-start">
          <Image
            src="/servicespage/services3.png"
            alt="Gestion simplifiée des devis et factures"
            width={290}
            height={170}
            className="rounded-xl object-cover shadow"
          />
        </div>
        <div className="flex-1 mt-4 md:mt-0">
          <h3 className="text-[#7d1524] font-bold text-lg mb-2">
            Gestion simplifiée des devis et factures
          </h3>
          <b>{services[2].bold}</b>
          <p className="mt-1">{services[2].description}</p>
        </div>
      </div>
    </div>
  </section>
);

export default NosServicesSection;
