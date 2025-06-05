'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import BackgroundDecor from '@/app/components/BackgroundDecor'; 

export default function Etape2Page() {
  const router = useRouter();

  const [form, setForm] = useState({
    dateDebut: '',
    natureProjet: '',
    fichiers: null,
    urgent: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const target = e.target as HTMLInputElement;
    const { name, value, type } = target;
    const checked = target.checked;

    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // 🔁 TODO : envoyer les données au backend ici
      // await fetch('/api/projets/etape2', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(form),
      // });

      console.log('✅ Données envoyées (étape 2) :', form);
      router.push('/publier-projet/etape3');
    } catch (err) {
      console.error('❌ Erreur API étape 2 :', err);
    }
  };

  return (
    <main className="min-h-screen pt-10 pb-20 px-4 flex flex-col items-center relative overflow-hidden">
      {/* 🎨 Décor en fond */}
      <BackgroundDecor />

      <div className="w-full max-w-2xl">
        <p className="text-sm text-[#3B0A0A] font-semibold mb-2">Etape 2 sur 3</p>
        <div className="h-2 bg-[#fcdcd7] rounded-full mb-6 overflow-hidden">
          <div className="h-full w-2/3 bg-[#7d1524] transition-all"></div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Date de début */}
          <div>
            <label className="block text-xl font-bold text-[#3B0A0A] mb-2">Date de début souhaitée</label>
            <input
              type="date"
              name="dateDebut"
              value={form.dateDebut}
              onChange={handleChange}
              className="w-full border border-[#7d1524] rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#7d1524]"
            />
          </div>

          {/* Nature du projet */}
          <div>
            <label className="block text-xl font-bold text-[#3B0A0A] mb-2">Nature du projet</label>
            <input
              type="text"
              name="natureProjet"
              value={form.natureProjet}
              onChange={handleChange}
              placeholder="Exemple : Peinture, Rénovation, CVC..."
              className="w-full border border-[#7d1524] rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#7d1524]"
            />
          </div>

          {/* Importer fichiers */}
          <div>
            <label className="block text-xl font-bold text-[#3B0A0A] mb-2">Importer des fichiers (plans, devis...)</label>
            <input type="file" id="fileUpload" className="hidden" multiple />
            <label
              htmlFor="fileUpload"
              className="inline-block bg-[#7d1524] text-white px-6 py-2 rounded-full font-semibold cursor-pointer hover:bg-[#5a0e19] transition"
            >
              Importer des fichiers
            </label>
          </div>

          {/* Projet urgent */}
          <div>
            <label className="block text-xl font-bold text-[#3B0A0A] mb-2">
              Votre projet est-il urgent ?
            </label>
            <p className="text-base text-gray-700 mb-3">
              Votre projet sera visible en priorité par des artisans disponibles immédiatement.
            </p>
            <label className="relative flex items-center cursor-pointer select-none text-base font-bold text-[#3B0A0A]">
              <input
                type="checkbox"
                name="urgent"
                checked={form.urgent}
                onChange={handleChange}
                className="peer hidden"
              />
              <div className="w-5 h-5 rounded-full border-2 border-[#7d1524] flex items-center justify-center mr-3 transition-all peer-checked:bg-[#7d1524]">
                <svg
                  className="w-3 h-3 text-white opacity-0 peer-checked:opacity-100 transition-opacity"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 13l4 4L19 7" />
                </svg>
              </div>
              Cochez ici si c’est une mission urgente (Mission Express)
            </label>
          </div>

          {/* Boutons */}
          <div className="flex justify-between items-center mt-6">
            <button
              type="button"
              onClick={() => router.back()}
              className="border border-[#7d1524] text-[#7d1524] font-semibold px-6 py-2 rounded-full hover:bg-[#fbeaea] transition"
            >
              Précédent
            </button>
            <button
              type="submit"
              className="bg-[#7d1524] text-white font-bold px-8 py-3 rounded-full hover:bg-[#5a0e19] transition"
            >
              Suivant
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
