"use client";

import React from "react";

interface CardWithDataProps {
  link: string;
  title: string;
  title2:string;
  desc: string;
}

const CardWithData: React.FC<CardWithDataProps> = ({ link, title,title2, desc }) => {

 
  const colors = [
    "bg-blue-500 ",
    "bg-green-500",
    "bg-orange-500",
    "bg-red-500",
    "bg-yellow-500",
  ];


  return (
    <div
      onClick={() => {
        window.open(link);
       
      }}
      className="cursor-pointer bg-black  flex flex-col justify-between space-y-4 w-full  backdrop-blur-xl p-10 border border-gray-800 rounded-xl min-h-72 hover:scale-105 hover:bg-blur-xl hover:shadow-white hover:border-none transition ease-in-out duration-700 hover:bg-white hover:text-black"
    >
      <div className="flex flex-col justify-between">
        <h1 className="font-bold text-3xl flex justify-start">{title}</h1>
        <h1 className="font-semibold text-xl text-gray-500">{title2}</h1>
      </div>
      <div className="flex flex-wrap gap-2  mt-2">
        {desc.split(",").map((i, k) => {
          const random = Math.floor(Math.random() * colors.length);

          return (
            <span
              key={k}
              className={`rounded-full px-3 py-1 text-sm text-white ${colors[random]}`}
            >
              {i.trim()}
            </span>
          );
        })}
      </div>

      <button
        onClick={() => {
          window.open(link);
        }}
        className=" mt-2 w-fit bg-white rounded-full p-2 transition ease-in-out duration-200 hover:bg-black hover:-rotate-45 shadow-xl   "
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
