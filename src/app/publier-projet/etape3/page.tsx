"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import BackgroundDecor from "@/app/components/BackgroundDecor"; // Assure-toi qu’il est bien importé

export default function Etape3ConnexionPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    identifiant: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // 🔁 TODO: Intégration API pour la connexion utilisateur
      // await fetch("/api/auth/login", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify(form),
      // });

      console.log("✅ Données envoyées (connexion) :", form);

      // Redirection après soumission (temporaire sans backend)
      router.push("/publier-projet/confirmation");
    } catch (error) {
      console.error("❌ Erreur de connexion :", error);
    }
  };

  return (
    <main className="min-h-screen pt-10 pb-20 px-4 flex flex-col items-center relative overflow-hidden">
      {/* ✅ Fond décoratif */}
      <BackgroundDecor />

      <div className="w-full max-w-xl">
        <button
          onClick={() => router.back()}
          className="text-sm text-[#7d1524] font-semibold mb-2 hover:underline"
        >
          ← Retour
        </button>

        <p className="text-sm text-[#3B0A0A] font-semibold mb-2">Étape 3 sur 3</p>
        <div className="h-2 bg-[#fcdcd7] rounded-full mb-6 overflow-hidden">
          <div className="h-full w-full bg-[#7d1524] transition-all"></div>
        </div>

        <h1 className="text-2xl font-bold mb-6 text-[#1f1f1f]">
          Pour suivre votre projet, veuillez vous connecter
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="text"
            name="identifiant"
            placeholder="Adresse e-mail / numéro de téléphone"
            value={form.identifiant}
            onChange={handleChange}
            className="w-full border border-[#7d1524] rounded-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#7d1524]"
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Mot de passe"
            value={form.password}
            onChange={handleChange}
            className="w-full border border-[#7d1524] rounded-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#7d1524]"
            required
          />

          <div className="text-right text-sm">
            <a href="/mot-de-passe-oublie" className="text-[#3B0A0A] underline">
              Mot de passe oublié ?
            </a>
          </div>

          <button
            type="submit"
            className="text-left bg-[#7d1524] text-white font-bold px-7 py-3 rounded-full shadow-md hover:bg-[#5d0e19] transition"
          >
            Se connecter
          </button>
        </form>

        <div className="mt-8 text-left text-[#3B0A0A]">
          <p className="mb-9 text-sm underline">Vous n'avez pas de compte ?</p>
          <a
            href="/inscription"
            className="bg-[#7d1524] text-white font-bold px-7 py-3 rounded-full shadow-md hover:bg-[#5d0e19] transition"
          >
            S’inscrire
          </a>
        </div>
      </div>
    </main>
  );
}
