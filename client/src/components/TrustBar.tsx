export default function TrustBar() {
  const clients = [
    { 
      name: "Cairn India", 
      industry: "Oil & Gas",
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=100&fit=crop&crop=center" // Cairn logo placeholder
    },
    { 
      name: "Borewell Engineering", 
      industry: "Rock Drill Industries",
      logo: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=200&h=100&fit=crop&crop=center" // BERD logo placeholder
    },
    { 
      name: "EyeCube Solutions", 
      industry: "Technology",
      logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop&crop=center" // EyeCube logo placeholder
    },
    { 
      name: "Bhugarbho Geo Sciences", 
      industry: "Exploration",
      logo: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=200&h=100&fit=crop&crop=center" // Bhugarbho logo placeholder
    },
    { 
      name: "R2V Technologies", 
      industry: "Data Solutions",
      logo: "https://images.unsplash.com/photo-1518152006812-edab29b069ac?w=200&h=100&fit=crop&crop=center" // R2V logo placeholder
    },
    { 
      name: "Selan Exploration", 
      industry: "Oil & Gas",
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=100&fit=crop&crop=center" // Selan logo placeholder
    }
  ];

  return (
    <section className="bg-[var(--light-gray)] py-12 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h3 className="text-lg font-medium text-[var(--medium-gray)] mb-2">
            Trusted by Industry Leaders
          </h3>
          <p className="text-sm text-[var(--medium-gray)]">
            From major Oil & Gas companies to specialized technology firms
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {clients.map((client, index) => (
            <div key={index} className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300 mb-3">
                <img 
                  src={client.logo} 
                  alt={`${client.name} logo`}
                  className="w-full h-12 object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <div className="text-sm font-medium text-[var(--ocean-blue)]">{client.name}</div>
              <div className="text-xs text-[var(--medium-gray)]">{client.industry}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
