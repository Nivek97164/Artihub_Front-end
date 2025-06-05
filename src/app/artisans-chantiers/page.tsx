'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import {
  MapPinIcon,
  WrenchIcon,
  FunnelIcon,
  MagnifyingGlassIcon,
  CalendarIcon
} from '@heroicons/react/24/solid';

export default function ArtisansEtChantiers() {
  const [tab, setTab] = useState<'artisan' | 'chantier'>('artisan');
  const [metiers, setMetiers] = useState<string[]>([]);
  const [chantiers, setChantiers] = useState<
    {
      id: number;
      titre: string;
      description: string;
      date: string;
      user: {
        prenom: string;
        nom: string;
        photoUrl: string;
      };
    }[]
  >([]);
  const [chantierSelectionne, setChantierSelectionne] = useState<typeof chantiers[0] | null>(null);
  const [search, setSearch] = useState('');
  const [location, setLocation] = useState('');
  const [expressOnly, setExpressOnly] = useState(false);
  const METIERS_PAR_PAGE = 10;
  const [pageMetiers, setPageMetiers] = useState(0);

  const totalPages = Math.ceil(metiers.length / METIERS_PAR_PAGE);
  const metiersAffiches = metiers.slice(
    pageMetiers * METIERS_PAR_PAGE,
    (pageMetiers + 1) * METIERS_PAR_PAGE
  );

  useEffect(() => {
    setMetiers([
      'menuisier', 'serrurier', 'macon', 'peintre', 'terrassier', 'charpentier',
      'chauffagiste', 'cheministe', 'couvreur', 'ebeniste', 'electricien', 'demenageur',
      'carreleur', 'desinsectiseur', 'ascensoriste', 'bricoleur', 'elagueur', 'pisciniste',
      'entreprise-iso', 'entreprise-dom', 'entreprise-net', 'vitrier', 'entreprise-rev', 'entreprise-sec',
      'entreprise-bat', 'etancheur', 'clim', 'facadier', 'metallier', 'frigoriste',
      'plombier', 'maitre-doeuvre', 'marbrier', 'ramoneur', 'plaquiste', 'miroitier',
      'alarme', 'vid-surveillance', 'poele-bois', 'pompe-chaleur', 'jardinier'
    ]);

    setChantiers([
      {
        id: 1,
        titre: 'Rénovation complète d’une salle de bain',
        description: `Je souhaite rénover entièrement ma salle de bain. Les travaux incluent :
- Démolition et enlèvement des installations actuelles.
- Installation d’une douche à l’italienne, d’un lavabo double et d’un WC suspendu.
- Pose de carrelage au sol et sur les murs.
- Reprise des installations de plomberie et d’électricité si nécessaire.`,
        date: '14 Juillet',
        user: {
          prenom: 'Marie',
          nom: 'Dupont',
          photoUrl: '/placeholder-user.jpg'
        }
      },
      {
        id: 2,
        titre: 'Pose de carrelage – Marseille',
        description: 'Recherche artisan pour poser du carrelage dans cuisine.',
        date: 'Dans les 2 semaines',
        user: {
          prenom: 'David',
          nom: 'Durand',
          photoUrl: '/placeholder-user.jpg'
        }
      },
    ]);
  }, []);

  const slugify = (str: string) =>
    str
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9\s-]/g, "")
      .trim()
      .replace(/\s+/g, "-");

  return (
    <div className="py-10">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-left text-[#3B0A0A] mb-2">
          Trouvez l’artisan ou le projet qui vous correspond !
        </h1>
        <p className="text-left text-gray-700 mb-6 text-sm">
          Notre moteur de recherche avancé connecte artisans et particuliers pour des collaborations réussies.
        </p>

        {/* Onglets */}
        <div className="flex space-x-0">
          <button
            className={`px-6 py-3 font-semibold border border-[#FFD2C7] border-b-0 rounded-t-xl ${
              tab === 'artisan' ? 'bg-[#FFD2C7] text-[#3B0A0A]' : 'bg-white text-gray-500'
            }`}
            onClick={() => {
              setTab('artisan');
              setChantierSelectionne(null);
            }}
          >
            Trouver un artisan
          </button>
          <button
            className={`px-6 py-3 font-semibold border border-[#FFD2C7] border-b-0 rounded-t-xl ${
              tab === 'chantier' ? 'bg-[#FFD2C7] text-[#3B0A0A]' : 'bg-white text-gray-500'
            }`}
            onClick={() => {
              setTab('chantier');
              setChantierSelectionne(null);
            }}
          >
            Trouver un chantier
          </button>
        </div>

        {/* Barre de recherche */}
        <div className="bg-[#FFD2C7] border border-[#FFD2C7] rounded-b-xl px-6 py-6 mb-10 -mt-1 relative z-10">
          <div className="flex flex-col gap-4">
            <div className="flex items-center bg-white border border-[#690B22] rounded-xl w-full px-4 py-3 text-sm">
              <WrenchIcon className="w-5 h-5 text-[#690B22] mr-2" />
              <input
                type="text"
                placeholder="Saisissez un métier ou une spécialité"
                className="w-full bg-white outline-none"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <div className="flex items-center bg-white border border-[#690B22] rounded-xl w-full px-4 py-3 text-sm">
              <MapPinIcon className="w-5 h-5 text-[#690B22] mr-2" />
              <input
                type="text"
                placeholder="Emplacement, ville, code postale"
                className="w-full bg-white outline-none"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
            <div className="flex items-center justify-between">
              <button className="flex items-center text-[#7B0F19] font-semibold text-sm">
                <FunnelIcon className="w-5 h-5 text-[#7B0F19] mr-1" />
                Filtrer
              </button>
              <button className="flex items-center bg-[#7B0F19] text-white font-bold px-4 py-2 rounded-full text-sm">
                <MagnifyingGlassIcon className="w-5 h-5 text-white mr-2" />
                Rechercher
              </button>
            </div>
            {tab === 'chantier' && (
              <div className="mt-2 flex items-center gap-2">
                <label className="flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only"
                    checked={expressOnly}
                    onChange={() => setExpressOnly(!expressOnly)}
                  />
                  <div className={`w-10 h-6 flex items-center rounded-full p-1 transition-all duration-300 ${
                    expressOnly ? 'bg-[#7B0F19] justify-end' : 'bg-white border border-[#7B0F19] justify-start'
                  }`}>
                    <div className="bg-white w-4 h-4 rounded-full shadow-md"></div>
                  </div>
                  <span className="ml-2 font-semibold text-sm">Afficher uniquement les missions express</span>
                </label>
              </div>
            )}
          </div>
        </div>

        {/* Métiers */}
        {tab === 'artisan' && (
          <>
            <h2 className="text-xl font-semibold mb-3">Tous les métiers</h2>
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 mb-6">
              {metiersAffiches.map((m) => (
                <div
                  key={m}
                  className="bg-[#F6DEDC] h-24 flex items-center gap-4 px-4 rounded-2xl shadow-sm hover:bg-[#f2c4c0]"
                >
                  <Image
                    src={`/artisans-chantiers/${slugify(m)}.png`}
                    alt={m}
                    width={32}
                    height={32}
                    className="object-contain"
                  />
                  <span className="text-sm font-semibold text-[#690B22]">
                    {m.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                  </span>
                </div>
              ))}
            </div>
            <div className="flex justify-center gap-4">
              <button
                onClick={() => setPageMetiers((prev) => Math.max(0, prev - 1))}
                disabled={pageMetiers === 0}
                className="bg-[#FFD2C7] hover:bg-[#f4b5ac] p-2 rounded-full shadow-md disabled:opacity-50"
              >
                ←
              </button>
              <button
                onClick={() => setPageMetiers((prev) => Math.min(totalPages - 1, prev + 1))}
                disabled={pageMetiers >= totalPages - 1}
                className="bg-[#FFD2C7] hover:bg-[#f4b5ac] p-2 rounded-full shadow-md disabled:opacity-50"
              >
                →
              </button>
            </div>
          </>
        )}

        {/* Liste des chantiers */}
        {tab === 'chantier' && !chantierSelectionne && (
          <>
            <h2 className="text-xl font-semibold mb-3">Tous les chantiers</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {chantiers.map((c) => (
                <div key={c.id} className="bg-white border border-[#FADCD9] rounded-md p-4 shadow-sm">
                  <div className="flex items-center gap-3 mb-2">
                    <Image
                      src={c.user.photoUrl}
                      alt={`${c.user.prenom} ${c.user.nom}`}
                      width={36}
                      height={36}
                      className="rounded-full object-cover"
                    />
                    <p className="text-sm text-gray-700 font-medium">
                      Posté par {c.user.prenom} {c.user.nom}
                    </p>
                  </div>
                  <h3 className="font-bold text-lg mb-1">{c.titre}</h3>
                  <p className="text-sm mb-2 text-gray-800">{c.description}</p>
                  <div className="flex items-center text-sm text-[#7B0F19] font-medium mb-2">
                    <CalendarIcon className="w-4 h-4 mr-2" />
                    {c.date}
                  </div>
                  <button
                    onClick={() => setChantierSelectionne(c)}
                    className="mt-2 text-sm font-semibold text-[#7B0F19] hover:underline"
                  >
                    En savoir plus
                  </button>
                </div>
              ))}
            </div>
          </>
        )}

        {/* Fiche "En savoir plus" */}
        {chantierSelectionne && (
          <div className="mt-10 max-w-4xl mx-auto">
            <button
              onClick={() => setChantierSelectionne(null)}
              className="text-sm text-[#7B0F19] hover:underline mb-4"
            >
              ← Retour à la liste des chantiers
            </button>
            <h1 className="text-xl font-bold mb-2">{chantierSelectionne.titre} <span className="ml-1">🛁</span></h1>
            <div className="bg-[#F6F1F0] rounded-xl p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <Image
                  src={chantierSelectionne.user.photoUrl}
                  alt={chantierSelectionne.user.prenom}
                  width={36}
                  height={36}
                  className="rounded-full object-cover"
                />
                <p className="text-sm font-medium text-gray-800">
                  {chantierSelectionne.user.prenom} {chantierSelectionne.user.nom}
                </p>
              </div>
              <div className="text-sm text-gray-800 leading-relaxed mb-4 whitespace-pre-line">
                {chantierSelectionne.description}
              </div>
              <div className="text-sm text-gray-800 space-y-2 mb-4">
                <p className="flex items-center">
                  <MapPinIcon className="w-4 h-4 text-[#7B0F19] mr-2" />
                  <span><strong>Localisation :</strong> (à intégrer via API)</span>
                </p>
                <p><strong>Date de début des travaux souhaitée :</strong> {chantierSelectionne.date}</p>
                <p><strong>Type de projet :</strong> Standard</p>
                <p><strong>Photos du chantier :</strong> aucune photo</p>
              </div>
              <button className="bg-[#7B0F19] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#5a0914]">
                Contacter
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
