"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { LockClosedIcon } from "@heroicons/react/24/solid";

// Type fictif pour un artisan favori
type ArtisanFavori = {
  id: number;
  nom: string;
  metier: string;
  image: string;
};

export default function FavorisParticulierPage() {
  const [favoris, setFavoris] = useState<ArtisanFavori[]>([]);
  const router = useRouter();

  useEffect(() => {
    // TODO: Remplacer par une requête API pour récupérer les favoris réels
    const favorisMock: ArtisanFavori[] = [
      {
        id: 1,
        nom: "Jean Dupont",
        metier: "Plombier",
        image: "/placeholder-artisan.jpg",
      },
      {
        id: 2,
        nom: "Claire Martin",
        metier: "Électricienne",
        image: "/placeholder-artisan.jpg",
      },
    ];
    setFavoris(favorisMock);
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 flex flex-col md:flex-row">
      {/* Sidebar desktop uniquement */}
      <aside className="hidden md:block w-1/4 pr-6 border-r">
        <h2 className="text-xl font-bold mb-6">Mon espace pro</h2>
        <ul className="space-y-4 text-sm text-[#3B0A0A] font-medium">
          <li>
            <Link
              href="/espace-pro/espace-particulier/favoris"
              className="font-bold text-[#7B0F19]"
            >
              Mes favoris
            </Link>
          </li>
          <li className="flex items-center gap-1 text-gray-400">
            Ma messagerie <LockClosedIcon className="w-4 h-4" />
          </li>
          <li><Link href="#">Mes projets</Link></li>
          <li>
            <Link href="/espace-pro/espace-particulier/parametre-compte">
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
        {/* Retour mobile */}
        <button
          onClick={() => router.push("/espace-pro/espace-particulier")}
          className="text-[#7B0F19] font-semibold text-sm mb-4 md:hidden"
        >
          &larr; Mon espace pro
        </button>

        <h2 className="text-xl font-bold mb-1 text-[#3B0A0A]">Mes favoris</h2>
        <p className="text-sm text-gray-600 mb-6">Les artisans que vous avez ajoutés en favoris</p>

        {favoris.length === 0 ? (
          <p className="text-sm text-gray-500">Aucun artisan en favori pour le moment.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {favoris.map((artisan) => (
              <div
                key={artisan.id}
                className="border rounded-xl p-4 bg-[#F9F4F4] hover:shadow-md transition"
              >
                <div className="relative w-full h-40 rounded-md overflow-hidden mb-4">
                  <Image
                    src={artisan.image}
                    alt={artisan.nom}
                    width={300}
                    height={160}
                    className="w-full h-full object-cover rounded-md"
                  />
                </div>
                <h3 className="font-semibold text-sm text-[#1f1f1f]">{artisan.nom}</h3>
                <p className="text-xs text-gray-500">{artisan.metier}</p>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
