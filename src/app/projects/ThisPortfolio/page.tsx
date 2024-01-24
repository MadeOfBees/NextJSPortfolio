"use client";
import NavBar from "@/Components/navbar";
import ProjectsCarousel from "@/Components/projectsCarousel";
import Link from "next/link";
import { useState } from "react";
import { FaGithub } from "react-icons/fa";

export default function ThisPortfolioProjectPage() {

  return (
    <main className="overflow-hidden relative">
     <NavBar currentSearch="/projects/ThisPortfolio" />

      <div
        className="absolute right-0 left-0 m-auto bg-ThisPortfolio bg-cover
      lg:h-[35rem] lg:w-[65rem]
      md:h-[22.5rem] md:w-[45rem]
      sm:h-[15rem] sm:w-[30rem]
      top-[15rem] h-[10rem] w-[20rem]
      "
      ></div>

      <div className="bg-[#4b815c] text-center lg:h-[40rem] md:h-[30rem] sm:h-[24rem] h-[18rem] flex flex-col">
        <h1 className="text-5xl sm:text-6xl  mt-[3rem] font-bold text-white">
          ThisPortfolio
        </h1>
      </div>
      <div className="bg-white lg:h-[7rem] md:h-[5rem] sm:[4rem] h-[3rem]" />
      <div className="bg-white flex flex-col text-black justify-center items-center">
        <p className="font-light text-center w-[80vw] py-auto lg:text-3xl md:text-2xl sm:text-xl text-lg">
          Made using Next14, TailwindCSS, Typescript and more! This portfolio
          was designed from the ground up on figma then brought to reality using
          responsive and fast TailwindCSS. I really wanted to show off my front
          end skills with this portfolio, hope you enjoy!
        </p>
        <div className="bg-white flex flex-col text-black justify-center items-center">
          <div className="flex md:flex-row flex-col w-[50vw] items-center md:justify-between justify-center">
            <Link
              className="mt-[3rem] flex flex-row items-center justify-center bg-[#4b815c] hover:bg-[#5c9e72] text-white px-3 rounded h-[2.2rem] w-[10rem] text-[1.125rem] text-xl"
              href="https://github.com/MadeOfBees/bees-portfolio"
            >
              <FaGithub className="mr-2" />
              <p className="text-2xl">Github</p>
            </Link>
            <Link
              className="mt-[3rem] flex flex-row items-center justify-center bg-[#4b815c] hover:bg-[#5c9e72] text-white px-3 rounded h-[2.2rem] w-[10rem] text-[1.125rem] text-xl"
              href="https://madeofbees.org"
            >
              <p className="text-2xl">Deployment</p>
            </Link>
          </div>
        </div>
      </div>
      <div className="h-[3rem] bg-white" />
      <ProjectsCarousel currentSearch="ThisPortfolio" />
    </main>
  );
}
