import Image from "next/image";
const HeroSection = () => (
  <section className="relative w-full bg-[#FFD2C7] py-20 overflow-hidden">

<Image
  src="/homepage/Fichier 2-8.png"
  alt=""
  width={70}
  height={70}
  className="absolute top-0 left-40 opacity-80 pointer-events-none select-none"
  aria-hidden
/>
<Image
  src="/homepage/Fichier 3-8.png"
  alt=""
  width={70}
  height={70}
  className="absolute bottom-0 left-65 opacity-80 pointer-events-none select-none"
  aria-hidden
/>
<Image
  src="/homepage/Fichier 5-8 2.png"
  alt=""
  width={70}
  height={70}
  className="absolute bottom-0 right-90 opacity-80 pointer-events-none select-none"
  aria-hidden
/>
<Image
  src="/homepage/Fichier 8-8 2.png"
  alt=""
  width={70}
  height={70}
  className="absolute center-0 right-60 opacity-80 pointer-events-none select-none"
  aria-hidden
/>
<Image
  src="/homepage/Fichier 9-8 2.png"
  alt=""
  width={70}
  height={70}
  className="absolute top-51 left-260 opacity-80 pointer-events-none select-none"
  aria-hidden
/>



  <div className="max-w-screen-xl mx-auto px-4 text-left">
        <h1 className="text-2xl md:text-3xl font-bold text-[#7d1524] mb-4">
          Vous êtes artisan à la recherche de nouveaux chantiers ou particulier en quête d’un artisan fiable pour vos travaux de rénovation ?
        </h1>
        <p className="mb-6 text-[#7d1524] text-lg">
          Rejoignez ArtiHub, la plateforme qui connecte les professionnels et les particuliers pour des projets réussis, en seulement quelques clics.”
        </p>
        <button className="bg-[#7d1524] text-white font-semibold px-6 py-2 rounded-full shadow-md hover:bg-[#5d0e19] transition">
          Rejoignez Artihub
        </button>
      </div>
    </section>
  );
  
  export default HeroSection;
  