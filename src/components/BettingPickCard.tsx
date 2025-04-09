
import { MouseEvent } from "react";
import { 
  Calendar, 
  Clock, 
  Info, 
  Star, 
  Check, 
  X, 
  Clock3, 
  ChevronDown, 
  ChevronUp 
} from "lucide-react";
import { useState } from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BettingPick } from "@/types/betting";

interface BettingPickCardProps {
  pick: BettingPick;
}

const BettingPickCard = ({ pick }: BettingPickCardProps) => {
  const [showNotes, setShowNotes] = useState(false);
  
  const toggleNotes = (e: MouseEvent) => {
    e.preventDefault();
    setShowNotes(!showNotes);
  };
  
  // Generate stars based on confidence level
  const renderConfidenceStars = () => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <Star
          key={i}
          className={`h-4 w-4 ${
            i < pick.confidenceLevel 
              ? "text-brand-gold fill-brand-gold" 
              : "text-gray-300"
          }`}
        />
      );
    }
    return stars;
  };
  
  // Get badge color based on status
  const getStatusBadge = () => {
    switch (pick.status) {
      case "Won":
        return (
          <Badge className="bg-green-500 hover:bg-green-600">
            <Check className="mr-1 h-3 w-3" /> 
            Won
          </Badge>
        );
      case "Lost":
        return (
          <Badge className="bg-red-500 hover:bg-red-600">
            <X className="mr-1 h-3 w-3" /> 
            Lost
          </Badge>
        );
      case "Pending":
      default:
        return (
          <Badge variant="outline" className="border-amber-500 text-amber-500">
            <Clock3 className="mr-1 h-3 w-3" /> 
            Pending
          </Badge>
        );
    }
  };
  
  // Format the date
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { 
      weekday: 'short', 
      month: 'short', 
      day: 'numeric' 
    };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <Card className={`
      hover:shadow-md transition-shadow 
      ${pick.status === "Won" ? "border-l-4 border-l-green-500" : 
        pick.status === "Lost" ? "border-l-4 border-l-red-500" : 
        "border-l-4 border-l-amber-500"}
    `}>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <Badge variant="outline" className="bg-primary/5 hover:bg-primary/10">
            {pick.sport}
          </Badge>
          {getStatusBadge()}
        </div>
        <CardTitle className="text-lg mt-3 flex justify-between items-start">
          <div>
            {pick.teams.away} @ {pick.teams.home}
          </div>
        </CardTitle>
        <div className="flex items-center text-sm text-muted-foreground">
          <Calendar className="h-4 w-4 mr-1" />
          <span className="mr-3">{formatDate(pick.date)}</span>
          <Clock className="h-4 w-4 mr-1" />
          <span>{pick.matchTime}</span>
        </div>
      </CardHeader>
      
      <CardContent>
        <div className="mb-3">
          <h3 className="font-medium text-md mb-1">Our Prediction:</h3>
          <p className="text-lg font-bold">{pick.prediction}</p>
        </div>
        
        <div className="flex items-center mt-2">
          <h3 className="font-medium text-sm mr-2">Confidence Level:</h3>
          <div className="flex">{renderConfidenceStars()}</div>
        </div>
      </CardContent>
      
      {pick.notes && (
        <CardFooter className="flex-col items-start pt-0">
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={toggleNotes}
            className="px-0 text-sm text-muted-foreground flex items-center"
          >
            <Info className="h-4 w-4 mr-1" />
            Expert Analysis {showNotes ? 
              <ChevronUp className="h-4 w-4 ml-1" /> : 
              <ChevronDown className="h-4 w-4 ml-1" />
            }
          </Button>
          
          {showNotes && (
            <div className="mt-2 text-sm bg-muted/50 p-3 rounded-md w-full">
              {pick.notes}
            </div>
          )}
        </CardFooter>
      )}
    </Card>
  );
};

export default BettingPickCard;
