
import { Basketball, Football, Baseball, Snowflake } from "lucide-react";

const SportsCoverage = () => {
  const sports = [
    {
      name: "NBA",
      icon: <Basketball className="h-10 w-10 text-brand-gold mb-4" />,
      description: "Professional basketball picks with detailed analysis and insights.",
    },
    {
      name: "NFL",
      icon: <Football className="h-10 w-10 text-brand-gold mb-4" />,
      description: "Expert football predictions for all regular and post-season games.",
    },
    {
      name: "MLB",
      icon: <Baseball className="h-10 w-10 text-brand-gold mb-4" />,
      description: "Baseball betting advice from seasoned industry professionals.",
    },
    {
      name: "NHL",
      icon: <Snowflake className="h-10 w-10 text-brand-gold mb-4" />,
      description: "Hockey picks that give you the edge on the ice.",
    },
    {
      name: "College Basketball",
      icon: <Basketball className="h-10 w-10 text-brand-gold mb-4" />,
      description: "Comprehensive coverage of all major college basketball games.",
    },
  ];

  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
            Sports We Cover
          </h2>
          <p className="text-lg text-brand-gray max-w-2xl mx-auto">
            Our expert handicappers provide premium picks across all major sports leagues.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sports.map((sport) => (
            <div 
              key={sport.name} 
              className="bg-gray-50 p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow text-center"
            >
              <div className="flex justify-center">{sport.icon}</div>
              <h3 className="text-xl font-semibold text-brand-navy mb-2">{sport.name}</h3>
              <p className="text-brand-gray">{sport.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SportsCoverage;
