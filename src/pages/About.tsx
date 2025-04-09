
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Users, Award, ThumbsUp, BarChart } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-brand-navy text-white py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Winning Edge Picks</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We're a team of professional handicappers dedicated to providing the most accurate sports betting predictions in the industry.
            </p>
          </div>
        </div>

        {/* Our Story */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-brand-navy mb-6">Our Story</h2>
                <p className="text-brand-gray mb-4">
                  Founded in 2015 by a team of sports analytics experts and former oddsmakers, Winning Edge Picks has grown to become one of the most trusted names in sports handicapping.
                </p>
                <p className="text-brand-gray mb-4">
                  What started as a small group sharing picks among friends has evolved into a premium service with thousands of satisfied members across the country.
                </p>
                <p className="text-brand-gray">
                  Our success is built on a foundation of advanced statistical analysis, industry connections, and a deep understanding of sports betting markets that gives our members a consistent winning edge.
                </p>
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1614018453562-77f06b022534?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" 
                  alt="Team working on sports analysis" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-brand-navy mb-4">Why Choose Winning Edge Picks?</h2>
              <p className="text-lg text-brand-gray max-w-2xl mx-auto">
                Our approach combines expert analysis, proven methodologies, and transparent reporting.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-gold/10 text-brand-gold mb-6">
                  <Users className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-brand-navy mb-3">Expert Team</h3>
                <p className="text-brand-gray">
                  Our handicappers have decades of combined experience in the sports betting industry.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-gold/10 text-brand-gold mb-6">
                  <BarChart className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-brand-navy mb-3">Data-Driven</h3>
                <p className="text-brand-gray">
                  We combine advanced analytics with insider knowledge for superior results.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-gold/10 text-brand-gold mb-6">
                  <ThumbsUp className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-brand-navy mb-3">Proven Results</h3>
                <p className="text-brand-gray">
                  Our track record speaks for itself with documented success across all sports.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-gold/10 text-brand-gold mb-6">
                  <Award className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-brand-navy mb-3">Total Transparency</h3>
                <p className="text-brand-gray">
                  We publish all of our picks and results, win or lose - no hiding losing picks.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Team */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-brand-navy mb-4">Meet Our Team</h2>
              <p className="text-lg text-brand-gray max-w-2xl mx-auto">
                The experts behind our winning predictions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Michael Thompson",
                  title: "Founder & NBA Specialist",
                  bio: "Former NBA analytics consultant with 15+ years in sports betting.",
                  image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                },
                {
                  name: "Sarah Williams",
                  title: "NFL & College Football Expert",
                  bio: "Football analyst who has appeared on major sports networks.",
                  image: "https://images.unsplash.com/photo-1598550880863-4e8aa3d0edb4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                },
                {
                  name: "David Rodriguez",
                  title: "MLB & NHL Specialist",
                  bio: "Statistical genius with a professional background in data science.",
                  image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                },
              ].map((member, index) => (
                <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-64 object-cover object-center"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-brand-navy">{member.name}</h3>
                    <p className="text-brand-gold mb-2">{member.title}</p>
                    <p className="text-brand-gray">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
