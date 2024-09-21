"use client";

import { useRouter } from "next/navigation";
import React from "react";

interface CardWithDataProps {
  link: string;
  title: string;
  title2:string;
  desc: string;
}

const CardWithData: React.FC<CardWithDataProps> = ({ link, title,title2, desc }) => {

  const filerouter = useRouter()

  return (
    <div
      onClick={() => {
        filerouter.push("/pages/projectpage");
      }}
      className="bg-black relative z-0  flex space-y-4 flex-col w-auto justify-center backdrop-blur-xl p-10 border border-gray-800 rounded-xl h-96 hover:scale-105 hover:bg-blur-xl hover:shadow-white hover:border-none transition ease-in-out duration-700 hover:bg-white hover:text-black"
    >
      <div className=" overflow-y-hidden">
        <h1 className="font-bold text-3xl flex justify-start">{title}</h1>
        <h1 className="font-semibold text-xl" >{title2}</h1>
        <p>
          {desc.slice(0, 90)}...
          <a className="text-blue-500 hover:pointer">read more</a>
        </p>
      </div>

      <button
        onClick={() => {
          window.open(link);
        }}
        className="  w-fit bg-white rounded-full p-2 transition ease-in-out duration-200 hover:bg-black hover:-rotate-45 "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="black"
          className="size-6 hover:stroke-white "
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
          />
        </svg>
      </button>
    </div>
  );
};

export default CardWithData;
