"use client";
import NavBar from "@/Components/navbar";
import { useState } from "react";
import { FaGithub } from "react-icons/fa";

export default function TSTetrisProjectPage() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className="w-[100vw]">
       <NavBar setIsOpen={setIsOpen} currentSearch="projects" />
    </main>
  );
}
