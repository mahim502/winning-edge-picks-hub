
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3 } from "lucide-react";

const History = () => {
  // Sample performance data
  const performanceData = {
    overall: {
      wins: 247,
      losses: 153,
      winrate: 61.8,
      roi: 18.5,
    },
    nba: {
      wins: 82,
      losses: 48,
      winrate: 63.1,
      roi: 19.2,
    },
    nfl: {
      wins: 58,
      losses: 42,
      winrate: 58.0,
      roi: 15.7,
    },
    mlb: {
      wins: 67,
      losses: 33,
      winrate: 67.0,
      roi: 22.4,
    },
    nhl: {
      wins: 40,
      losses: 30,
      winrate: 57.1,
      roi: 14.8,
    },
  };

  // Sample recent picks data
  const recentPicks = [
    {
      date: "Apr 8, 2025",
      sport: "NBA",
      pick: "Los Angeles Lakers -4.5",
      result: "Won",
      score: "Lakers 112 - Warriors 98",
      analysis: "The Lakers' dominant frontcourt proved too much for the Warriors' small-ball lineup.",
    },
    {
      date: "Apr 7, 2025",
      sport: "MLB",
      pick: "New York Yankees -1.5",
      result: "Won",
      score: "Yankees 6 - Red Sox 2",
      analysis: "Cole delivered a stellar pitching performance with 11 strikeouts.",
    },
    {
      date: "Apr 7, 2025",
      sport: "NHL",
      pick: "Vegas Golden Knights ML",
      result: "Won",
      score: "Knights 3 - Bruins 1",
      analysis: "The Knights' goaltending was exceptional, stopping 38 of 39 shots.",
    },
    {
      date: "Apr 6, 2025",
      sport: "NBA",
      pick: "Milwaukee Bucks -7",
      result: "Lost",
      score: "Bucks 105 - Celtics 103",
      analysis: "Bucks won but failed to cover the spread in a closer-than-expected game.",
    },
    {
      date: "Apr 6, 2025",
      sport: "NFL",
      pick: "Kansas City Chiefs ML",
      result: "Won",
      score: "Chiefs 28 - Ravens 24",
      analysis: "Mahomes' late-game heroics secured the victory in a thrilling matchup.",
    },
    {
      date: "Apr 5, 2025",
      sport: "MLB",
      pick: "Los Angeles Dodgers -1.5",
      result: "Won",
      score: "Dodgers 7 - Giants 2",
      analysis: "The Dodgers' offense exploded in the 6th inning with 5 runs, easily covering the run line.",
    },
    {
      date: "Apr 5, 2025",
      sport: "NHL",
      pick: "Tampa Bay Lightning -1.5",
      result: "Lost",
      score: "Lightning 2 - Panthers 1",
      analysis: "Lightning won but couldn't cover the puck line in a defensive battle.",
    },
    {
      date: "Apr 4, 2025",
      sport: "NBA",
      pick: "Denver Nuggets -5.5",
      result: "Won",
      score: "Nuggets 114 - Suns 102",
      analysis: "Jokic's triple-double led the Nuggets to a comfortable victory at home.",
    },
    {
      date: "Apr 4, 2025",
      sport: "MLB",
      pick: "Atlanta Braves ML",
      result: "Lost",
      score: "Mets 3 - Braves 2",
      analysis: "A late-inning collapse by the Braves bullpen cost them the game.",
    },
    {
      date: "Apr 3, 2025",
      sport: "NFL",
      pick: "Buffalo Bills +3.5",
      result: "Won",
      score: "Bengals 24 - Bills 23",
      analysis: "The Bills kept it close enough to cover despite losing the game outright.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-brand-navy text-white py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Track Record</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Complete transparency with all of our previous picks and results
            </p>
          </div>
        </div>

        {/* Performance Overview */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-brand-navy mb-4">Performance Summary</h2>
              <p className="text-lg text-brand-gray max-w-2xl mx-auto">
                Our documented winning percentage across all sports in the last 12 months
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              {Object.entries({
                overall: "Overall",
                nba: "NBA",
                nfl: "NFL",
                mlb: "MLB",
                nhl: "NHL",
              }).map(([key, label]) => {
                const data = performanceData[key as keyof typeof performanceData];
                
                return (
                  <Card key={key} className={key === "overall" ? "lg:col-span-1 bg-brand-navy text-white" : ""}>
                    <CardHeader className="pb-2">
                      <CardTitle className={`text-lg ${key === "overall" ? "text-white" : "text-brand-navy"}`}>
                        {label} Performance
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex justify-between items-center mb-2">
                        <span className={`text-sm ${key === "overall" ? "text-gray-300" : "text-brand-gray"}`}>
                          Record:
                        </span>
                        <span className={`font-semibold ${key === "overall" ? "text-white" : "text-brand-navy"}`}>
                          {data.wins}-{data.losses}
                        </span>
                      </div>
                      <div className="flex justify-between items-center mb-2">
                        <span className={`text-sm ${key === "overall" ? "text-gray-300" : "text-brand-gray"}`}>
                          Win Rate:
                        </span>
                        <span className={`font-semibold ${key === "overall" ? "text-white" : "text-brand-navy"}`}>
                          {data.winrate}%
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className={`text-sm ${key === "overall" ? "text-gray-300" : "text-brand-gray"}`}>
                          ROI:
                        </span>
                        <span className={`font-semibold ${key === "overall" ? "text-white" : "text-brand-navy"}`}>
                          +{data.roi}%
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Monthly Performance Chart */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-brand-navy mb-4">Monthly Performance</h2>
              <p className="text-lg text-brand-gray max-w-2xl mx-auto">
                View our consistent results month by month
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex justify-center items-center h-[300px]">
                <div className="text-center">
                  <BarChart3 className="h-16 w-16 text-brand-gold mx-auto mb-4" />
                  <p className="text-lg text-brand-navy font-medium">
                    Monthly performance chart would display here
                  </p>
                  <p className="text-brand-gray mt-2">
                    Showing consistent month-to-month profitability
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Recent Picks */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-brand-navy mb-4">Recent Picks</h2>
              <p className="text-lg text-brand-gray max-w-2xl mx-auto">
                Complete history of our recent selections across all sports
              </p>
            </div>

            <Tabs defaultValue="all" className="w-full">
              <TabsList className="mb-8 flex justify-center">
                <TabsTrigger value="all">All Sports</TabsTrigger>
                <TabsTrigger value="nba">NBA</TabsTrigger>
                <TabsTrigger value="nfl">NFL</TabsTrigger>
                <TabsTrigger value="mlb">MLB</TabsTrigger>
                <TabsTrigger value="nhl">NHL</TabsTrigger>
              </TabsList>
              
              <TabsContent value="all" className="w-full">
                <div className="bg-white rounded-xl shadow-md overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left">
                      <thead className="bg-gray-100">
                        <tr>
                          <th className="px-6 py-4 text-brand-navy font-semibold">Date</th>
                          <th className="px-6 py-4 text-brand-navy font-semibold">Sport</th>
                          <th className="px-6 py-4 text-brand-navy font-semibold">Pick</th>
                          <th className="px-6 py-4 text-brand-navy font-semibold">Result</th>
                          <th className="px-6 py-4 text-brand-navy font-semibold">Final Score</th>
                          <th className="px-6 py-4 text-brand-navy font-semibold">Analysis</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        {recentPicks.map((pick, index) => (
                          <tr key={index} className="hover:bg-gray-50">
                            <td className="px-6 py-4 text-brand-gray">{pick.date}</td>
                            <td className="px-6 py-4">
                              <Badge variant="outline" className="bg-brand-navy/5 text-brand-navy">
                                {pick.sport}
                              </Badge>
                            </td>
                            <td className="px-6 py-4 font-medium text-brand-navy">{pick.pick}</td>
                            <td className="px-6 py-4">
                              <Badge className={`${pick.result === "Won" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}>
                                {pick.result}
                              </Badge>
                            </td>
                            <td className="px-6 py-4 text-brand-gray">{pick.score}</td>
                            <td className="px-6 py-4 text-brand-gray max-w-xs truncate">{pick.analysis}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="nba">
                <div className="bg-white rounded-xl shadow-md overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left">
                      <thead className="bg-gray-100">
                        <tr>
                          <th className="px-6 py-4 text-brand-navy font-semibold">Date</th>
                          <th className="px-6 py-4 text-brand-navy font-semibold">Pick</th>
                          <th className="px-6 py-4 text-brand-navy font-semibold">Result</th>
                          <th className="px-6 py-4 text-brand-navy font-semibold">Final Score</th>
                          <th className="px-6 py-4 text-brand-navy font-semibold">Analysis</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        {recentPicks
                          .filter(pick => pick.sport === "NBA")
                          .map((pick, index) => (
                            <tr key={index} className="hover:bg-gray-50">
                              <td className="px-6 py-4 text-brand-gray">{pick.date}</td>
                              <td className="px-6 py-4 font-medium text-brand-navy">{pick.pick}</td>
                              <td className="px-6 py-4">
                                <Badge className={`${pick.result === "Won" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}>
                                  {pick.result}
                                </Badge>
                              </td>
                              <td className="px-6 py-4 text-brand-gray">{pick.score}</td>
                              <td className="px-6 py-4 text-brand-gray max-w-xs truncate">{pick.analysis}</td>
                            </tr>
                          ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </TabsContent>
              
              {/* Similar TabsContent for NFL, MLB, NHL - omitted for brevity */}
              <TabsContent value="nfl">
                <div className="flex justify-center py-12">
                  <p className="text-brand-gray">NFL picks would be displayed here.</p>
                </div>
              </TabsContent>
              
              <TabsContent value="mlb">
                <div className="flex justify-center py-12">
                  <p className="text-brand-gray">MLB picks would be displayed here.</p>
                </div>
              </TabsContent>
              
              <TabsContent value="nhl">
                <div className="flex justify-center py-12">
                  <p className="text-brand-gray">NHL picks would be displayed here.</p>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default History;
