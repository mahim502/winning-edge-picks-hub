
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import SubscriptionPlans from "@/components/SubscriptionPlans";
import { CheckCircle2, ShieldCheck, Clock, Trophy } from "lucide-react";

const Plans = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-brand-navy text-white py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Membership Plans</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the perfect plan to start winning with our expert picks
            </p>
          </div>
        </div>

        {/* Plans */}
        <SubscriptionPlans />

        {/* Features */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-brand-navy mb-4">What's Included</h2>
              <p className="text-lg text-brand-gray max-w-2xl mx-auto">
                All of our membership plans include these premium features
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 flex">
                <div className="mr-4 mt-1">
                  <CheckCircle2 className="h-6 w-6 text-brand-gold" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-brand-navy mb-2">All Sports Coverage</h3>
                  <p className="text-brand-gray">
                    Get access to our expert picks for NBA, NFL, MLB, NHL, and College Basketball during their respective seasons.
                  </p>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 flex">
                <div className="mr-4 mt-1">
                  <CheckCircle2 className="h-6 w-6 text-brand-gold" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-brand-navy mb-2">Detailed Analysis</h3>
                  <p className="text-brand-gray">
                    Each pick comes with thorough analysis explaining the reasoning, key factors, and optimal bet sizing.
                  </p>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 flex">
                <div className="mr-4 mt-1">
                  <CheckCircle2 className="h-6 w-6 text-brand-gold" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-brand-navy mb-2">Early Access</h3>
                  <p className="text-brand-gray">
                    Get picks hours before game time, giving you plenty of time to place your bets at the best available odds.
                  </p>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 flex">
                <div className="mr-4 mt-1">
                  <CheckCircle2 className="h-6 w-6 text-brand-gold" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-brand-navy mb-2">Email & SMS Alerts</h3>
                  <p className="text-brand-gray">
                    Receive instant notifications when new picks are available, ensuring you never miss a valuable opportunity.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Trust Us */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-brand-navy mb-4">Why Trust Our Picks</h2>
              <p className="text-lg text-brand-gray max-w-2xl mx-auto">
                Join thousands of satisfied members who trust our expert analysis
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-sm text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-gold/10 text-brand-gold mb-6">
                  <Trophy className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-brand-navy mb-3">Proven Track Record</h3>
                <p className="text-brand-gray">
                  Over 60% win rate documented across all sports since our founding, with complete transparency.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-gold/10 text-brand-gold mb-6">
                  <ShieldCheck className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-brand-navy mb-3">Satisfaction Guarantee</h3>
                <p className="text-brand-gray">
                  We stand behind our picks with a 7-day money-back guarantee for all new members.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-gold/10 text-brand-gold mb-6">
                  <Clock className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-brand-navy mb-3">No Long-Term Commitment</h3>
                <p className="text-brand-gray">
                  Flexible subscription options with the ability to cancel anytime - we earn your business daily.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Plans;
