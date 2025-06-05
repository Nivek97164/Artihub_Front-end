'use client';

import { useRouter } from 'next/navigation';

export default function ConstellationPage() {
  const router = useRouter();

  const handleSubscribe = () => {
    // 🔁 À brancher avec l’API ou redirection paiement plus tard
    console.log('✅ Souscription simulation constellation');
    router.push('/paiement/constellation');
  };

  return (
    <main className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-3xl md:text-4xl font-bold text-[#7d1524] mb-6">
        Devenez un leader sur votre marché avec “Artihub constellation”
      </h1>

      <div className="font-semibold mb-1">Sans engagement</div>
      <div className="text-2xl font-bold mb-4">99€/mois</div>

      <div className="mb-4 flex items-start gap-2">
        <span className="mt-1">➔</span>
        <span>
          Offre complète pour les artisans souhaitant maximiser leur croissance,
          bénéficier d’un accompagnement expert et se positionner comme leaders sur leur marché.
        </span>
      </div>

      <ul className="list-disc ml-8 mb-4">
        <li>Visibilité premium : priorité dans les résultats et badges qualité.</li>
        <li>Label ArtiHub inclus immédiatement avec accompagnement complet.</li>
        <li>Accès illimité aux devis standards et Missions Express.</li>
        <li>Outils professionnels avancés pour une gestion optimisée.</li>
      </ul>

      <div className="font-bold mb-2">Comment ça marche ?</div>
      <div className="mb-6">
        Souscrivez facilement : procédez à un paiement sécurisé et recevez immédiatement une confirmation
        accompagnée d’une facture détaillée.
        Vous pourrez ensuite gérer votre abonnement à tout moment depuis la section
        ‘Gérer mon abonnement’ de votre tableau de bord.
      </div>

      <div className="flex gap-6 mt-8">
        <button
          className="text-[#7d1524] font-bold hover:underline px-4"
          onClick={() => router.back()}
        >
          Retour
        </button>
        <button
          onClick={handleSubscribe}
          className="bg-[#7d1524] text-white font-bold px-8 py-2 rounded-full shadow hover:bg-[#5d0e19] transition"
        >
          Souscrire
        </button>
      </div>
    </main>
  );
}
