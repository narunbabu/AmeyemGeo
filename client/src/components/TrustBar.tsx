export default function TrustBar() {
  const clients = [
    { name: "Cairn India", industry: "Oil & Gas" },
    { name: "Borewell Engineering", industry: "Rock Drill Industries" },
    { name: "EyeCube Solutions", industry: "Technology" },
    { name: "Bhugarbho", industry: "Exploration" },
    { name: "R2V Tech", industry: "Data Solutions" }
  ];

  return (
    <section className="bg-[var(--light-gray)] py-12 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h3 className="text-lg font-medium text-[var(--medium-gray)] mb-2">
            Trusted by Industry Leaders
          </h3>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center opacity-60 hover:opacity-100 transition-opacity duration-300">
          {clients.map((client, index) => (
            <div key={index} className="text-center">
              <div className="text-xl font-bold text-[var(--ocean-blue)]">{client.name}</div>
              <div className="text-sm text-[var(--medium-gray)]">{client.industry}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
