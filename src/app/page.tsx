"use client";
import Head from "next/head";
import { useState, useEffect } from "react";
import NavBar from "@/Components/navbar";
import { LuMailPlus } from "react-icons/lu";

export default function Home() {
  const [email, setEmail] = useState("");

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
      <main className="w-[100vw]">
        <NavBar />
        <div className="bg-[#87A878] px-[2rem] min-h-[33rem]">
          <div className="py-[4rem] md:px-[6.3rem] grid grid-cols-3">
            <div className="col-start-1 col-span-2 flex-col space-y-[4rem] flex justify-center my-auto">
              <h1 className="text-5xl font-bold text-white">Hi, I'm Bee.</h1>
              <h2 className="text-xl font-semibold text-white">
                A Full Stack Web Developer with a flair for turning complex
                problems into elegant, user-friendly solutions. My journey in
                tech is peppered with unique experiences that fuel my innovative
                approach to web development.
              </h2>
              <button className="flex items-center justify-center bg-[#313445] hover:bg-[#42465d] text-white px-3 rounded h-[2.2rem] w-[11.5rem] text-[1.125rem]">
                <LuMailPlus className="mr-2" />
                Work with me
              </button>
            </div>
            <div className="col-start-3 col-span-1">
              <div className="hidden md:block">
                <img src="/images/pfp.png" alt="Photo of Bee" />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#272A38] flex flex-col text-white justify-center items-stretch">
          <div className="justify-center px-16 py-12 max-md:px-5">
            <div className="text-center text-5xl font-bold max-md:text-4xl ">
              My tech stack
            </div>
            <div className="text-center text-xl leading-8 mt-14 max-md:mt-10">
              Proficient in Next.js, Tailwind CSS, TypeScript, and PHP, I craft
              web experiences that are both elegant and efficient. My game
              development projects, including DailySudoku and ReactJack,
              highlight my creativity and technical skills.
            </div>
            <div className="mt-12 max-md:max-w-full max-md:mt-10">
              <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                <div className="flex flex-col items-stretch w-[34%] max-md:w-full max-md:ml-0">
                  <div className="items-stretch flex flex-col pr-2 max-md:mt-10">
                    <div className="text-2xl font-bold leading-8">
                      Front-end
                    </div>
                    <div className="leading-7 mt-5">
                      Lorem ipsum dolor sit amet consectetur. Porta at lectus
                      leo eget condimentum dui aliquam. Amet nulla.
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-stretch w-[34%] max-md:w-full max-md:ml-0">
                  <div className="items-stretch flex flex-col pr-2 max-md:mt-10">
                    <div className="text-2xl font-bold leading-8">Back-end</div>
                    <div className="leading-7 mt-5">
                      Lorem ipsum dolor sit amet consectetur. Porta at lectus
                      leo eget condimentum dui aliquam. Amet nulla.
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-stretch w-[34%] max-md:w-full max-md:ml-0">
                  <div className="items-stretch flex flex-col pr-2 max-md:mt-10">
                    <div className="text-2xl font-bold leading-8">
                      Game Development
                    </div>
                    <div className="leading-7 mt-5">
                      Lorem ipsum dolor sit amet consectetur. Porta at lectus
                      leo eget condimentum dui aliquam. Amet nulla.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="items-start flex max-w-full justify-between gap-5 mt-8 max-md:flex-wrap max-md:justify-center">
              <p>Img1</p>
              <p>Img2</p>
              <p>Img3</p>
              <p>Img4</p>
              <p>Img5</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
