
import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import SportsCoverage from "@/components/SportsCoverage";
import SubscriptionPlans from "@/components/SubscriptionPlans";
import PreviousResults from "@/components/PreviousResults";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow">
        <HeroSection />
        <SportsCoverage />
        <SubscriptionPlans />
        <PreviousResults />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
