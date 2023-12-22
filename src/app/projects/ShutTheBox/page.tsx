"use client";
import NavBar from "@/Components/navbar";
import ProjectsCarousel from "@/Components/projectsCarousel";
import Link from "next/link";
import { useState } from "react";
import { FaGithub } from "react-icons/fa";

export default function ShutTheBoxProjectPage() {

  return (
    <main className="overflow-hidden relative">
     <NavBar currentSearch="/projects/ShutTheBox" />

      <div
        className="absolute right-0 left-0 m-auto bg-ShutTheBox bg-cover
      lg:h-[35rem] lg:w-[65rem]
      md:h-[22.5rem] md:w-[45rem]
      sm:h-[15rem] sm:w-[30rem]
      top-[15rem] h-[10rem] w-[20rem]
      "
      ></div>

      <div className="bg-[#4b815c] text-center lg:h-[40rem] md:h-[30rem] sm:h-[24rem] h-[18rem] flex flex-col">
        <h1 className="text-5xl sm:text-6xl  mt-[3rem] font-bold text-white">
          ShutTheBox
        </h1>
      </div>
      <div className="bg-white lg:h-[7rem] md:h-[5rem] sm:[4rem] h-[3rem]" />
      <div className="bg-white flex flex-col text-black justify-center items-center">
        <p className="font-light text-center w-[80vw] py-auto lg:text-3xl md:text-2xl sm:text-xl text-lg">
          A javascript port of the classic game Shut The Box, made with
          materialUI and React, the game supports up to 12 players or can be
          played alone in either light or dark mode. The game is also fully
          responsive, so you can play it on your phone, tablet or desktop, if
          you don't know the rules already that's okay, just check out the rules
          page on the bottom nav bar.
        </p>
        <div className="bg-white flex flex-col text-black justify-center items-center">
          <div className="flex md:flex-row flex-col w-[50vw] items-center md:justify-between justify-center">
            <Link
              className="mt-[3rem] flex flex-row items-center justify-center bg-[#4b815c] hover:bg-[#5c9e72] text-white px-3 rounded h-[2.2rem] w-[10rem] text-[1.125rem] text-xl"
              href="https://github.com/MadeOfBees/JShutTheBox"
            >
              <FaGithub className="mr-2" />
              <p className="text-2xl">Github</p>
            </Link>
            <Link
              className="mt-[3rem] flex flex-row items-center justify-center bg-[#4b815c] hover:bg-[#5c9e72] text-white px-3 rounded h-[2.2rem] w-[10rem] text-[1.125rem] text-xl"
              href="https://madeofbees.github.io/JShutTheBox/"
            >
              <p className="text-2xl">Deployment</p>
            </Link>
          </div>
        </div>
      </div>
      <div className="h-[3rem] bg-white" />
      <ProjectsCarousel currentSearch="ShutTheBox" />
    </main>
  );
}
