"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { PencilIcon, LockClosedIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { logout } from "@/utils/logout"; // <-- Ton utilitaire logout

export default function ParametresCompte() {
  const pathname = usePathname();
  const router = useRouter();
  // PAS de useLogout ici !

  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch("https://www.artihub.fr/auth/me.php", {
          method: "GET",
          credentials: "include",
        });
        const contentType = response.headers.get("content-type");
        if (!response.ok) {
          let errorData = null;
          if (contentType && contentType.includes("application/json")) {
            errorData = await response.json();
          } else {
            errorData = {
              error: "Erreur inconnue ou pas de réponse du serveur.",
            };
          }
          console.error("Erreur API:", errorData);
          return;
        }
        if (contentType && contentType.includes("application/json")) {
          const data = await response.json();
          setUser(data);
        } else {
          console.error("Réponse du backend non JSON ou vide.");
        }
      } catch (error) {
        console.error("Erreur de connexion au backend:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, []);

  const menuItems = [
    { label: "Ma messagerie", href: "/espace-pro/espace-artisan/messagerie", disabled: true },
    { label: "Mes avis", href: "/espace-pro/espace-artisan/avis", disabled: true },
    { label: "Gérer mes abonnements", href: "/espace-pro/espace-artisan/abonnements", disabled: true },
    { label: "Mes réalisations", href: "/espace-pro/espace-artisan/realisation" },
    { label: "Mon portfolio", href: "/espace-pro/espace-artisan/portfolio" },
    { label: "Mes certifications", href: "/espace-pro/espace-artisan/certif" },
    { label: "Paramètres du compte", href: "/espace-pro/espace-artisan/parametre-compte" },
  ];

  if (loading) return <p className="p-4">Chargement...</p>;
  if (!user)
    return (
      <p className="p-4 text-red-600">
        Erreur lors du chargement de vos données.
      </p>
    );

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 flex flex-col md:flex-row">
      <aside className="hidden md:block w-1/4 pr-6 border-r">
        <h2 className="text-xl font-bold mb-6">Mon espace pro</h2>
        <ul className="space-y-4 text-sm font-medium">
          {menuItems.map((item) =>
            item.disabled ? (
              <li
                key={item.href}
                className="flex items-center gap-2 text-gray-400 pointer-events-none"
              >
                <LockClosedIcon className="w-4 h-4" />
                {item.label}
              </li>
            ) : (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={
                    pathname === item.href
                      ? "text-[#7B0F19] font-bold"
                      : "text-[#3B0A0A] hover:text-[#7B0F19]"
                  }
                >
                  {item.label}
                </Link>
              </li>
            )
          )}
        </ul>
        <button
          className="mt-10 bg-[#7B0F19] text-white px-4 py-2 rounded-full font-semibold"
          onClick={() => logout(router)} // ✅ Appelle la fonction utilitaire
        >
          Se déconnecter
        </button>
      </aside>

      <main className="w-full md:w-3/4 md:pl-6">
        <button
          onClick={() => router.push("/espace-pro/espace-artisan")}
          className="text-[#7B0F19] font-semibold text-sm mb-4 md:hidden"
        >
          &larr; Mon espace pro
        </button>

        <h2 className="text-xl font-bold mb-1 text-[#3B0A0A]">
          Paramètres du compte
        </h2>
        <p className="text-sm text-gray-600 mb-6">Données personnelles</p>

        <div className="mb-8 flex items-center gap-4">
          <div className="w-14 h-14 bg-gray-200 rounded-full flex items-center justify-center text-2xl">
            +
          </div>
          <a
            href="#"
            className="text-sm text-[#7B0F19] font-semibold hover:underline"
          >
            Ajouter une photo de profil
          </a>
        </div>

        <div className="space-y-4 text-sm">
          <LigneInfo label="Nom" value={user.username} />
          <LigneInfo label="Adresse e-mail" value={user.email} />
          <LigneInfo label="Numéro de téléphone" value={user.phone} />
          <LigneInfo
            label="Adresse postale"
            value={`${user.address} ${user.postal_code}`}
          />
          <LigneInfo
            label="Description"
            value={user.description ?? "Non renseignée"}
          />
          <LigneInfo
            label="Spécialité"
            value={user.specialite ?? "Non renseignée"}
          />
        </div>
      </main>
    </div>
  );
}

function LigneInfo({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between items-start border-b pb-2">
      <div className="max-w-[85%]">
        <p className="text-xs text-gray-500">{label}</p>
        <p className="text-sm text-gray-800">{value}</p>
      </div>
      <button className="text-[#7B0F19] p-1">
        <PencilIcon className="w-4 h-4" />
      </button>
    </div>
  );
}
