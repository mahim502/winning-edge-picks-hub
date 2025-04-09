
export interface BettingPick {
  id: string;
  date: string;
  sport: string;
  teams: {
    home: string;
    away: string;
  };
  matchTime: string;
  prediction: string;
  confidenceLevel: number; // 1-5
  status: "Pending" | "Won" | "Lost";
  notes?: string;
}
