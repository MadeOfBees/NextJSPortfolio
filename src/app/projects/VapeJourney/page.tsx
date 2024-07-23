"use client";
import NavBar from "@/Components/navbar";
import ProjectsCarousel from "@/Components/projectsCarousel";
import Link from "next/link";
import { useState } from "react";
import { FaGithub } from "react-icons/fa";

export default function VapeJourneyProjectPage() {
  return (
    <main className="overflow-hidden relative">
      <NavBar currentSearch="/projects/VapeJourney" />

      <div
        className="absolute right-0 left-0 m-auto bg-VapeJourney bg-cover
      lg:h-[35rem] lg:w-[65rem]
      md:h-[22.5rem] md:w-[45rem]
      sm:h-[15rem] sm:w-[30rem]
      top-[15rem] h-[10rem] w-[20rem]
      "
      ></div>

      <div className="bg-[#4b815c] text-center lg:h-[40rem] md:h-[30rem] sm:h-[24rem] h-[18rem] flex flex-col">
        <h1 className="text-5xl sm:text-6xl  mt-[3rem] font-bold text-white">
          VapeJourney
        </h1>
      </div>
      <div className="bg-white lg:h-[7rem] md:h-[5rem] sm:[4rem] h-[3rem]" />
      <div className="bg-white flex flex-col text-black justify-center items-center">
        <p className="font-light text-center w-[80vw] py-auto lg:text-3xl md:text-2xl sm:text-xl text-lg">
          Interactive temp chart for medical herb vaping that's downloadable as
          a PWA (full hundreds on Lighthouse). Written w/ Next.js, TypeScript,
          Tailwind, React Aria Components, nextPWA, and more. This was my first
          project with react aria components and it won't be the last. I spent a
          lot of time working on accessibility and I'm really happy with how it
          turned out. I hope you enjoy using it as much as I enjoyed making it!
        </p>
        <div className="bg-white text-black justify-center items-center">
          <Link
            className="mt-[3rem] flex flex-row items-center justify-center bg-[#4b815c] hover:bg-[#5c9e72] text-white px-3 rounded h-[2.2rem] w-[10rem] text-[1.125rem] text-xl"
            href="https://vapejourney.cloud"
          >
            <p className="text-2xl">Deployment</p>
          </Link>
        </div>
      </div>
      <div className="h-[3rem] bg-white" />
      <ProjectsCarousel currentSearch="VapeJourney" />
    </main>
  );
}
