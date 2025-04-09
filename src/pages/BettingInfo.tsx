
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { HelpCircle, BookOpen, BarChart2, TrendingUp, ArrowRight } from "lucide-react";

const BettingInfo = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-brand-navy text-white py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Betting Information</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Learn how to maximize your sports betting success with our expert guides and resources.
            </p>
          </div>
        </div>

        {/* Betting Guides */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-brand-navy mb-4">Betting Guides</h2>
              <p className="text-lg text-brand-gray max-w-2xl mx-auto">
                Essential resources for both beginners and experienced bettors
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Sports Betting Basics",
                  description: "Learn the fundamentals of sports betting, including odds formats, bet types, and bankroll management.",
                  icon: <BookOpen className="h-8 w-8 mb-4 text-brand-gold" />,
                },
                {
                  title: "Advanced Handicapping",
                  description: "Take your betting to the next level with advanced statistical analysis and prediction models.",
                  icon: <BarChart2 className="h-8 w-8 mb-4 text-brand-gold" />,
                },
                {
                  title: "Value Betting Strategy",
                  description: "Learn how to identify value in betting lines and maximize your long-term profitability.",
                  icon: <TrendingUp className="h-8 w-8 mb-4 text-brand-gold" />,
                },
              ].map((guide, index) => (
                <Card key={index} className="border-gray-200 shadow-sm h-full">
                  <CardHeader className="text-center">
                    <div className="flex justify-center">{guide.icon}</div>
                    <CardTitle className="text-xl text-brand-navy">{guide.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-brand-gray text-base">
                      {guide.description}
                    </CardDescription>
                    <Button 
                      variant="link" 
                      className="mt-4 p-0 text-brand-gold hover:text-amber-600 font-medium"
                    >
                      Read More <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* How Our Picks Work */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-brand-navy mb-6">How Our Picks Work</h2>
                <p className="text-brand-gray mb-4">
                  At Winning Edge Picks, we combine advanced statistical models, insider information, and experienced handicapping to identify the most valuable betting opportunities.
                </p>
                <p className="text-brand-gray mb-4">
                  Our team of experts analyzes countless data points, injury reports, matchup histories, and situational factors to provide you with the highest probability selections.
                </p>
                <p className="text-brand-gray mb-6">
                  We don't just tell you who to bet on - we explain why, providing detailed analysis with each pick so you understand the reasoning behind our selections.
                </p>
                <Button 
                  className="bg-brand-gold hover:bg-amber-500 text-brand-navy"
                  asChild
                >
                  <Link to="/plans">
                    View Our Plans
                  </Link>
                </Button>
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1634128222187-17c2c189dce3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" 
                  alt="Sports analytics dashboard" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-gold/10 text-brand-gold mb-6">
                <HelpCircle className="h-8 w-8" />
              </div>
              <h2 className="text-3xl font-bold text-brand-navy mb-4">Frequently Asked Questions</h2>
              <p className="text-lg text-brand-gray max-w-2xl mx-auto">
                Common questions about our service and sports betting
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                {[
                  {
                    question: "How are your picks delivered?",
                    answer: "Our picks are delivered through our member portal, email, and SMS alerts. You'll receive detailed analysis and betting recommendations with plenty of time before game start."
                  },
                  {
                    question: "What is your track record?",
                    answer: "We maintain a documented 58-62% win rate across all sports. All of our past picks and results are available in the Previous History section, showing our complete record with no cherry-picking."
                  },
                  {
                    question: "How many picks do you provide?",
                    answer: "We typically provide 15-25 premium picks per week, depending on the sports seasons. Quality always comes before quantity - we only recommend bets with genuine value."
                  },
                  {
                    question: "Do you offer refunds?",
                    answer: "We stand behind our service with a 7-day satisfaction guarantee for new members. If you're not satisfied with our picks during your first week, we'll refund your subscription."
                  },
                  {
                    question: "Can I cancel my subscription anytime?",
                    answer: "Yes, you can cancel your subscription at any time through your account settings. There are no long-term contracts or hidden fees."
                  },
                  {
                    question: "What sports do you cover?",
                    answer: "We provide picks for NBA, NFL, MLB, NHL, and College Basketball. During their respective seasons, each sport receives thorough coverage from our expert handicappers."
                  },
                ].map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-brand-navy font-medium text-left">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-brand-gray">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BettingInfo;
