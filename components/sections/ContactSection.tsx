import { Calendar } from "lucide-react";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="bg-[#0f172a] px-4 py-16 sm:px-6 sm:py-24 lg:px-8"
    >
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-2xl font-bold text-white sm:text-3xl">
          Ready to Smile?
        </h2>
        <p className="mt-3 text-white/85">
          Book your appointment today or reach us on WhatsApp for quick answers.
        </p>
        <a
          href="#hero"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-base font-semibold text-[#0f172a] transition hover:bg-white/90"
        >
          <Calendar className="h-5 w-5" /> Book Appointment
        </a>
      </div>
    </section>
  );
}
