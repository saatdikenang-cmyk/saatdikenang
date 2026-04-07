import { MessageCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const WhatsAppButton = () => {
  const { lang } = useLanguage();
  const message = lang === 'en'
    ? 'Hi Saat Dikenang! I\'m interested in your photography/videography services. Could you share more details?'
    : 'Halo Saat Dikenang! Saya tertarik dengan layanan fotografi/videografi Anda. Bisa berbagi detail lebih lanjut?';

  const url = `https://wa.me/6285173032882?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-accent text-accent-foreground p-4 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={24} />
    </a>
  );
};

export default WhatsAppButton;
