import CardWithData from "@/components/cardWithData";
import HeroChildren from "@/components/HeroChildren";
import { FloatingDock } from "@/components/ui/floating-dock";
import { HeroHighlight } from "@/components/ui/hero-highlight";
import { dockItems } from "@/lib/data/data";

export default function Home() {





  return (
    <HeroHighlight className="min-h-screen flex items-center justify-center flex-col overflow-auto ">
      <div className="h-screen flex items-center justify-center snap-start">
        <HeroChildren />
      </div>

      <div className="grid lg:grid-cols-3 gap-4 w-3/5 snap-start grid-cols-1    ">
        <CardWithData />
        <CardWithData />
        <CardWithData />
        <CardWithData />
        <CardWithData />
        <CardWithData />
      </div>
      <FloatingDock
        items={dockItems}
        desktopClassName="fixed left-1/2 bottom-10 z-100 transform -translate-x-1/2 p-4 rounded-xl shadow-gray-300/50 shadow-xl"
        mobileClassName="fixed left-10 bottom-10 z-100  rounded-full "
      />

      <div className="h-40"></div>
    </HeroHighlight>
  );
}
