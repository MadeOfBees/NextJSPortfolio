"use client";
import Head from "next/head";
import { useState, useEffect } from "react";
import NavBar from "@/Components/navbar";

export default function Home() {
  const [email, setEmail] = useState("");
  function greetings() {
    if (new Date().getHours() < 12) {
      return "morning";
    } else if (new Date().getHours() < 18) {
      return "afternoon";
    } else {
      return "evening";
    }
  }

  const sendEmail = () => {
    window.open(`mailto:isaud@gmail.com?subject=NewContact!&body=${email}`);
  };

  useEffect(() => {
    setEmail(email);
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <NavBar />
        <div className="bg-[#87A878] h-[33rem]">About</div>
        <div className="bg-[#272A38] h-[33rem]">My Tech Stack</div>
        <div className="bg-white h-[25rem]">Projects</div>
        <div className="bg-[#272A38] h-[33rem]">Contact</div>
      </main>
    </>
  );
}
