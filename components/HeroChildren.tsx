export default function HeroChildren() {
  return (
    <div className="flex flex-col justify-center items-center w-full max-w-[40rem] mx-auto space-y-10 p-4">
      <h1 className="text-5xl md:text-7xl font-bold text-center ">
        Hi, I am
        <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-xl p-4 ">
          Atharva
        </span>
      </h1>
      <h1 className="text-lg md:text-xl font-bold text-center">
        I’m a full-stack developer I build the web with
        <span className="text-blue-500">TypeScript</span>,
        <span className="text-green-500">JavaScript</span>,
        <span className="text-red-500">Express</span>,
        <span className="text-yellow-500">Prisma</span>,
        <span className="text-purple-500">WebSockets</span>,
        <span className="text-orange-500">Redis</span>, and
        <span className="text-teal-500">Docker</span>. I build scalable,
        interactive web apps that focus on performance and user experience.
      </h1>

      <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 md:space-x-20">
        <button className="hover:scale-105 bg-indigo-500 font-bold p-4 rounded-xl shadow-xl shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:bg-white hover:text-black transition ease-in-out duration-200 w-full md:w-auto">
          Hire Me
        </button>
        <button className="hover:scale-105 bg-green-500 font-bold p-4 rounded-xl shadow-xl shadow-green-500/30 hover:shadow-indigo-500/50 hover:bg-white hover:text-black transition ease-in-out duration-200 w-full md:w-auto">
          Projects
        </button>
        <button className="hover:scale-105 bg-red-500 font-bold p-4 rounded-xl shadow-xl shadow-red-500/30 hover:shadow-red-500/50 hover:bg-white hover:text-black transition ease-in-out duration-200 w-full md:w-auto">
          Github
        </button>
        <button className="hover:scale-105 bg-orange-500  font-bold p-4 rounded-xl shadow-xl shadow-orange-500/30 hover:shadow-orange-500/50 hover:bg-white hover:text-black transition ease-in-out duration-200 w-full md:w-auto">
          Resume
        </button>
      </div>
    </div>
  );
}
