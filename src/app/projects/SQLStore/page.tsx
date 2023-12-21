"use client";
import NavBar from "@/Components/navbar";
import ContactModal from "@/Components/contactModal";
import ProjectsCarousel from "@/Components/projectsCarousel";
import Link from "next/link";
import { useState } from "react";
import { FaGithub } from "react-icons/fa";

export default function SQLStoreProjectPage() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className="w-[100vw] relative">
      <NavBar setIsOpen={setIsOpen} currentSearch="/projects/SQLStore" />

      <div
        className="absolute right-0 left-0 m-auto bg-SQLStore bg-cover
      lg:h-[35rem] lg:w-[65rem]
      md:h-[22.5rem] md:w-[45rem]
      sm:h-[15rem] sm:w-[30rem]
      top-[15rem] h-[10rem] w-[20rem]
      "
      ></div>

      <div className="bg-[#6839b5] text-center lg:h-[40rem] md:h-[30rem] sm:h-[24rem] h-[18rem] flex flex-col">
        <h1 className="text-6xl mt-[3rem] font-bold text-white">SQLStore</h1>
      </div>
      <div className="bg-white lg:h-[7rem] md:h-[5rem] sm:[4rem] h-[3rem]" />
      <div className="bg-white flex flex-col text-black justify-center items-center">
        <p className="font-light text-center w-[80vw] py-auto lg:text-3xl md:text-2xl sm:text-xl text-lg">
          This relational database driven storefront is built with
          Sequelize/MySQL, Express, and NodeJS, making it a powerful and
          efficient platform for all your store's needs. This backend is
          designed to be a REST API, providing easy access to all the essential
          features of an online store, without the need for a front-end
          interface.
        </p>
        <div className="bg-white text-black justify-center items-center">
            <Link
              className="mt-[3rem] flex flex-row items-center justify-center bg-[#6839b5] hover:bg-[#8458cb] text-white px-3 rounded h-[2.2rem] w-[10rem] text-[1.125rem] text-xl"
              href="https://github.com/MadeOfBees/SQLStore"
            >
              <FaGithub className="mr-2" />
              <p className="text-2xl">Github</p>
            </Link>
        </div>
      </div>
      <div className="mt-[3rem]">
        <ProjectsCarousel currentSearch="SQLStore" />
      </div>
      <ContactModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </main>
  );
}
