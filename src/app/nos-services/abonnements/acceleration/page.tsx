'use client';

import { useRouter } from 'next/navigation';

export default function AccelerationPage() {
  const router = useRouter();

  const handleSouscrire = () => {
    // 🔁 À activer lors de l'intégration du backend / paiement
    router.push('/paiement/acceleration');
  };

  return (
    <main className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-3xl md:text-4xl font-bold text-[#7d1524] mb-6">
        Passez à la vitesse supérieure avec “Artihub accélération”
      </h1>

      <div className="font-semibold mb-1">Sans engagement</div>
      <div className="text-2xl font-bold mb-4">69€/mois</div>

      <div className="mb-4 flex items-start gap-2">
        <span className="mt-1">➔</span>
        <span>
          Idéal pour les artisans cherchant à optimiser leur gestion de projet, à développer leur activité
          et à bénéficier d’un support personnalisé.
        </span>
      </div>

      <ul className="list-disc ml-8 mb-4">
        <li>Visibilité active avec mises en avant ponctuelles.</li>
        <li>Label ArtiHub inclus.</li>
        <li>Accès aux Missions Express limitées et devis standards avec quota mensuel.</li>
        <li>Notifications géolocalisées pour les urgences proches.</li>
      </ul>

      <div className="font-bold mb-2">Comment ça marche ?</div>
      <div className="mb-6">
        Souscrivez facilement : procédez à un paiement sécurisé et recevez immédiatement une confirmation
        accompagnée d’une facture détaillée.
        Vous pourrez ensuite gérer votre abonnement à tout moment depuis la section ‘Gérer mon abonnement’ de votre tableau de bord.
      </div>

      <div className="flex gap-6 mt-8">
        <button
          className="text-[#7d1524] font-bold hover:underline px-4"
          onClick={() => router.back()}
        >
          Retour
        </button>
        <button
          onClick={handleSouscrire}
          className="bg-[#7d1524] text-white font-bold px-8 py-2 rounded-full shadow hover:bg-[#5d0e19] transition"
        >
          Souscrire
        </button>
      </div>
    </main>
  );
}
