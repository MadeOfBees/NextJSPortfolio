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

      <div className="absolute right-0 left-0 m-auto bg-[#122f49] top-[15rem] h-[40rem] w-[80rem]"></div>

      <div className="bg-[#87A878] h-[40rem] justify-start md:pl-[7rem] pl-[5rem] pt-[4.4rem]">
        <h1 className="text-5xl sm:text-6xl font-bold text-white">TSTetris</h1>
      </div>
      <div className="bg-white flex flex-col text-black h-[40rem] justify-center items-center">
        <div className="">
          <p className="text-2xl sm:text-3xl mt-4 font-light text-center w-[60rem]">
            Lorem ipsum dolor sit amet consectetur. Eget faucibus accumsan purus
            id senectus. Eu ut nullam massa massa sit vestibulum faucibus sapien
            purus. Cursus risus ullamcorper augue consectetur. Amet placerat
            aliquam id ut mus eleifend nibh donec vulputate. Ultrices quam
            venenatis faucibus cras aliquam velit scelerisque.
          </p>
          <div className="flex flex-row justify-between mt-8">
            {/* div for the github button */}
            <a className="flex flex-row items-center"></a>
          </div>
        </div>
      </div>

      <ProjectsCarousel currentSearch="TSTetris" />
      <ContactModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </main>
  );
}
