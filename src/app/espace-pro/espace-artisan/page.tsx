'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { LockClosedIcon } from '@heroicons/react/24/solid';

export default function EspaceArtisanIndexPage() {
  const router = useRouter();
  const [isMobile, setIsMobile] = useState(true);

  // Fonction de logout
  const handleLogout = async () => {
    try {
      await fetch("http://localhost:8000/auth/logout.php", {
        method: "POST",
        credentials: "include",
      });
      router.push("/espace-pro/login");
    } catch (err) {
      alert("Erreur lors de la déconnexion.");
    }
  };

  // Écoute dynamique du resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        router.replace('/espace-pro/espace-artisan/parametre-compte');
      } else {
        setIsMobile(true);
      }
    };

    // Lancement immédiat + écoute
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [router]);

  if (!isMobile) return null;

  return (
    <div className="md:hidden p-6">
      <h2 className="text-xl font-bold text-[#7d1524] mb-4">Mon espace pro</h2>
      <ul className="space-y-4 text-sm text-[#3B0A0A] font-medium">
        <li className="flex items-center gap-2">
          <LockClosedIcon className="w-4 h-4 text-[#7B0F19]" />
          <span>Ma messagerie</span>
        </li>
        <li className="flex items-center gap-2">
          <LockClosedIcon className="w-4 h-4 text-[#7B0F19]" />
          <span>Mes avis</span>
        </li>
        <li className="flex items-center gap-2">
          <LockClosedIcon className="w-4 h-4 text-[#7B0F19]" />
          <span>Gérer mon abonnement</span>
        </li>
        <li><a href="#">Mes réalisations</a></li>
        <li><a href="/espace-pro/espace-artisan/portfolio">Mon portfolio</a></li>
        <li><a href="/espace-pro/espace-artisan/certif">Mes certifications</a></li>
        <li><a href="/espace-pro/espace-artisan/parametre-compte">Paramètres du compte</a></li>
      </ul>
      <hr className="my-6" />
      <button 
        className="bg-[#7B0F19] text-white px-4 py-2 rounded-full font-semibold"
        onClick={handleLogout}
      >
        Se déconnecter
      </button>
    </div>
  );
}
