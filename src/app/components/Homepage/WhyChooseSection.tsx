import Image from "next/image";

const features = [
  {
    icon: "/homepage/collaboration 1.png",
    title: "Collaboration",
    description:
      "Ensemble, nous bâtissons des relations solides et durables entre artisans et particuliers",
  },
  {
    icon: "/homepage/expertise 1.png",
    title: "Expertise",
    description:
      "Nous valorisons le savoir-faire artisanal pour garantir des projets réalisés avec excellence.",
  },
  {
    icon: "/homepage/durabilité 2.png",
    title: "Durabilité",
    description:
      "Un engagement pour des solutions responsables et pérennes dans chaque réalisation.",
  },
];

const WhyChooseSection = () => (
  <section className="w-full bg-white py-14">
    <div className="max-w-screen-xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-[#7d1524] mb-10 text-center">Pourquoi choisir Artihub ?</h2>
      <div className="flex flex-col md:flex-row justify-between gap-10">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="flex flex-col items-center bg-[#7d1524] rounded-3xl px-10 pt-14 pb-8 shadow-lg w-full md:w-1/3 min-w-[260px] max-w-[400px] mx-auto relative"
          >
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 flex items-center justify-center w-20 h-20 rounded-full border-4 border-white bg-[#fde4e4] shadow-lg">
              <Image src={feature.icon} alt="" width={38} height={38} />
            </div>
            <h3 className="text-white font-bold text-xl mb-2 text-center mt-4">{feature.title}</h3>
            <p className="text-white text-center text-lg">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseSection;
