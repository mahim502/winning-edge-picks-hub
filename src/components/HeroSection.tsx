
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="bg-gradient-to-b from-brand-navy to-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Expert Sports Picks from Proven Winners
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8">
            Gain the winning edge with our premium picks across NBA, NFL, MLB, NHL, and College Basketball. 
            Our expert analysis delivers consistent results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="bg-brand-gold hover:bg-amber-500 text-brand-navy font-semibold text-base px-6 py-6"
              asChild
            >
              <Link to="/plans">
                Get Premium Picks <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button 
              variant="outline" 
              className="border-white text-white hover:bg-white/10 font-semibold text-base px-6 py-6"
              asChild
            >
              <Link to="/history">
                View Our Track Record
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
