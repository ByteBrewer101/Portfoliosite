
import CardWithData from "@/components/cardWithData";
import HeroChildren from "@/components/HeroChildren";
import { FloatingDock } from "@/components/ui/floating-dock";
import { HeroHighlight } from "@/components/ui/hero-highlight";
import { dockItems} from "@/lib/data/data";



export default function Home() {



 const ProjectData = [
  {
    Title: "Gryffincode: Coding Platform",
    link: "https://gryffincode.netlify.app/",
    desc: "Developed a Harry Potter-themed coding platform to help beginners learn programming. Backend built with Express and MongoDB, frontend with React and Tailwind CSS.",
  },
  {
    Title: "Chatterbox: WebSocket Application",
    link: "https://friendly-beijinho-a03091.netlify.app/",
    desc: "Created a WebSocket-based chat app using Node.js and React. Backend in TypeScript with real-time communication, frontend with React and Tailwind CSS.",
  },
  {
    Title: "LinkedIn Job Scraper",
    link: "https://github.com/AtharvaChopde/webscraper",
    desc: "Developed a web scraper in Python to extract job postings from LinkedIn. Automated data storage in Google Sheets using gspread and Google Colab.",
  },
  {
    Title: "File Sharing Application",
    link: "https://github.com/AtharvaChopde/python-Notes-sharing-system",
    desc: "Built a Python-based file-sharing app using Socket and Tkinter for seamless local network file transfers. Integrated PyQRCode for QR code-based sharing.",
  },
  {
    Title: "Unity Game Development Project",
    link: "https://play.unity.com/en/games/615edb3b-0649-4ffb-a126-90c79880ce77/a-backrooms-horror-based-game",
    desc: "Developed a game in Unity using C# with AI navigation and raycasting techniques for dynamic in-game character behavior. Optimized game performance for multiple devices.",
  },
];

  return (
    <HeroHighlight className="min-h-screen flex items-center justify-center flex-col overflow-auto ">
      <div className="h-screen flex items-center justify-center snap-start">
        <HeroChildren />
      </div>

   

      <div
        id="projects"
        className="grid lg:grid-cols-3 gap-4 w-3/5 snap-start grid-cols-1    "
      >
        {ProjectData.map((project) => (
          <CardWithData
            key={project.Title}
            link={project.link}
            title={project.Title}
            desc={project.desc}
          />
        ))}
      </div>
      <FloatingDock
        items={dockItems}
        desktopClassName="fixed left-1/2 bottom-10 z-100 transform -translate-x-1/2 p-4 rounded-xl shadow-gray-300/50 shadow-xl"
        mobileClassName="fixed left-10 bottom-10 z-100  "
      />

      <div className="h-40"></div>
    </HeroHighlight>
  );
}
