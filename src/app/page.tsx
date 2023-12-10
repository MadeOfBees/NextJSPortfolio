"use client";

import NavBar from "@/Components/navbar";
import { LuMailPlus } from "react-icons/lu";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import TechStack from "@/Components/techStack";
import ProjectsCarousel from "@/Components/projectsCarousel";
import ContactModal from "@/Components/contactModal";
import { useState } from "react";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className="w-[100vw]">
      <NavBar setIsOpen={setIsOpen} />
      <div className="bg-[#87A878] px-[4.9rem] py-[4.4rem] min-h-[33rem] justify-start">
        <h1 className="text-5xl sm:text-6xl font-bold text-white">
          Hi, I'm Bee.
        </h1>
        <div className="h-[0.1rem] bg-white mt-4"></div>
        <p className="text-2xl sm:text-3xl text-white mt-4 max-w-[33rem] py-[5rem] font-light">
          A Full Stack Web Developer with a flair for turning complex problems
          into elegant, user-friendly solutions. My journey in tech is peppered
          with unique experiences that fuel my innovative approach to web
          development.
        </p>
        <div className="absolute right-[4rem] top-[21rem] w-[25rem] h-[25rem] bg-white rounded-full hidden lg:block"></div>
      </div>
      <div className="bg-[#272A38] flex flex-col text-white justify-center min-h-[40rem]">
        <div className="justify-center px-16 py-12 max-md:px-5">
          <div className="text-center text-5xl font-bold max-md:text-4xl ">
            My tech stack
          </div>
          <div className="text-center text-xl2 mt-14 max-md:mt-10">
            Proficient in Next.js, Tailwind CSS, TypeScript, and PHP, I craft
            web experiences that are both elegant and efficient. My game
            development projects, including DailySudoku and ReactJack, highlight
            my creativity and technical skills.
          </div>
          <TechStack />
        </div>
      </div>
      <div className="bg-white min-h-[27rem]">
        <div className="px-[5rem] py-[3rem] text-2xl font-bold">
          My favorite projects
          <div className="w-full h-[20rem] mt-[3rem] rounded-lg">
            <ProjectsCarousel />
          </div>
        </div>
      </div>
      <div className="flex-col flex text-white min-h-[48.6rem] text-center items-center justify-around bg-atl bg-cover">
        <div className="flex flex-col items-center space-y-10 max-w-[65rem]">
          <div className="text-5xl font-bold max-md:text-4xl">
            Born and raised in Atlanta
          </div>
          <div className="text-2xl sm:text-3xl max-md:mt-5">
            Whether it's a state-of-the-art web app or an inventive new game,
            I'm here to help turn ideas into digital realities, especially if
            you're based in Atlanta!
          </div>
          <button
            className="flex items-center justify-center bg-[#87A878] hover:bg-[#9ebd90] text-white px-3 rounded h-[2.2rem] w-[11.5rem] text-[1.125rem] text-xl"
            onClick={() => setIsOpen(true)}
          >
            <LuMailPlus className="mr-2" />
            Work with me
          </button>
          <div className="flex md:text-3xl text-2xl">Socials</div>
          <div className="flex items-center text-5xl">
            <FaGithub className="mr-3" />
            <FaLinkedin />
          </div>
        </div>
      </div>
      <ContactModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </main>
  );
}
