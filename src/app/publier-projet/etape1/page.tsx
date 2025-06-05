'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import BackgroundDecor from '@/app/components/BackgroundDecor';

export default function PublierUnProjetPage() {
  const router = useRouter();

  const [form, setForm] = useState({
    titre: '',
    description: '',
    adresse: '',
    ville: '',
    codePostal: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // ✅ À activer quand l'API backend sera disponible :
      // await fetch('/api/projets/etape1', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(form),
      // });

      console.log('✅ Données envoyées (étape 1) :', form);
      router.push('/publier-projet/etape2');
    } catch (error) {
      console.error('❌ Erreur lors de l’envoi de l’étape 1 :', error);
    }
  };

  return (
    <main className="min-h-screen pt-10 pb-20 px-4 flex flex-col items-center relative overflow-hidden">
      {/* 🎨 Décor en fond */}
      <BackgroundDecor />

      <div className="w-full max-w-2xl">
        <p className="text-sm text-[#3B0A0A] font-semibold mb-2">Étape 1 sur 3</p>
        <div className="h-2 bg-[#fcdcd7] rounded-full mb-6 overflow-hidden">
          <div className="h-full w-1/3 bg-[#7d1524] transition-all"></div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Titre */}
          <div>
            <label className="block text-xl font-bold text-[#3B0A0A] mb-1">
              Quel est votre projet ?
            </label>
            <p className="text-base text-gray-700 mb-2">
              Donnez un titre clair pour décrire votre besoin
            </p>
            <input
              type="text"
              name="titre"
              placeholder='Exemple : "Peinture intérieure pour un appartement"'
              className="w-full border border-[#7d1524] rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#7d1524]"
              value={form.titre}
              onChange={handleChange}
              required
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-xl font-bold text-[#3B0A0A] mb-1">
              Pouvez-vous décrire votre projet en détail ?
            </label>
            <p className="text-base text-gray-700 mb-2">
              Expliquez ce que vous souhaitez réaliser : nature des travaux, spécificités, attentes.
            </p>
            <textarea
              name="description"
              placeholder='Exemple : "Peinture intérieure pour un appartement"'
              className="w-full border border-[#7d1524] rounded-xl px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-[#7d1524]"
              rows={4}
              value={form.description}
              onChange={handleChange}
              required
            />
          </div>

          {/* Adresse */}
          <div>
            <label className="block text-xl font-bold text-[#3B0A0A] mb-1">
              Où se situe le projet ?
            </label>
            <p className="text-base text-gray-700 mb-2">
              Entrez l’adresse, code postale et la ville où les travaux auront lieu.
            </p>
            <input
              type="text"
              name="adresse"
              placeholder="Entrer votre adresse"
              className="w-full border border-[#7d1524] rounded-full px-4 py-2 mb-3 focus:outline-none focus:ring-2 focus:ring-[#7d1524]"
              value={form.adresse}
              onChange={handleChange}
              required
            />
            <div className="flex gap-3">
              <input
                type="text"
                name="ville"
                placeholder="Ville"
                className="flex-1 border border-[#7d1524] rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#7d1524]"
                value={form.ville}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="codePostal"
                placeholder="Code postal"
                className="w-[40%] border border-[#7d1524] rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#7d1524]"
                value={form.codePostal}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Bouton */}
          <div className="text-left">
            <button
              type="submit"
              className="bg-[#7d1524] text-white font-bold px-12 py-3 rounded-full hover:bg-[#5d0e19] transition"
            >
              Suivant
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
