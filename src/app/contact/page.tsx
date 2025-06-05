"use client";
import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({
    nom: "",
    prenom: "",
    email: "",
    tel: "",
    message: "",
  });
  const [question, setQuestion] = useState("");

  const faqs = [
    {
      question: "Puis-je publier un projet urgent et recevoir des réponses rapidement ?",
      answer: "Oui, vous pouvez publier une mission urgente via notre module 'Mission Express'. Les artisans proches recevront une notification immédiate."
    },
    {
      question: "Dois-je payer pour publier un projet sur ArtiHub ?",
      answer: "Non, la publication d’un projet est gratuite. Seules certaines options de mise en avant sont payantes."
    },
    {
      question: "Comment puis-je suivre les réponses des artisans à mon projet ?",
      answer: "Depuis votre espace client, vous verrez toutes les propositions reçues en temps réel et pourrez échanger avec les artisans."
    },
    {
      question: "Comment puis-je évaluer les artisans avant de les choisir ?",
      answer: "Chaque artisan dispose d’un profil avec ses avis clients, ses réalisations, ses labels et ses garanties."
    },
    {
      question: "Comment fonctionne le paiement des travaux ?",
      answer: "Le paiement se fait directement entre vous et l’artisan. ArtiHub peut fournir un cadre sécurisé via un tiers de confiance."
    }
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: envoyer à l’API
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <div className="w-full max-w-screen-xl mx-auto flex flex-col items-center pt-12 pb-16 px-4 md:px-12">
        <h1 className="text-4xl font-bold text-[#7d1524] text-center mb-12">Contactez-nous</h1>

        <form
          onSubmit={handleSubmit}
          className="bg-white border border-[#E0E0E0] rounded-2xl shadow-md p-10 w-full max-w-2xl flex flex-col gap-6 mb-12"
        >
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1 flex flex-col gap-2">
              <label className="text-base font-semibold text-[#7d1524]" htmlFor="nom">Nom</label>
              <input
                id="nom"
                name="nom"
                type="text"
                placeholder="Saisir votre nom"
                value={form.nom}
                onChange={handleChange}
                className="border border-[#7d1524] rounded-full px-5 py-3 text-base outline-none focus:ring-2 focus:ring-[#7d1524] transition"
                required
              />
            </div>
            <div className="flex-1 flex flex-col gap-2">
              <label className="text-base font-semibold text-[#7d1524]" htmlFor="prenom">Prénom</label>
              <input
                id="prenom"
                name="prenom"
                type="text"
                placeholder="Saisir votre prénom"
                value={form.prenom}
                onChange={handleChange}
                className="border border-[#7d1524] rounded-full px-5 py-3 text-base outline-none focus:ring-2 focus:ring-[#7d1524] transition"
                required
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-base font-semibold text-[#7d1524]" htmlFor="email">Adresse e-mail</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Saisir une adresse e-mail"
              value={form.email}
              onChange={handleChange}
              className="border border-[#7d1524] rounded-full px-5 py-3 text-base outline-none focus:ring-2 focus:ring-[#7d1524] transition"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-base font-semibold text-[#7d1524]" htmlFor="tel">Numéro de téléphone</label>
            <div className="flex flex-col sm:flex-row gap-3 w-full">
              <span className="flex items-center px-5 py-3 border border-[#7d1524] rounded-full bg-white text-[#7d1524] text-base select-none">+33</span>
              <input
                id="tel"
                name="tel"
                type="tel"
                placeholder="Saisir un n° de téléphone"
                value={form.tel}
                onChange={handleChange}
                className="flex-1 border border-[#7d1524] rounded-full px-5 py-3 text-base outline-none focus:ring-2 focus:ring-[#7d1524] transition"
                required
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-base font-semibold text-[#7d1524]" htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              placeholder="Écrire un message"
              value={form.message}
              onChange={handleChange}
              className="border border-[#7d1524] rounded-2xl px-5 py-3 text-base outline-none focus:ring-2 focus:ring-[#7d1524] transition resize-none"
              required
            />
          </div>
          <div className="flex justify-end mt-4">
            <button
              type="submit"
              className="bg-[#7d1524] text-white rounded-full px-8 py-3 text-base font-semibold shadow hover:bg-[#5d0e19] transition"
            >
              Envoyer
            </button>
          </div>
        </form>

        <div className="flex flex-col md:flex-row w-full gap-10 justify-center items-start">
          <div className="flex-1 flex flex-col gap-4 max-w-2xl w-full">
            {faqs.map((faq, idx) => (
              <details
                key={idx}
                className="group bg-white border border-[#E0E0E0] rounded-2xl px-6 py-4 cursor-pointer transition-shadow"
              >
                <summary className="list-none text-lg font-semibold text-[#7d1524] flex items-center justify-between cursor-pointer">
                  {faq.question}
                  <span className="ml-2 min-w-[28px] h-7 flex items-center justify-center rounded-full bg-[#7d1524] text-white text-lg font-bold leading-none">
  +
</span>

                </summary>
                <div className="mt-3 text-[#333] text-base leading-relaxed">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>

          <div className="flex-1 flex flex-col items-center max-w-md w-full">
            <div className="mt-2 rounded-2xl px-6 py-8 -md flex flex-col items-center">
              <img
                src="/contact/Group 1000001532.png"
                alt="Une question"
                className="w-[200px] h-[200px] mb-4"
              />
              <div className="font-bold text-xl text-[#7d1524] mb-2 text-center">Une question ?</div>
              <div className="text-base text-[#7d1524] opacity-80 mb-4 text-center">
                Vous pouvez poser toutes les questions que vous souhaitez pour obtenir un retour.
              </div>
              <div className="w-full flex items-center border border-[#7d1524] rounded-full bg-white px-4 py-3">
                <input
                  type="text"
                  placeholder="Saisissez votre question ici"
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  className="flex-1 text-[#7d1524] bg-transparent border-none outline-none text-base"
                />
                {question && (
                  <button
                    type="button"
                    className="ml-3 text-[#7d1524] text-xl font-bold opacity-70 hover:opacity-100 transition"
                    onClick={() => setQuestion("")}
                  >
                    ×
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
