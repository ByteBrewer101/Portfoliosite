export default function HeroChildren() {
  return (
    <div className="flex flex-col justify-center items-center w-full max-w-[40rem] mx-auto space-y-10 p-4">
      <h1 className="text-5xl md:text-7xl font-bold text-center ">
        Hi, I am
        <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-xl p-4 ">
          NAme Developer
        </span>
      </h1>
      <h1 className="text-lg md:text-xl font-bold text-center">
        I’m a full-stack developer whs is well expreienced in
        <span className=" text-indigo-500  "> TypeScript</span>
        and various JavaScript-based technologies. I have a strong background in
        backend development using
        <span className=" text-indigo-500  "> express</span> and Prisma, along
        with hands-on experience in WebSockets,
        <span className=" text-indigo-500  "> Redis</span>, and
        <span className=" text-indigo-500  "> Docker</span>. My focus is on
        building scalable and interactive web applications that enhance user
        experience and performance.
      </h1>
      <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 md:space-x-20">
        <button className="bg-indigo-500 font-bold p-4 rounded-xl shadow-xl shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:bg-white hover:text-black transition ease-in-out duration-200 w-full md:w-auto">
          Contact Me
          
        </button>
        <button className="bg-green-500 font-bold p-4 rounded-xl shadow-xl shadow-green-500/30 hover:shadow-indigo-500/50 hover:bg-white hover:text-black transition ease-in-out duration-200 w-full md:w-auto">
          Projects
        </button>
        <button className="bg-red-500 font-bold p-4 rounded-xl shadow-xl shadow-red-500/30 hover:shadow-red-500/50 hover:bg-white hover:text-black transition ease-in-out duration-200 w-full md:w-auto">
          Github
        </button>
      </div>
    </div>
  );
}