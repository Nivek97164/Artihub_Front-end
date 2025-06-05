'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function EspaceParticulierIndexPage() {
  const router = useRouter();

  // Redirection automatique si écran desktop
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 768) {
        router.replace('/espace-pro/espace-particulier/parametre-compte');
      }
    }

    // Exécution initiale + listener
    handleResize();
    window.addEventListener('resize', handleResize);

    // Nettoyage du listener au démontage
    return () => window.removeEventListener('resize', handleResize);
  }, [router]);

  return (
    <div className="md:hidden p-6">
      <h2 className="text-xl font-bold text-[#7d1524] mb-4">Mon espace pro</h2>

      <ul className="space-y-4 text-sm text-[#3B0A0A] font-medium">
        <li><a href="#">Mes favoris</a></li>
        <li className="flex items-center gap-1 text-gray-400">
          Ma messagerie
          <span className="ml-1 text-xs">🔒</span>
        </li>
        <li><a href="#">Mes projets</a></li>
        <li><a href="/espace-pro/espace-particulier/parametre-compte">Paramètres du compte</a></li>
      </ul>

      <hr className="my-6" />

      <button className="bg-[#7B0F19] text-white px-4 py-2 rounded-full font-semibold">
        Se déconnecter
      </button>
    </div>
  );
}
