'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { LockClosedIcon } from '@heroicons/react/24/outline';


type Projet = {
  id: number;
  titre: string;
  image: string;
};

export default function PortfolioArtisan() {
  const [projets, setProjets] = useState<Projet[]>([]);
  const router = useRouter();

  useEffect(() => {
    const mockProjets: Projet[] = [
      {
        id: 1,
        titre: "Rénovation complète d'une salle de bain",
        image: "/globe.svg"
      },
      {
        id: 2,
        titre: "Isolation thermique d'une maison",
        image: "/globe.svg"
      },
      {
        id: 3,
        titre: "Pose d’un carrelage moderne",
        image: "/globe.svg"
      }
    ];
    setProjets(mockProjets);
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 flex flex-col md:flex-row">
      {/* Menu latéral (desktop uniquement) */}
      <aside className="hidden md:block w-1/4 pr-6 border-r">
        <h2 className="text-xl font-bold mb-6">Mon espace pro</h2>
        <ul className="space-y-4 text-sm text-[#3B0A0A] font-medium">
        <li className="flex items-center gap-2 text-gray-400">
  <LockClosedIcon className="w-4 h-4" />
  <span>Ma messagerie</span>
</li>
<li className="flex items-center gap-2 text-gray-400">
  <LockClosedIcon className="w-4 h-4" />
  <span>Mes avis</span>
</li>
<li className="flex items-center gap-2 text-gray-400">
  <LockClosedIcon className="w-4 h-4" />
  <span>Gérer mes abonnements</span>
</li>
          <li>
            <Link href="/espace-pro/espace-artisan/realisations">Mes réalisations</Link>
          </li>
          <li>
            <Link href="/espace-pro/espace-artisan/portfolio" className="font-bold text-[#7B0F19]">
              Mon portfolio
            </Link>
          </li>
          <li>
            <Link href="/espace-pro/espace-artisan/certif">
              Mes certifications
            </Link>
          </li>
          <li>
            <Link href="/espace-pro/espace-artisan/parametre-compte">
              Paramètres du compte
            </Link>
          </li>
        </ul>
        <button className="mt-10 bg-[#7B0F19] text-white px-4 py-2 rounded-full font-semibold">
          Se déconnecter
        </button>
      </aside>

      {/* Contenu principal */}
      <main className="w-full md:w-3/4 md:pl-6">
        {/* Bouton retour (mobile only) */}
        <button
          onClick={() => router.push('/espace-pro/espace-artisan')}
          className="text-[#7B0F19] font-semibold text-sm mb-4 md:hidden"
        >
          &larr; Mon espace pro
        </button>

        <h2 className="text-xl font-bold mb-1 text-[#3B0A0A]">Portfolio</h2>
        <p className="text-sm text-gray-600 mb-6">Vos projets publiés</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {projets.map((projet) => (
            <div
              key={projet.id}
              className="rounded-xl border p-2 bg-[#F9F4F4] hover:shadow-md transition"
            >
              <div className="relative w-full h-40 rounded-lg overflow-hidden">
                <Image
                  src={projet.image}
                  alt={projet.titre}
                  width={300}
                  height={160}
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
              <p className="text-sm text-gray-800 mt-2 font-medium">
                {projet.titre}
              </p>
            </div>
          ))}
        </div>

        {/* Ajouter un projet */}
        <div className="mt-10">
          <button className="bg-[#7B0F19] text-white px-6 py-2 rounded-full font-semibold">
            Ajouter un projet
          </button>
        </div>
      </main>
    </div>
  );
}
