"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  const [form, setForm] = useState({
    nom: "",
    prenom: "",
    telephone: "",
    email: "",
    adresse: "",
    codePostal: "",
    password: "",
    confirmPassword: "",
    acceptCgu: false,
    acceptGeo: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    let newValue = value;
    if (name === "telephone") {
      newValue = value.replace(/[^0-9]/g, "").slice(0, 10);
    }
    setForm((prev) => ({
      ...prev,
      [name]: newValue,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      alert("Les mots de passe ne correspondent pas.");
      return;
    }

    if (!form.acceptCgu) {
      alert("Vous devez accepter les conditions générales.");
      return;
    }

    const payload = {
      username: `${form.prenom} ${form.nom}`,
      email: form.email,
      password: form.password,
      role: "particulier",
      phone: form.telephone,
      address: form.adresse,
      postal_code: form.codePostal,
      geolocalisation_enable: form.acceptGeo,
    };

    console.log("Payload envoyé :", payload);

    try {
      const response = await fetch("http://localhost:8000/auth/register.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include", // AJOUTE CETTE LIGNE !
        body: JSON.stringify(payload),
      });

      const result = await response.json();
      console.log("Réponse du serveur :", result);

      if (response.ok) {
        console.log("Redirection vers /espace-pro/espace-particulier/parametre-compte");
        router.push("/espace-pro/espace-particulier/parametre-compte");
      } else {
        alert(result.error || "Une erreur est survenue lors de l'inscription.");
      }
    } catch (err) {
      alert("Erreur de connexion au serveur.");
    }
  };

 return (
    <main className="min-h-screen flex flex-col items-center pt-6 px-2 bg-[#FAF9F8]">
      <h2 className="text-lg md:text-3xl font-bold text-[#7d1524] text-center mb-4 md:mb-8 leading-tight">
        Rejoindre en tant que Particulier
      </h2>
      <form
        className="w-full max-w-xs sm:max-w-md lg:max-w-2xl flex flex-col mx-auto"
        onSubmit={handleSubmit}
        autoComplete="off"
      >
        <div className="flex flex-col md:flex-row gap-2 mb-2">
          <input
            type="text"
            name="nom"
            placeholder="Nom"
            className="flex-1 border border-[#7d1524] rounded-full px-3 py-2 md:py-3 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-[#7d1524]"
            value={form.nom}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="prenom"
            placeholder="Prénom"
            className="flex-1 border border-[#7d1524] rounded-full px-3 py-2 md:py-3 text-sm md:text-base mt-2 md:mt-0 focus:outline-none focus:ring-2 focus:ring-[#7d1524]"
            value={form.prenom}
            onChange={handleChange}
            required
          />
        </div>
        <input
          type="text"
          name="telephone"
          placeholder="Numéro de téléphone"
          className="mb-2 border border-[#7d1524] rounded-full px-3 py-2 md:py-3 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-[#7d1524]"
          value={form.telephone}
          onChange={handleChange}
          maxLength={10}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Adresse e-mail"
          className="mb-2 border border-[#7d1524] rounded-full px-3 py-2 md:py-3 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-[#7d1524]"
          value={form.email}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="adresse"
          placeholder="Adresse postale"
          className="mb-2 border border-[#7d1524] rounded-full px-3 py-2 md:py-3 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-[#7d1524]"
          value={form.adresse}
          onChange={handleChange}
        />
        <input
          type="text"
          name="codePostal"
          placeholder="Code postal"
          className="mb-2 border border-[#7d1524] rounded-full px-3 py-2 md:py-3 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-[#7d1524]"
          value={form.codePostal}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Mot de passe"
          className="mb-2 border border-[#7d1524] rounded-full px-3 py-2 md:py-3 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-[#7d1524]"
          value={form.password}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirmer mot de passe"
          className="mb-2 border border-[#7d1524] rounded-full px-3 py-2 md:py-3 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-[#7d1524]"
          value={form.confirmPassword}
          onChange={handleChange}
          required
        />

        <label className="relative flex items-start gap-2 mb-1 text-xs md:text-sm cursor-pointer select-none">
          <input
            type="checkbox"
            name="acceptCgu"
            checked={form.acceptCgu}
            onChange={handleChange}
            className="peer appearance-none w-4 h-4 border-2 border-[#7d1524] rounded-full transition-all checked:bg-[#7d1524] focus:outline-none focus:ring-2 focus:ring-[#7d1524] mt-0.5"
            required
          />
          <span className="pointer-events-none absolute left-0 top-1 w-4 h-4 flex items-center justify-center">
            <svg
              className="opacity-0 peer-checked:opacity-100 transition-all duration-200"
              width={16}
              height={16}
              viewBox="0 0 16 16"
              fill="none"
            >
              <circle cx="8" cy="8" r="7" fill="#7d1524" />
              <path
                d="M5.5 8.5L7.5 10.5L11 7"
                stroke="#fff"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </span>
          <span className="pl-7 leading-snug block">
            En s’inscrivant, j’accepte les{" "}
            <a
              href="/conditions-generales"
              target="_blank"
              className="underline text-[#7d1524]"
            >
              conditions générales d’ArtiHub.
            </a>
          </span>
        </label>

        <label className="relative flex items-start gap-2 mb-4 text-xs md:text-sm cursor-pointer select-none">
          <input
            type="checkbox"
            name="acceptGeo"
            checked={form.acceptGeo}
            onChange={handleChange}
            className="peer appearance-none w-4 h-4 border-2 border-[#7d1524] rounded-full transition-all checked:bg-[#7d1524] focus:outline-none focus:ring-2 focus:ring-[#7d1524] mt-0.5"
          />
          <span className="pointer-events-none absolute left-0 top-1 w-4 h-4 flex items-center justify-center">
            <svg
              className="opacity-0 peer-checked:opacity-100 transition-all duration-200"
              width={16}
              height={16}
              viewBox="0 0 16 16"
              fill="none"
            >
              <circle cx="8" cy="8" r="7" fill="#7d1524" />
              <path
                d="M5.5 8.5L7.5 10.5L11 7"
                stroke="#fff"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </span>
          <span className="pl-7 leading-snug block">
            Cochez cette case pour activer votre localisation et recevoir des
            opportunités près de chez vous.
          </span>
        </label>

        <div className="flex flex-col md:flex-row justify-between items-center w-full gap-2 mt-2">
          <a
            href="/espace-pro"
            className="text-[#7d1524] font-semibold hover:underline mb-2 md:mb-0"
          >
            Retour
          </a>
          <button
            type="submit"
            className="bg-[#7d1524] text-white font-bold px-7 py-2 rounded-full shadow-md hover:bg-[#5d0e19] transition text-base"
          >
            S’inscrire
          </button>
        </div>
      </form>
    </main>
  );
}
