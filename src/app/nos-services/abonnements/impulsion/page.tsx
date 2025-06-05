'use client';

import { useRouter } from 'next/navigation';

export default function ImpulsionPage() {
  const router = useRouter();

  const handleSubscribe = async () => {
    try {
      // 🔁 TODO: Appeler ici l'API de paiement quand elle sera prête
      // await fetch("/api/abonnement/impulsion", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify({ plan: "impulsion" }),
      // });

      console.log("✅ Paiement lancé pour le plan Impulsion");

      // Redirection temporaire vers une page de confirmation
      router.push("/nos-services/paiement/impulsion");
    } catch (err) {
      console.error("❌ Erreur lors de la souscription :", err);
    }
  };

  return (
    <main className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-3xl md:text-4xl font-bold text-[#7d1524] mb-6">
        Démarrez votre activité en toute sérénité avec “Artihub impulsion”
      </h1>
      <div className="font-bold mb-1">Engagement : 6 mois obligatoire</div>
      <div className="text-2xl font-bold mb-4">49€/mois</div>

      <div className="mb-4 flex items-start gap-2">
        <span className="mt-1">➔</span>
        <span>
          Idéal pour les artisans débutants ou ceux ayant des besoins basiques en gestion et visibilité.<br />
          L’engagement de 6 mois assure un revenu stable et permet de fidéliser les clients.
        </span>
      </div>
      <ul className="list-disc ml-8 mb-4">
        <li>Visibilité garantie : fiche professionnelle et portfolio.</li>
        <li>Label ArtiHub offert dès l’inscription.</li>
        <li>Accompagnement personnalisé pour obtenir le label.</li>
        <li>Accès aux devis standards et tableau de bord complet.</li>
      </ul>

      <div className="font-bold mb-2">Comment ça marche ?</div>
      <div className="mb-6">
        Souscrivez facilement : procédez à un paiement sécurisé et recevez immédiatement une confirmation accompagnée d’une facture détaillée.
        Vous pourrez ensuite gérer votre abonnement à tout moment depuis la section ‘Gérer mon abonnement’ de votre tableau de bord.
      </div>

      <div className="flex gap-6 mt-8">
        <button
          className="text-[#7d1524] font-bold hover:underline px-4"
          onClick={() => window.history.back()}
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
