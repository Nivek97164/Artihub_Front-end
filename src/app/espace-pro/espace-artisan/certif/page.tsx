'use client';

import Link from 'next/link';
import { LockClosedIcon } from '@heroicons/react/24/outline';

export default function CertifArtisanPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10 flex flex-col md:flex-row">
      {/* Menu latéral (desktop) */}
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
            <Link href="#">Mes réalisations</Link>
          </li>
          <li>
            <Link href="/espace-pro/espace-artisan/portfolio">Mon portfolio</Link>
          </li>
          <li>
            <Link
              href="/espace-pro/espace-artisan/certif"
              className="font-bold text-[#7B0F19]"
            >
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
      <main className="w-full md:w-3/4 md:pl-10">
        {/* Retour (mobile uniquement) */}
        <div className="mb-6 md:hidden">
          <Link
            href="/espace-pro/espace-artisan"
            className="text-[#7d1524] font-bold text-base hover:underline"
          >
            ← Mon espace pro
          </Link>
        </div>

        {/* Bloc principal */}
        <div className="rounded-xl px-6 py-6 max-w-xl">
          <h2 className="text-xl font-bold mb-4 text-[#1f1f1f]">Certifications</h2>

          <div className="mb-4">
            <h3 className="font-semibold text-base mb-1">Certifications Actuelles :</h3>
            <ul className="list-disc ml-6 text-sm text-gray-800">
              <li>Label RGE (Reconnu Garant de l’Environnement)</li>
            </ul>
          </div>

          <p className="text-sm text-gray-700 mt-4 mb-1">
            Vous souhaitez enrichir vos certifications ?
          </p>
          <p className="text-sm text-gray-700">
            Notre plateforme vous accompagne dans l’obtention de labels.
          </p>

          <div className="mt-8">
            <button className="bg-[#7B0F19] text-white px-6 py-3 rounded-full font-semibold shadow-md hover:bg-[#5d0e19] transition w-full text-center">
              Obtenez votre label avec ArtiHub
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
