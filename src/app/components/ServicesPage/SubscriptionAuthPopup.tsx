// src/app/components/ServicesPage/SubscriptionAuthPopup.tsx

type Props = {
    onClose: () => void;
  };
  
  const SubscriptionAuthPopup = ({ onClose }: Props) => (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
      <div className="bg-[#faf7f7] border-4 border-[#7d1524] rounded-2xl p-8 max-w-lg w-full shadow-lg relative">
        <ul className="mb-6">
          <li>
            Ces abonnements sont réservés aux artisans inscrits.
            Merci de vous connecter ou de créer un compte Artisan pour continuer.
          </li>
        </ul>
        <div className="flex justify-between items-center mt-4">
          <button className="text-[#7d1524] font-semibold" onClick={onClose}>
            Retour
          </button>
          <button className="bg-[#7d1524] text-white font-bold px-6 py-2 rounded-full shadow-md hover:bg-[#5d0e19] transition">
            Continuer
          </button>
        </div>
      </div>
    </div>
  );
  
  export default SubscriptionAuthPopup;
  