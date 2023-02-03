// navbar compponent for next.js app that returns a navbar that's blank for now

import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost">
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li tabIndex={0}>
              <span>Themes</span>
              <ul className="bg-base-100">
                <li>
                  <a>Dark</a>
                </li>
                <li>
                  <a>Light</a>
                </li>
                <li>
                  <a>Dracula</a>
                </li>
                <li>
                  <a>Cyberpunk</a>
                </li>
                <li>
                  <a>Other</a>
                </li>
              </ul>
            </li>
            <li tabIndex={0}>
              <span>Projects</span>
              <ul className="bg-base-100">
                <li>
                  <a>Project 1</a>
                </li>
                <li>
                  <a>Project 2</a>
                </li>
                <li>
                  <a>Project 3</a>
                </li>
                <li>
                  <a>Project 4</a>
                </li>
                <li>
                  <a>Project 5</a>
                </li>
                <li>
                  <a>Project 6</a>
                </li>
              </ul>
            </li>
            <li tabIndex={0}>
              <span>Find me on</span>
              <ul className="bg-base-100">
                <li>
                  <a href="http://www.github.com/MadeOfBees">Github</a>
                </li>
                <li>
                  <a href="http://www.linkedin.com">LinkedIn</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">Bee's portfolio</a>
      </div>
      <div className="navbar-end">
        <a className="btn">Contact me</a>
      </div>
    </nav>
  );
}
