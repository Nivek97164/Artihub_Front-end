const SolutionsSection = () => (
    <section className="max-w-screen-xl mx-auto py-10 px-4">
      <h2 className="text-xl font-bold text-[#7d1524] mb-4">
        Vos projets, nos solutions : trouvez l’artisan qu’il vous faut !
      </h2>
      <p className="mb-4">
        En tant que particulier, vous avez la possibilité de rechercher et de contacter directement l’artisan de votre choix.<br />
        Vous pouvez également publier votre projet sur notre plateforme pour permettre aux artisans qualifiés de vous contacter et de proposer leurs services.
      </p>
      <div className="mb-4">
        <span className="block text-lg font-semibold text-[#7d1524]">
          Mission Express : Vos urgences, notre priorité
        </span><br></br>
        <p className="font-bold">Vous avez un besoin urgent ?</p><p className="text-[#7d1524]">Utilisez la Mission Express pour :</p>
        <ul className="list-disc ml-8 text-[#7d1524] mb-4">
          <li>Publier un projet prioritaire en mettant l’accent sur l’urgence.</li>
          <li>Être contacté rapidement par des artisans disponibles et réactifs.</li>
          <li>Gérer vos imprévus avec des solutions fiables et rapides.</li>
        </ul>
      </div>
      <button className="bg-[#7d1524] text-white font-semibold px-6 py-2 rounded-full shadow-md hover:bg-[#5d0e19] transition">
        Publier un projet
      </button>
    </section>
  );
  
  export default SolutionsSection;
  