import { MessageCircle } from "lucide-react";
import { WHATSAPP_NUMBER } from "@/lib/constants";

export function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition hover:scale-105 hover:bg-[#20bd5a] focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="h-7 w-7" aria-hidden />
    </a>
  );
}
