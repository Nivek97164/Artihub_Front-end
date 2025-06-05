export default function ConfirmationProjet() {
    return (
      <main className="min-h-screen bg-[#FAF9F8] flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-2xl md:text-4xl font-bold text-[#7d1524] mb-6">
          Votre projet a bien été enregistré !
        </h1>
        <p className="text-base text-gray-700 max-w-xl mb-8">
          Merci pour votre contribution. Vous recevrez prochainement des réponses d’artisans disponibles.
        </p>
        <a
          href="/"
          className="bg-[#7d1524] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#5d0e19] transition"
        >
          Revenir à l’accueil
        </a>
      </main>
    );
  }
  