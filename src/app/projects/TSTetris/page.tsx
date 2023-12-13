"use client";
import NavBar from "@/Components/navbar";
import ContactModal from "@/Components/contactModal";
import { useState } from "react";

export default function TSTetrisProjectPage() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className="w-[100vw] relative">
      <NavBar setIsOpen={setIsOpen} currentSearch="/projects/TSTetris" />

      <div className="bg-[#87A878] h-[33rem] justify-start">
        <h1 className="text-5xl sm:text-6xl font-bold text-white">
        TS Tetris</h1>
      </div>

      <div className="absolute top-[20rem] left-0 right-0 mx-auto w-[50rem] h-[20rem] bg-red-500 rounded-lg"></div>


      <div className="bg-white px-[4.9rem] py-[4.4rem] h-[33rem] justify-start"></div>

      <ContactModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </main>
  );
}
