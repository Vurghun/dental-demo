type ServiceCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

export function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <article className="flex flex-col rounded-2xl border border-[#0f172a]/10 bg-white p-6 shadow-sm transition hover:shadow-md">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0f172a] text-white">
        {icon}
      </div>
      <h3 className="mt-4 text-lg font-semibold text-[#0f172a]">{title}</h3>
      <p className="mt-2 flex-1 text-[#0f172a]/75">{description}</p>
    </article>
  );
}
