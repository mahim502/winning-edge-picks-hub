
import { Check, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface SportFilterProps {
  selectedSport: string | null;
  onChange: (sport: string | null) => void;
}

const SportFilter = ({ selectedSport, onChange }: SportFilterProps) => {
  const sportTypes = ["NBA", "NFL", "MLB", "NHL", "College Basketball"];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="h-9">
          <Filter className="h-4 w-4 mr-2" />
          {selectedSport ? selectedSport : "Filter by Sport"}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Sports</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          {sportTypes.map((sport) => (
            <DropdownMenuItem
              key={sport}
              className="cursor-pointer"
              onClick={() => onChange(sport)}
            >
              {sport}
              {selectedSport === sport && (
                <Check className="h-4 w-4 ml-auto" />
              )}
            </DropdownMenuItem>
          ))}
          {selectedSport && (
            <>
              <DropdownMenuSeparator />
              <DropdownMenuItem 
                className="cursor-pointer text-muted-foreground"
                onClick={() => onChange(null)}
              >
                Clear Selection
              </DropdownMenuItem>
            </>
          )}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default SportFilter;
