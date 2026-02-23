import { Layers, Smile, PhoneCall } from "lucide-react";
import { ServiceCard } from "@/components/ui/ServiceCard";

export function ServicesSection() {
  return (
    <section
      id="services"
      className="bg-white px-4 py-16 sm:px-6 sm:py-24 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-[#0f172a] sm:text-3xl">
            Our Services
          </h2>
          <p className="mt-2 text-[#0f172a]/70 sm:text-lg">
            Comprehensive care for every dental need
          </p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <ServiceCard
            icon={<Layers className="h-8 w-8" />}
            title="Dental Implants"
            description="Restore your smile with durable, natural-looking implants. Our specialists use the latest techniques for lasting results and comfort."
          />
          <ServiceCard
            icon={<Smile className="h-8 w-8" />}
            title="Hollywood Smile"
            description="Transform your smile with veneers and aesthetic treatments. Custom-designed for a confident, celebrity-ready look."
          />
          <ServiceCard
            icon={<PhoneCall className="h-8 w-8" />}
            title="Emergency Care"
            description="Dental emergencies don't wait. We offer same-day appointments and urgent care when you need it most."
          />
        </div>
      </div>
    </section>
  );
}
