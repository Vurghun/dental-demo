import { Calendar } from "lucide-react";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-[#0f172a] px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32"
    >
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
          Modern Dentistry in the Heart of Ankara
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-white/85 sm:text-xl">
          Expert care from English-speaking dentists. We combine advanced
          technology with a warm, welcoming environment so you feel at home
          while achieving your best smile.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#contact"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-base font-semibold text-[#0f172a] shadow-lg transition hover:bg-white/90 sm:w-auto"
          >
            <Calendar className="h-5 w-5" aria-hidden />
            Book Your Visit
          </a>
          <a
            href="#services"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border-2 border-white/60 bg-transparent px-6 py-3.5 text-base font-semibold text-white transition hover:bg-white/10 sm:w-auto"
          >
            Our Services
          </a>
        </div>
      </div>
    </section>
  );
}
