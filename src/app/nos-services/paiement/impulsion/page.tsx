'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { useState } from 'react';

export default function PaiementImpulsionPage() {
  const router = useRouter();
  const [moyenPaiement, setMoyenPaiement] = useState('carte');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('✅ Paiement simulé');
    router.push('/paiement/confirmation');
  };

  return (
    <main className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-2 gap-10">
      {/* Colonne gauche */}
      <div>
        <h1 className="text-3xl font-bold text-[#7d1524] mb-2">Paiement</h1>

        <div className="mb-6">
          <h2 className="text-2xl font-bold mb-1">
            Abonnement Pro Artihub impulsion
          </h2>
          <p>0,00 € pour 1 mois</p>
          <p className="text-[#7d1524] font-bold">
            À partir du 20 juin 2025 : 49€/mois
          </p>
          <p className="text-[#444] mt-3">
            Nous vous enverrons un rappel 7 jours avant le prélèvement.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 border rounded-xl p-6">
          <h3 className="text-xl font-bold mb-4">Mode de paiement</h3>

          <label className="flex items-center gap-2 mb-2">
            <input
              type="radio"
              name="moyen"
              value="carte"
              checked={moyenPaiement === 'carte'}
              onChange={() => setMoyenPaiement('carte')}
            />
            <span className="font-semibold">Carte de crédit ou de débit</span>
            <div className="flex items-center gap-2 ml-3">
              <Image src="/servicespage/visa.svg" alt="visa" width={30} height={20} />
              <Image src="/servicespage/mastercard.svg" alt="mastercard" width={30} height={20} />
              <Image src="/servicespage/amex.svg" alt="amex" width={30} height={20} />
            </div>
          </label>

          {moyenPaiement === 'carte' && (
            <>
              <input
                type="text"
                placeholder="Numéro de carte"
                className="w-full border border-gray-300 rounded-lg px-4 py-3"
              />
              <div className="flex gap-3">
                <input
                  type="text"
                  placeholder="MM/AA"
                  className="w-1/2 border border-gray-300 rounded-lg px-4 py-3"
                />
                <input
                  type="text"
                  placeholder="CVC"
                  className="w-1/2 border border-gray-300 rounded-lg px-4 py-3"
                />
              </div>
            </>
          )}

          <label className="flex items-center gap-2 mt-4">
            <input
              type="radio"
              name="moyen"
              value="paypal"
              checked={moyenPaiement === 'paypal'}
              onChange={() => setMoyenPaiement('paypal')}
            />
            <span className="font-semibold">PayPal</span>
          </label>
          <p className="text-sm text-gray-600 ml-6">
            Nous vous redirigerons vers PayPal pour finaliser votre achat.
          </p>
        </form>
      </div>

      {/* Colonne droite : Résumé + Boutons */}
      <div className="bg-white border rounded-xl p-6 shadow-md flex flex-col justify-between">
        <div className="flex justify-between items-start mb-4">
          <h2 className="text-lg font-bold">Résumé</h2>
          <a href="/nos-services" className="text-sm text-[#7d1524] underline font-semibold">
            Changer l’abonnement
          </a>
        </div>

        <div className="text-sm mb-3">
          <div className="flex justify-between mb-1">
            <span>Abonnement Pro Impulsion</span>
            <span>0,00 €</span>
          </div>
          <p className="text-gray-600">
            Aujourd'hui : 1 mois pour 0,00 €<br />
            Dès le 20 juin 2025 : 49€/mois
          </p>
        </div>

        <div className="flex justify-between font-bold text-lg my-4">
          <span>Total actuel</span>
          <span>0,00 €</span>
        </div>

        <div className="flex justify-between items-center mt-6">
          <button
            type="button"
            onClick={() => router.back()}
            className="text-[#7d1524] font-bold hover:underline"
          >
            Retour
          </button>
          <button
            type="submit"
            onClick={handleSubmit}
            className="bg-[#7d1524] text-white font-bold px-8 py-3 rounded-full hover:bg-[#5d0e19] transition"
          >
            Valider
          </button>
        </div>
      </div>
    </main>
  );
}
