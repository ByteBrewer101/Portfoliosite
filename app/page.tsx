import CardWithData from "@/components/cardWithData";
import HeroChildren from "@/components/HeroChildren";
import { HeroHighlight } from "@/components/ui/hero-highlight";

export default function Home() {
  return (
  
    
      <HeroHighlight className="min-h-screen flex items-center justify-center flex-col overflow-auto ">
        <div className="h-screen flex items-center justify-center snap-start">
          <HeroChildren />
        </div>
   
        <div className="grid lg:grid-cols-3 gap-4 w-3/5 snap-start grid-cols-1   ">
          <CardWithData />
          <CardWithData />
          <CardWithData />
          <CardWithData />
          <CardWithData />
          <CardWithData />
        </div>

        <div className="h-40" ></div>
      </HeroHighlight>
    
  );
}
