"use client";
import NavBar from "@/Components/navbar";
import ContactModal from "@/Components/contactModal";
import ProjectsCarousel from "@/Components/projectsCarousel";
import Link from "next/link";
import { useState } from "react";
import { FaGithub } from "react-icons/fa";

export default function DailySudokuProjectPage() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className="w-[100vw] relative">
      <NavBar setIsOpen={setIsOpen} currentSearch="/projects/DailySudoku" />

      <div
        className="absolute right-0 left-0 m-auto bg-DailySudoku bg-cover
      lg:h-[35rem] lg:w-[65rem]
      md:h-[22.5rem] md:w-[45rem]
      sm:h-[15rem] sm:w-[30rem]
      top-[15rem] h-[10rem] w-[20rem]
      "
      ></div>

      <div className="bg-[#4b815c] text-center lg:h-[40rem] md:h-[30rem] sm:h-[24rem] h-[18rem] flex flex-col">
        <h1 className="text-6xl mt-[3rem] font-bold text-white">DailySudoku</h1>
      </div>
      <div className="bg-white lg:h-[7rem] md:h-[5rem] sm:[4rem] h-[3rem]" />
      <div className="bg-white flex flex-col text-black justify-center items-center">
        <p className="font-light text-center w-[80vw] py-auto lg:text-3xl md:text-2xl sm:text-xl text-lg">
        Daily Global Sudoku is a modern port of the classic game Sudoku. The game is built using the popular JavaScript library React, which provides a seamless and fast-paced gaming experience. The game's sleek and polished look is achieved through the use of Material-UI, a popular styling library. The game's daily puzzle update feature, powered by a server and a MongoDB database, ensures that players are never bored and can enjoy a fresh and challenging puzzle every day. Deployed on the Heroku cloud platform, the game offers high availability and scalability, ensuring that users can access the game anytime and anywhere. The game also features a leaderboard where players can compare their scores with their friends and add an element of competition to the game. Whether you are a fan of the classic game of Sudoku or are just looking for a new and challenging puzzle, then try out Daily Global Sudoku today!
        </p>
        <div className="bg-white flex flex-col text-black justify-center items-center">
          <div className="flex md:flex-row flex-col w-[50vw] items-center md:justify-between justify-center">
            <Link
              className="mt-[3rem] flex flex-row items-center justify-center bg-[#4b815c] hover:bg-[#5c9e72] text-white px-3 rounded h-[2.2rem] w-[10rem] text-[1.125rem] text-xl"
              href="https://github.com/MadeOfBees/DailySudoku/"
            >
              <FaGithub className="mr-2" />
              <p className="text-2xl">Github</p>
            </Link>
            <Link
              className="mt-[3rem] flex flex-row items-center justify-center bg-[#4b815c] hover:bg-[#5c9e72] text-white px-3 rounded h-[2.2rem] w-[10rem] text-[1.125rem] text-xl"
              href="https://daily-global-sudoku.herokuapp.com/"
            >
              <p className="text-2xl">Deployment</p>
            </Link>
          </div>
        </div>
      </div>
      <div className="mt-[3rem]">
        <ProjectsCarousel currentSearch="DailySudoku" />
      </div>
      <ContactModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </main>
  );
}
