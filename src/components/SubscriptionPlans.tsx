
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

const SubscriptionPlans = () => {
  const plans = [
    {
      name: "Weekly All-in-One Pass",
      price: "$39.99",
      period: "per week",
      description: "Get access to all our premium picks for 7 days",
      features: [
        "All Sports Covered",
        "Daily Picks & Analysis",
        "Email & SMS Notifications",
        "Member-Only Content",
        "24/7 Customer Support",
      ],
      popular: false,
    },
    {
      name: "Monthly All-in-One Pass",
      price: "$99.99",
      period: "per month",
      description: "Our best value - save over 40% compared to weekly",
      features: [
        "All Sports Covered",
        "Daily Picks & Analysis",
        "Email & SMS Notifications",
        "Member-Only Content",
        "24/7 Customer Support",
        "Exclusive VIP Picks",
        "Monthly Betting Strategy Call",
      ],
      popular: true,
    },
  ];

  return (
    <section className="py-12 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
            Choose Your Winning Plan
          </h2>
          <p className="text-lg text-brand-gray max-w-2xl mx-auto">
            Select the package that fits your needs and start winning today
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`bg-white rounded-xl shadow-md overflow-hidden border ${
                plan.popular ? "border-brand-gold" : "border-gray-200"
              }`}
            >
              {plan.popular && (
                <div className="bg-brand-gold text-white text-center py-2 font-medium">
                  BEST VALUE
                </div>
              )}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-brand-navy mb-2">{plan.name}</h3>
                <p className="text-brand-gray mb-6">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-brand-navy">{plan.price}</span>
                  <span className="text-brand-gray">{" "}{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-brand-gold mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-brand-gray">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  className={`w-full py-6 ${
                    plan.popular 
                      ? "bg-brand-gold hover:bg-amber-500 text-brand-navy" 
                      : "bg-brand-navy hover:bg-slate-800 text-white"
                  }`}
                >
                  Get Started
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SubscriptionPlans;
