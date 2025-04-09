
import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import SportsCoverage from "@/components/SportsCoverage";
import SubscriptionPlans from "@/components/SubscriptionPlans";
import PreviousResults from "@/components/PreviousResults";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow">
        <HeroSection />
        <SportsCoverage />
        <SubscriptionPlans />
        <PreviousResults />
        
        {/* Dashboard Access Button */}
        <div className="bg-brand-navy py-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Already a Member?
          </h2>
          <p className="text-brand-light mb-6 max-w-2xl mx-auto px-4">
            Access your exclusive picks and predictions in the members dashboard.
          </p>
          <Link to="/dashboard">
            <Button size="lg" className="bg-brand-gold hover:bg-brand-gold/90 text-brand-navy font-bold">
              Go to Dashboard
            </Button>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
