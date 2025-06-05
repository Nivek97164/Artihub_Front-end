'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
// import SubscriptionAuthPopup from "./SubscriptionAuthPopup"; // Pour plus tard
// import { useAuth } from "@/app/context/AuthContext"; // Pour plus tard

const subscriptions = [
  {
    title: 'Artihub impulsion',
    sub: 'Engagement : 6 mois obligatoire',
    features: [
      'Visibilité garantie : fiche professionnelle et portfolio.',
      'Label ArtiHub offert dès l’inscription.',
      'Accompagnement personnalisé pour obtenir le label.',
      'Accès aux devis standards et tableau de bord complet.',
    ],
    slug: 'impulsion',
  },
  {
    title: 'Artihub accélération',
    sub: 'Sans engagement',
    features: [
      'Visibilité active avec mises en avant ponctuelles.',
      'Label ArtiHub inclus.',
      'Accès aux Missions Express limitées et devis standards avec quota mensuel.',
      'Notifications géolocalisées pour les urgences proches.',
    ],
    slug: 'acceleration',
  },
  {
    title: 'Artihub constellation',
    sub: 'Sans engagement',
    features: [
      'Visibilité premium : priorité dans les résultats et badges qualité.',
      'Label ArtiHub inclus immédiatement avec accompagnement complet.',
      'Accès illimité aux devis standards et Missions Express.',
      'Outils professionnels avancés pour une gestion optimisée.',
    ],
    slug: 'constellation',
  },
];

const SubscriptionsSection = () => {
  const router = useRouter();
  const isAuthenticated = false; // 🔁 À remplacer par le vrai état d'auth

  const handleSubscribeClick = (index: number) => {
    const selected = subscriptions[index];

    if (selected.slug === 'impulsion') {
      if (isAuthenticated) {
        router.push(`/nos-services/impulsion`);
      } else {
        router.push(`/nos-services/abonnements/impulsion`);
      }
    } else {
      // Redirection directe pour acceleration et constellation
      router.push(`/nos-services/abonnements/${selected.slug}`);
    }
  };

  return (
    <section className="w-full py-8">
      <div className="max-w-6xl mx-auto px-2">
        <h2 className="text-2xl md:text-4xl font-bold text-[#7d1524] text-center mb-6 md:mb-8">
          Des abonnements adaptés à vos besoins
          <br />
          pour faire grandir votre activité
        </h2>
        <div className="flex flex-col md:flex-row justify-center gap-10 md:gap-12 items-stretch">
          {subscriptions.map((sub, i) => (
            <div key={i} className="flex flex-col items-center flex-1">
              <div className="bg-[#f9d2c9] border-4 border-[#7d1524] rounded-3xl w-full max-w-[430px] px-6 py-4 md:px-8 md:py-5 shadow transition h-full flex flex-col">
                <div className="text-lg md:text-xl font-bold text-[#222] text-center mb-1">
                  {sub.title}
                </div>
                <div className="text-xs md:text-sm font-semibold text-center mb-3 md:mb-4">
                  {sub.sub}
                </div>
                <ul className="text-left list-disc ml-4 space-y-2 mb-2 md:mb-4 flex-1 text-sm md:text-base">
                  {sub.features.map((f, j) => (
                    <li key={j}>{f}</li>
                  ))}
                </ul>
              </div>
              <button
                className="mt-2 md:mt-3 bg-[#7d1524] text-white font-bold px-6 py-2 rounded-full shadow-md hover:bg-[#5d0e19] transition w-auto min-w-[170px] text-sm md:text-base mx-auto"
                onClick={() => handleSubscribeClick(i)}
              >
                Souscrire maintenant
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SubscriptionsSection;
