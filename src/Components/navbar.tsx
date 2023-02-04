import React from "react";
import Link from "next/link";

interface NavbarProps {
  without?: string;
}

export default function Navbar({ without }: NavbarProps) {
  const [currentTheme, setCurrentTheme] = React.useState("dracula");
  const themes = [
    "light",
    "cyberpunk",
    "dark",
    "cupcake",
    "nord",
    "retro",
    "synthwave",
    "dracula",
  ];

  const cycleTheme = () => {
    const currentThemeIndex = themes.indexOf(currentTheme);
    const nextTheme = themes[(currentThemeIndex + 1) % themes.length];
    setCurrentTheme(nextTheme);
    document.documentElement.setAttribute("data-theme", nextTheme);
  };
  const [projectNames, setProjectNames] = React.useState([]);
  React.useEffect(() => {
    fetch("/projects.json")
      .then((response) => response.json())
      .then((data) =>
        setProjectNames(data.map((item: { name: string }) => item.name))
      );
  }, []);

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
            className="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <Link href="/">
                <p>Home</p>
              </Link>
            </li>
            {projectNames.map((project, index) => (
              <li key={index} className={without === project ? "disabled" : ""}>
                <Link href={`/projects/${project}`}>
                  <p>{project}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl" onClick={cycleTheme}>
          Bee's portfolio
        </a>
      </div>
      <div className="navbar-end">
        <label htmlFor="contactModal" className="btn">
          Contact me
        </label>
      </div>
    </nav>
  );
}
