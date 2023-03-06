import React, { useEffect, useState } from "react";
import Head from "next/head";
import Navbar from "../Components/navbar";

export default function Home() {

  function greetings() {
    if (new Date().getHours() < 12) {
      return "morning";
    } else if (new Date().getHours() < 18) {
      return "afternoon";
    } else {
      return "evening";
    }
  }

  return (
    <>
      <Head>
        <title>Bee's Portfolio</title>
        <meta name="description" content="Bee's portfolio homepage" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 className="text-5xl font-bold text-center mt-8">
          Good {greetings()}! I'm Ben, welcome to my Portfolio!
        </h1>
        <p className="p-6" style={{ textIndent: "2em" }}>
          I'm a Full Stack Web Developer with a background mostly outside of the
          tech industry so far, although I've had an interest in computers (both
          hardware and software) for as long as I can remember. I'm currently
          working on my portfolio, personal projects and learning new
          technologies like nextJS, Tailwind and languages like Typescript and
          PHP. I'm currently looking for a position where I can continue to hone
          my skillset in this space and learn new things. I've always got a few
          projects in the works so make sure to check back often to see what
          I've been working on, or check out my Github! I'm also open to any
          suggestions or feedback you might have, so feel free to reach out!
        </p>
        <div className="flex justify-center">
        </div>
      </main>
      <Navbar without="home" />
    </>
  );
}
