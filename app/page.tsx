
import CardWithData from "@/components/cardWithData";
import HeroChildren from "@/components/HeroChildren";
import { FloatingDock } from "@/components/ui/floating-dock";
import { HeroHighlight } from "@/components/ui/hero-highlight";
import { dockItems} from "@/lib/data/data";



export default function Home() {
const ProjectData = [
  {
    Title: "Gryffincode: ",
    Title2: "Coding Platform",
    link: "https://gryffincode.netlify.app/",
    desc: "Express, MongoDB, React, Tailwind CSS",
  },
  {
    Title: "Chatterbox:",
    Title2: "Group chat Application",
    link: "https://friendly-beijinho-a03091.netlify.app/",
    desc: "Node.js, WebSocket, TypeScript, React, Tailwind CSS",
  },
  {
    Title: "Chill Guy",
    Title2: "Meme Generator",
    link: "https://chillguy.netlify.app/",
    desc: "Konva.js, HTML canvas, React , Tailwind, ShadCN",
  },
  {
    Title: "LinkedIn Job Scraper",
    Title2: "Web Scraping application",
    link: "https://github.com/AtharvaChopde/webscraper",
    desc: "Python, gspread, Google Colab",
  },
  {
    Title: "File Sharing Application",
    Title2: "Lan based Filesharing",
    link: "https://github.com/AtharvaChopde/python-Notes-sharing-system",
    desc: "Python, Tkinter, Socket, PyQRCode",
  },
  {
    Title: "Unity Games",
    Title2: "Multiple games",
    link: "https://play.unity.com/en/games/615edb3b-0649-4ffb-a126-90c79880ce77/a-backrooms-horror-based-game",
    desc: "Unity, C#, AI navigation, Raycasting",
  },
];


  return (
    <HeroHighlight className="min-h-screen flex items-center justify-center flex-col overflow-auto ">
      <div className="h-screen flex items-center justify-center snap-start">
        <HeroChildren />
      </div>

   

      <div
        id="projects"
        className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 w-full p-20  xl:w-4/5 snap-start grid-cols-1    "
      >
        {ProjectData.map((project) => (
          <CardWithData
            key={project.Title}
            link={project.link}
            title={project.Title}
            title2={project.Title2}
            desc={project.desc}
          />
        ))}
      </div>
      <FloatingDock
        items={dockItems}
        desktopClassName="fixed left-1/2 bottom-10 z-100 transform -translate-x-1/2 p-4 rounded-xl shadow-gray-300/50 shadow-xl"
        mobileClassName="fixed left-10 bottom-10 z-50 "
        
      />

      <div className="h-40"></div>
    </HeroHighlight>
  );
}
