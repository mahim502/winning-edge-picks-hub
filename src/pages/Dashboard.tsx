
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Calendar, Clock, Filter, ChevronDown, Star, Trophy, Info, History } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import DashboardLayout from "@/components/DashboardLayout";
import BettingPickCard from "@/components/BettingPickCard";
import DateFilter from "@/components/DateFilter";
import SportFilter from "@/components/SportFilter";
import { BettingPick } from "@/types/betting";

// Mock user data (in a real app, this would come from authentication)
const userData = {
  name: "John Smith",
  subscriptionType: "Monthly All-in-One Pass",
  subscriptionStatus: "Active",
  expiresAt: "May 10, 2025",
};

// Sample betting picks data (in a real app, this would come from an API)
const mockPicks: BettingPick[] = [
  {
    id: "1",
    date: "2025-04-09",
    sport: "NBA",
    teams: {
      home: "Boston Celtics",
      away: "LA Lakers",
    },
    matchTime: "7:30 PM ET",
    prediction: "Boston Celtics -5.5",
    confidenceLevel: 4,
    status: "Pending",
    notes: "Celtics are 8-2 in their last 10 home games. Lakers struggling on the road with key injuries.",
  },
  {
    id: "2",
    date: "2025-04-09",
    sport: "MLB",
    teams: {
      home: "NY Yankees",
      away: "Boston Red Sox",
    },
    matchTime: "1:05 PM ET",
    prediction: "Over 8.5 Runs",
    confidenceLevel: 3,
    status: "Pending",
    notes: "Both starting pitchers have ERAs over 4.50 in their last 3 starts. Weather conditions favor hitters.",
  },
  {
    id: "3",
    date: "2025-04-08",
    sport: "NBA",
    teams: {
      home: "Denver Nuggets",
      away: "Dallas Mavericks",
    },
    matchTime: "9:00 PM ET",
    prediction: "Denver Nuggets -3.5",
    confidenceLevel: 5,
    status: "Won",
    notes: "Nuggets have been dominant at home altitude. Dallas on second night of back-to-back.",
  },
  {
    id: "4",
    date: "2025-04-08",
    sport: "NHL",
    teams: {
      home: "Toronto Maple Leafs",
      away: "Montreal Canadiens",
    },
    matchTime: "7:00 PM ET",
    prediction: "Under 5.5 Goals",
    confidenceLevel: 4,
    status: "Lost",
    notes: "Both teams have strong goaltending. Recent matchups have been low-scoring affairs.",
  },
  {
    id: "5",
    date: "2025-04-07",
    sport: "NFL",
    teams: {
      home: "Kansas City Chiefs",
      away: "Buffalo Bills",
    },
    matchTime: "8:20 PM ET",
    prediction: "Buffalo Bills +3.5",
    confidenceLevel: 3,
    status: "Won",
    notes: "Bills have covered in 4 of last 5 meetings. Weather conditions favor passing game.",
  },
];

const Dashboard = () => {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [selectedSport, setSelectedSport] = useState<string | null>(null);
  
  const today = new Date().toISOString().split('T')[0];
  
  // Filter picks based on selected filters
  const filteredPicks = mockPicks.filter(pick => {
    const dateMatches = selectedDate 
      ? pick.date === selectedDate.toISOString().split('T')[0] 
      : true;
    
    const sportMatches = selectedSport 
      ? pick.sport === selectedSport 
      : true;
    
    return dateMatches && sportMatches;
  });
  
  // Separate today's picks from past picks
  const todaysPicks = filteredPicks.filter(pick => pick.date === today);
  const pastPicks = filteredPicks.filter(pick => pick.date !== today);

  return (
    <DashboardLayout>
      <div className="flex flex-col space-y-6 p-6">
        {/* Welcome Section */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Welcome, {userData.name}</CardTitle>
            <CardDescription>
              <div className="flex flex-col md:flex-row md:items-center gap-2 mt-2">
                <Badge variant="secondary" className="w-fit">
                  {userData.subscriptionType}
                </Badge>
                <span className="text-sm text-muted-foreground">
                  Status: <span className="text-green-500 font-medium">{userData.subscriptionStatus}</span> • 
                  Expires: {userData.expiresAt}
                </span>
              </div>
            </CardDescription>
          </CardHeader>
        </Card>

        {/* Filters Section */}
        <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
          <DateFilter selectedDate={selectedDate} onChange={setSelectedDate} />
          <SportFilter selectedSport={selectedSport} onChange={setSelectedSport} />
          
          {(selectedDate || selectedSport) && (
            <Button 
              variant="outline" 
              size="sm" 
              onClick={() => {
                setSelectedDate(new Date());
                setSelectedSport(null);
              }}
              className="mt-2 md:mt-0"
            >
              Clear Filters
            </Button>
          )}
        </div>

        {/* Today's Picks Section */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Trophy className="h-5 w-5 text-brand-gold" />
            <h2 className="text-xl font-bold">Today's Expert Picks</h2>
          </div>
          
          {todaysPicks.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {todaysPicks.map(pick => (
                <BettingPickCard key={pick.id} pick={pick} />
              ))}
            </div>
          ) : (
            <Card className="bg-muted/50">
              <CardContent className="flex flex-col items-center justify-center py-10">
                <Info className="h-10 w-10 text-muted-foreground mb-2" />
                <p className="text-muted-foreground text-center">
                  No picks available for the selected filters.
                </p>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => {
                    setSelectedDate(new Date());
                    setSelectedSport(null);
                  }}
                  className="mt-4"
                >
                  Reset Filters
                </Button>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Separator between today's and past picks */}
        <Separator className="my-4" />

        {/* Past Picks Section */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <History className="h-5 w-5 text-brand-gray" />
            <h2 className="text-xl font-bold">Recent Picks</h2>
          </div>
          
          {pastPicks.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {pastPicks.map(pick => (
                <BettingPickCard key={pick.id} pick={pick} />
              ))}
            </div>
          ) : (
            <Card className="bg-muted/50">
              <CardContent className="flex items-center justify-center py-10">
                <p className="text-muted-foreground">No past picks available for the selected filters.</p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
