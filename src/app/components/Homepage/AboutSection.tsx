import Image from "next/image";
import { FaSearch } from "react-icons/fa";

const AboutSection = () => (
  <section className="max-w-screen-xl mx-auto py-10 px-4 flex flex-col md:flex-row items-center gap-8">
    <div className="flex-1">
      <h2 className="text-xl font-bold text-[#7d1524] mb-4">Qui sommes-nous?</h2>
      <p className="mb-4">
        Artihub est une plateforme de mise en relation entre artisans et particuliers.<br />
        Tout au long de l’année, nous jouons un rôle clé dans le secteur du bâtiment en créant des connexions efficaces et fiables.<br /><br />
        Ceci afin d’accompagner les professionnels des travaux de rénovation à trouver de nouveaux chantiers dans le bâtiment, tout en permettant aux particuliers de trouver un artisan adapté à leur projet en le publiant facilement sur notre plateforme.
      </p>
      <button className="flex items-center gap-2 bg-[#7d1524] text-white font-semibold px-6 py-2 rounded-full shadow-md hover:bg-[#5d0e19] transition">
  <FaSearch className="text-white" />
  Commencer la recherche
</button>
    </div>
    <div className="flex-1 flex justify-center">
      <Image
        src="/homepage/artisan.png" // Mets l’image dans /public/homepage/artisan.png
        alt="Artisan peinture"
        width={520}
        height={400}
        className="rounded-xl shadow"
      />
    </div>
  </section>
);

export default AboutSection;
