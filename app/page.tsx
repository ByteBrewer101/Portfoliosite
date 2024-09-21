
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
     desc: "Created a Harry Potter-themed platform to help beginners learn coding. Backend with Express and MongoDB, frontend built using React and Tailwind CSS.",
   },
   {
     Title: "Chatterbox:",
     Title2: "Group chat Application",
     link: "https://friendly-beijinho-a03091.netlify.app/",
     desc: "Built a real-time chat app with Node.js and WebSocket. Backend developed in TypeScript, frontend using React and Tailwind CSS for smooth user experience.",
   },
   {
     Title: "LinkedIn Job Scraper",
     Title2: "Web Scraping application",
     link: "https://github.com/AtharvaChopde/webscraper",
     desc: "Developed a Python web scraper for LinkedIn job postings. Automated storage of the scraped data into Google Sheets using gspread and Google Colab.",
   },
   {
     Title: "File Sharing Application",
     Title2: "Lan based Filesharing",
     link: "https://github.com/AtharvaChopde/python-Notes-sharing-system",
     desc: "Created a Python-based file-sharing tool with Tkinter and Socket for local network transfers. QR code generation integrated using PyQRCode for easy sharing.",
   },
   {
     Title: "Unity Game Development Project",
     Title2: "Game",
     link: "https://play.unity.com/en/games/615edb3b-0649-4ffb-a126-90c79880ce77/a-backrooms-horror-based-game",
     desc: "Developed a horror game in Unity using C# with AI navigation and raycasting. Optimized game performance for smooth play on multiple platforms and devices.",
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
