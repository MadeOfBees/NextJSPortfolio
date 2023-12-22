"use client";
import Link from "next/link";
import NavBar from "@/Components/navbar";
import { LuMailPlus } from "react-icons/lu";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import TechStack from "@/Components/techStack";
import ProjectsCarousel from "@/Components/projectsCarousel";
import { clickContact } from "@/utils/workWithMe";

export default function Home() {

  return (
    <main className="overflow-hidden">
      <NavBar currentSearch="home" />
      <div className="bg-[#4b815c] lg:px-[4.9rem] md:px-[3.5rem] sm:px-[2.5rem] px-[1.2rem] py-[4.4rem] min-h-[33rem] justify-start">
        <h1 className="text-5xl sm:text-6xl font-bold text-white">
          Hi, I'm Bee.
        </h1>
        <div className="h-[0.1rem] bg-white mt-4"></div>
        <p className="text-2xl sm:text-3xl text-white mt-4 max-w-[33rem] py-[5rem] font-light">
          A Full Stack Web Developer with a passion for turning complex problems
          into elegant, user-friendly solutions. My journey in tech is peppered
          with unique experiences that fuel my innovative approach to web
          development.
        </p>
        <div className="absolute right-[4rem] top-[21rem] w-[25rem] h-[25rem] bg-myFace bg-cover rounded-full hidden lg:block"></div>
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
        </div>
        <div className="w-full h-[20rem] mt-[3rem] rounded-lg">
          <ProjectsCarousel />
        </div>
      </div>
      <div className="flex-col flex text-white min-h-[48.6rem] max-w-[100vw] text-center items-center justify-around bg-atl bg-cover">
        <div className="flex flex-col items-center space-y-10 max-w-[65rem] bg-black rounded-xl bg-opacity-50 p-[1rem] m-[1rem]">
   
          <div className="text-5xl font-bold max-md:text-4xl">
            Born and raised in Atlanta
          </div>
          <div className="text-2xl sm:text-3xl max-md:mt-5"> 
            Whether it's a state-of-the-art web app or an inventive new game,
            I'm here to help turn ideas into digital realities, especially if
            you're based in Atlanta!

          </div>
          <button
            className="flex items-center justify-center bg-white hover:bg-[#999999] text-black px-3 rounded h-[2.2rem] w-[11.5rem] text-[1.125rem] text-xl"
            onClick={() => clickContact()}
          >
            <LuMailPlus className="mr-2" />
            Work with me
          </button>
          <div className="flex md:text-3xl text-2xl">Socials</div>
          <div className="flex items-center text-5xl">
            <Link href="https://github.com/MadeOfBees" className="mr-[2rem] text-white hover:text-[#999999]" aria-label="A link to my github">
              <FaGithub />
            </Link>
            <Link href="https://www.linkedin.com/in/madeofbees/" aria-label="A link to my linkedin" className="text-white hover:text-[#999999]">
              <FaLinkedin />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
