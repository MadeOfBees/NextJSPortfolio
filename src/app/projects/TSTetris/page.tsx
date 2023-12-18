"use client";
import NavBar from "@/Components/navbar";
import ContactModal from "@/Components/contactModal";
import ProjectsCarousel from "@/Components/projectsCarousel";
import { useState } from "react";
import { FaGithub } from "react-icons/fa";

export default function TSTetrisProjectPage() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className="w-[100vw] relative">
      <NavBar setIsOpen={setIsOpen} currentSearch="/projects/TSTetris" />

      <div
        className="absolute right-0 left-0 m-auto bg-[#122f49] 
      top-[15rem] h-[40rem] w-[80rem]
      "
      ></div>

      <div className="bg-[#87A878] h-[80vh] justify-start md:pl-[7rem] pl-[5rem] pt-[4.4rem]">
        <h1 className="text-5xl sm:text-6xl font-bold text-white">TSTetris</h1>
      </div>
      <div className="bg-white flex flex-col text-black h-[40rem] justify-center items-center">
        <div className="">
          <p className="text-2xl sm:text-3xl mt-4 font-light text-center w-[80vw]">
            Lorem ipsum dolor sit amet consectetur. Eget faucibus accumsan purus
            id senectus. Eu ut nullam massa massa sit vestibulum faucibus sapien
            purus. Cursus risus ullamcorper augue consectetur. Amet placerat
            aliquam id ut mus eleifend nibh donec vulputate. Ultrices quam
            venenatis faucibus cras aliquam velit scelerisque.
          </p>
          <div className="flex md:flex-row flex-col mx-auto w-[50vw] items-center md:justify-between justify-center">
            <a
              className="mt-[3rem] flex flex-row items-center justify-center bg-[#87A878] hover:bg-[#9ebd90] text-white px-3 rounded h-[2.2rem] w-[10rem] text-[1.125rem] text-xl"
              href="github.com"
            >
              <FaGithub className="mr-2" />
              <p className="text-2xl">Github</p>
            </a>
            <a
              className="mt-[3rem] flex flex-row items-center justify-center bg-[#87A878] hover:bg-[#9ebd90] text-white px-3 rounded h-[2.2rem] w-[10rem] text-[1.125rem] text-xl"
              href="github.com"
            >
              <p className="text-2xl">Deployment</p>
            </a>
          </div>
        </div>
      </div>
      <div className="mt-[3rem]">
        <ProjectsCarousel currentSearch="TSTetris" />
      </div>
      <ContactModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </main>
  );
}
