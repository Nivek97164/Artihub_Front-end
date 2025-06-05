import Image from "next/image";

const FindUsSection = () => (
  <section className="w-full py-10">
    <div className="max-w-screen-xl mx-auto px-4 flex flex-col gap-14">
      {/* Bloc haut : texte + bouton */}
      <div className="w-full flex flex-col items-center">
        <span className="text-[#7d1524] font-semibold mb-1 text-[15px]">Un espace sur mesure</span>
        <h3 className="text-2xl font-bold text-black mb-2">Votre suivi, dans la poche</h3>
        <p className="mb-4 text-center max-w-[900px]">
          Depuis votre espace client, gérez simplement et en toute sécurité chaque étape de votre projet : devis en ligne, signature électronique et paiement sécurisés.
        </p>
        <button className="bg-[#7d1524] text-white font-semibold px-6 py-2 rounded-full shadow-md hover:bg-[#5d0e19] transition mb-6">
          Nous rejoindre
        </button>
      </div>
      {/* Carte + texte côte à côte (texte au-dessus sur mobile, image à gauche sur desktop) */}
      <div className="w-full flex flex-col md:flex-row items-center justify-center gap-12 md:gap-[140px]">
        {/* Bloc IMAGE - toujours à gauche sur desktop */}
        <div className="flex-shrink-0 flex justify-center mt-6 md:mt-0 order-2 md:order-1">
          <Image
            src="/homepage/france.png"
            alt="Carte de France"
            width={480}
            height={480}
            className="w-70 h-auto md:w-[480px] md:h-[480px]"
          />
        </div>
        {/* Bloc TEXTE */}
        <div className="w-full max-w-md flex flex-col items-center md:items-start justify-center order-1 md:order-2">
          <h4 className="text-[#7d1524] font-bold mb-2 text-[25px] text-left w-full max-w-xs mx-auto md:mx-0">
            Où nous retrouver ?
          </h4>
          <p className="text-left w-full max-w-xs mx-auto md:max-w-md md:mx-0">
            Notre ambition est de réconcilier les Français avec les travaux de rénovation. Actuellement basés en Île-de-France, nous prévoyons d’étendre notre service à toute la France. Nous sélectionnons rigoureusement les meilleurs artisans de chaque région pour garantir des projets de qualité, adaptés à vos besoins.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default FindUsSection;
