type ServiceCategoryProps = {
  title: string;
  services: readonly string[];
};

export function ServiceCategory({ title, services }: ServiceCategoryProps) {
  return (
    <section>
      <h2 className="mb-6 text-2xl font-semibold">{title}</h2>
      
      <ul className="columns-1 gap-x-8 text-muted-foreground sm:columns-2 lg:columns-3">
        {services.map((service) => (
          <li key={service} className="mb-2 break-inside-avoid">
            {service}
          </li>
        ))}
      </ul>
    </section>
  );
}