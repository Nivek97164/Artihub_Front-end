"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type Utilisateur = {
  nom: string;
  email: string;
  telephone: string;
  adresse: string;
};

export default function EspaceParticulierCompte() {
  const router = useRouter();
  const [user, setUser] = useState<Utilisateur | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchUserData() {
      try {
        console.log("Appel à /auth/me.php...");
        const response = await fetch("http://localhost:8000/auth/me.php", {
          method: "GET",
          credentials: "include", // Important pour le cookie PHPSESSID !
        });
        console.log("Status HTTP =", response.status);

        let data;
        try {
          data = await response.json();
        } catch (err) {
          console.warn("Erreur de parsing JSON", err);
          data = {};
        }
        console.log("Réponse JSON du backend =", data);

        if ((data.success && data.user) || data.username) {
          const userData = data.user ? data.user : data;
          setUser({
            nom: userData.username || "", // ou .nom
            email: userData.email || "",
            telephone: userData.phone || "",
            adresse: userData.address || "",
          });
          console.log("User connecté, user =", userData);
        } else {
          console.warn("Pas de user trouvé, redirection login. Data =", data);
          router.replace("/espace-pro/login");
        }
      } catch (error) {
        console.error("Erreur de chargement utilisateur :", error);
        router.replace("/espace-pro/login");
      } finally {
        setLoading(false);
        console.log("Chargement terminé");
      }
    }
    fetchUserData();
  }, [router]);

  // Logout
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

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        Chargement...
      </div>
    );
  }

  if (!user) {
    console.warn("user est null après chargement");
    return null;
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 flex flex-col md:flex-row">
      {/* Menu latéral */}
      <aside className="hidden md:block w-1/4 pr-6 border-r">
        <h2 className="text-xl font-bold mb-6 text-[#7B0F19]">
          Mon espace particulier
        </h2>
        <ul className="space-y-4 text-sm text-[#3B0A0A] font-medium">
          <li>
            <span className="font-bold text-[#7B0F19]">
              Paramètres du compte
            </span>
          </li>
        </ul>
        <button
          className="mt-10 bg-[#7B0F19] text-white px-4 py-2 rounded-full font-semibold"
          onClick={handleLogout}
        >
          Se déconnecter
        </button>
      </aside>

      {/* Contenu principal */}
      <main className="w-full md:w-3/4 md:pl-10">
        {/* Retour mobile */}
        <div className="mb-6 md:hidden">
          <button
            onClick={() => router.push("/espace-pro/espace-particulier")}
            className="text-[#7B0F19] font-bold text-base hover:underline"
          >
            ← Mon espace particulier
          </button>
        </div>

        <h2 className="text-lg font-bold mb-4 text-[#1f1f1f]">
          Données personnelles
        </h2>

        {/* Bloc photo de profil */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-[#f5d4ca] text-[#7B0F19] flex items-center justify-center font-bold text-lg">
              +
            </div>
            <span className="text-sm text-[#1f1f1f] font-medium">
              Photo de profil
            </span>
          </div>
          <a
            href="#"
            className="text-sm font-medium text-[#7B0F19] hover:underline"
          >
            Ajouter une photo de profil
          </a>
        </div>

        {/* Bloc infos */}
        <div className="space-y-4 text-sm">
          <LigneInfo label="Nom" value={user.nom} />
          <LigneInfo label="Adresse e-mail" value={user.email} />
          <LigneInfo label="Numéro de téléphone" value={user.telephone} />
          <LigneInfo label="Adresse postale" value={user.adresse} />
        </div>
      </main>
    </div>
  );
}

function LigneInfo({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between items-center border-t py-2">
      <div>
        <p className="text-xs text-gray-500">{label}</p>
        <p className="text-sm text-[#1f1f1f]">{value}</p>
      </div>
      <a
        href="#"
        className="text-sm font-medium text-[#7B0F19] hover:underline"
      >
        Modifier
      </a>
    </div>
  );
}
