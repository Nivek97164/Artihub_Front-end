"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
// ... icônes Google/Facebook inchangés

export default function LoginPage() {
  const router = useRouter();
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState(""); // Ajout état du rôle
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!emailOrPhone || !password || !role) {
      setError("Veuillez saisir votre e-mail/téléphone, mot de passe et choisir un type de compte.");
      return;
    }

    try {
      const response = await fetch("http://localhost:8000/auth/login.php", {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: emailOrPhone,
          password,
          role, // Ajouté !
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        // Redirige selon le rôle (toujours OK vu qu'il est choisi en amont)
        if (data.role === "artisan") {
          router.push("/espace-pro/espace-artisan/parametre-compte");
        } else if (data.role === "particulier") {
          router.push("/espace-pro/espace-particulier/parametre-compte");
        } else {
          router.push("/");
        }
      } else {
        setError(data.error || "Identifiants incorrects.");
      }
    } catch (err) {
      setError("Erreur réseau ou serveur.");
    }
  };

  return (
    <main className="min-h-screen flex flex-col items-center pt-10 bg-[#FAF9F8]">
      <h2 className="text-2xl md:text-3xl font-bold text-[#7d1524] text-center mb-7">
        Heureux de vous revoir !
      </h2>
      <form
        className="flex flex-col items-center w-full max-w-md"
        onSubmit={handleSubmit}
        autoComplete="off"
      >
        {/* ... Google/Facebook buttons ... */}

        {/* Divider */}
        <div className="w-full flex items-center my-2">
          <hr className="flex-grow border-[#7d1524]" />
          <span className="mx-3 text-[#7d1524] font-semibold">Ou</span>
          <hr className="flex-grow border-[#7d1524]" />
        </div>

        {/* Champ email/tel */}
        <input
          type="text"
          placeholder="Adresse e-mail / numéro de téléphone"
          className="w-full border border-[#7d1524] rounded-full px-4 py-2 mb-3 focus:outline-none focus:ring-2 focus:ring-[#7d1524]"
          value={emailOrPhone}
          onChange={(e) => {
            let val = e.target.value;
            if (/^\d+$/.test(val)) val = val.slice(0, 10);
            setEmailOrPhone(val);
          }}
          maxLength={50}
        />

        {/* Sélecteur de rôle */}
        <select
          value={role}
          onChange={e => setRole(e.target.value)}
          className="w-full border border-[#7d1524] rounded-full px-4 py-2 mb-3 text-[#7d1524] focus:outline-none focus:ring-2 focus:ring-[#7d1524]"
          required
        >
          <option value="">Sélectionner un type de compte</option>
          <option value="artisan">Artisan</option>
          <option value="particulier">Particulier</option>
        </select>

        {/* Champ mot de passe */}
        <input
          type="password"
          placeholder="Mot de passe"
          className="w-full border border-[#7d1524] rounded-full px-4 py-2 mb-1 focus:outline-none focus:ring-2 focus:ring-[#7d1524]"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {/* Erreur éventuelle */}
        {error && (
          <div className="text-red-600 mb-2 w-full text-center">{error}</div>
        )}

        {/* ... reste du formulaire inchangé ... */}
        <div className="w-full text-right mb-3">
          <a
            href="/mot-de-passe-oublie"
            className="text-xs text-[#7d1524] hover:underline"
          >
            Mot de passe oublié ?
          </a>
        </div>
        <div className="w-full text-xs text-center mb-4 text-[#333]">
          En me connectant, j’accepte les{" "}
          <a href="/conditions-generales" className="underline text-[#7d1524]">
            conditions générales d’ArtiHub
          </a>
          .
        </div>
        <div className="flex w-full justify-between">
          <a
            href="/"
            className="text-[#7d1524] font-semibold mt-2 hover:underline"
          >
            Retour
          </a>
          <button
            type="submit"
            className="bg-[#7d1524] text-white font-bold px-8 py-2 rounded-full shadow-md hover:bg-[#5d0e19] transition ml-auto"
          >
            Se connecter
          </button>
        </div>
      </form>
    </main>
  );
}
