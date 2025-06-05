'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { LockClosedIcon } from '@heroicons/react/24/outline';

// Type de chantier
type Realisation = {
  id: number;
  titre: string;
  lieu: string;
  date: string;
};

export default function MesRealisationsArtisan() {
  const [realisations, setRealisations] = useState<Realisation[]>([]);
  const router = useRouter();

  useEffect(() => {
    // À remplacer plus tard par un appel à l'API
    const mockData: Realisation[] = [
      { id: 1, titre: 'Rénovation salon + cuisine', lieu: 'Lyon (69006)', date: 'Mars 2024' },
      { id: 2, titre: 'Création d’une terrasse en bois', lieu: 'Toulouse (31000)', date: 'Avril 2024' },
      { id: 3, titre: 'Isolation des combles', lieu: 'Rouen (76000)', date: 'Mai 2024' },
    ];
    setRealisations(mockData);
  }, []);

  const menuItems = [
    { label: 'Ma messagerie', href: '#', disabled: true },
    { label: 'Mes avis', href: '#', disabled: true },
    { label: 'Gérer mes abonnements', href: '#', disabled: true },
    { label: 'Mes réalisations', href: '/espace-pro/espace-artisan/realisation' },
    { label: 'Mon portfolio', href: '/espace-pro/espace-artisan/portfolio' },
    { label: 'Mes certifications', href: '/espace-pro/espace-artisan/certif' },
    { label: 'Paramètres du compte', href: '/espace-pro/espace-artisan/parametre-compte' }
  ];

  // Fonction de logout
  const handleLogout = async () => {
    try {
      await fetch("https://artihubback-end-production.up.railway.app/auth/logout.php", {
        method: "GET",
        credentials: "include",
      });
      router.push("/espace-pro/login");
    } catch (err) {
      alert("Erreur lors de la déconnexion.");
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 flex flex-col md:flex-row">
      {/* Menu latéral (desktop) */}
      <aside className="hidden md:block w-1/4 pr-6 border-r">
        <h2 className="text-xl font-bold mb-6">Mon espace pro</h2>
        <ul className="space-y-4 text-sm font-medium">
          {menuItems.map((item) =>
            item.disabled ? (
              <li key={item.label} className="flex items-center gap-2 text-gray-400 pointer-events-none">
                <LockClosedIcon className="w-4 h-4" />
                {item.label}
              </li>
            ) : (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-[#3B0A0A] hover:text-[#7B0F19]"
                >
                  {item.label}
                </Link>
              </li>
            )
          )}
        </ul>
        <button 
          className="mt-10 bg-[#7B0F19] text-white px-4 py-2 rounded-full font-semibold"
          onClick={handleLogout}
        >
          Se déconnecter
        </button>
      </aside>

      {/* Contenu principal */}
      <main className="w-full md:w-3/4 md:pl-6">
        {/* Retour mobile uniquement */}
        <button
          onClick={() => router.push('/espace-pro/espace-artisan')}
          className="text-[#7B0F19] font-semibold text-sm mb-4 md:hidden"
        >
          &larr; Mon espace pro
        </button>

        <h2 className="text-xl font-bold mb-1 text-[#3B0A0A]">Mes réalisations</h2>
        <p className="text-sm text-gray-600 mb-6">Historique de vos chantiers réalisés</p>

        <div className="space-y-4">
          {realisations.map((chantier) => (
            <div key={chantier.id} className="border rounded-lg px-4 py-3 bg-[#F9F4F4]">
              <h3 className="font-semibold text-[#1f1f1f]">{chantier.titre}</h3>
              <p className="text-sm text-gray-600">{chantier.lieu}</p>
              <p className="text-sm text-gray-500">{chantier.date}</p>
            </div>
          ))}
        </div>

        {/* Placeholder pour l'intégration API future */}
        <div className="mt-10 text-xs text-gray-400 italic">
          Données affichées à titre d'exemple. Connecter l'API ici pour afficher les vraies réalisations.
        </div>
      </main>
    </div>
  );
}
