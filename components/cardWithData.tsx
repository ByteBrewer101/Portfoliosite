"use client";

import { useRouter } from "next/navigation";
import React from "react";

interface CardWithDataProps {
  link: string;
  title: string;
  desc: string;
}

const CardWithData: React.FC<CardWithDataProps> = ({ link, title, desc }) => {

  const filerouter = useRouter()

  return (
    <div onClick={()=>{filerouter.push("/pages/projectpage")}} className="bg-black relative z-0  flex space-y-4 flex-col w-fit justify-center backdrop-blur-xl p-10 border border-gray-800 rounded-xl h-96 hover:scale-105 hover:bg-blur-xl hover:shadow-white hover:border-none transition ease-in-out duration-200 hover:bg-white hover:text-black">
      <h1 className="font-bold text-3xl flex justify-start">{title}</h1>
      <p>{desc}</p>

      <button
        onClick={() => {
          window.open(link);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6 text-blue-500"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
          />
        </svg>
      </button>
    </div>
  );
};

export default CardWithData;
