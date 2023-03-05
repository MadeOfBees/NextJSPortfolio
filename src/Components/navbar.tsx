import React from "react";
import Link from "next/link";

interface NavbarProps {
  without?: string;
}

export default function Navbar({ without }: NavbarProps) {
  const [projectNames, setProjectNames] = React.useState([]);
  const [newProjectNames, setNewProjectNames] = React.useState([]);

  const getPages = async (): Promise<void> => {
    const response = await fetch("/api/projects/");
    const data = await response.json();
    if (data && data.projects) {
      const pageNames = data.projects.map(
        (project: { name: string }) => project.name
      );
      const newPageNames = data.projects
        .filter((project: { new: boolean }) => project.new === true)
        .map((project: { name: string }) => project.name);
      setProjectNames(pageNames);
      setNewProjectNames(newPageNames);
      console.log("pageNames", pageNames);
    }
  };

  React.useEffect(() => {
    getPages();
  }, []);

  return (
    <nav className="btm-nav bg-base-300">
      {without !== "home" ? (
        <button>
          <Link href="/">
            <span className="btm-nav-label">Home</span>
          </Link>
        </button>
      ) : (
        <button disabled>
          <span className="btm-nav-label">Home</span>
        </button>
      )}
      <button className="dropdown dropdown-top">
        <label className="btm-nav-label">Projects</label>
        <ul tabIndex={0} className="dropdown-content menu bg-base-200 w-full">
          {projectNames.map((projectName: string) => (
            <li key={projectName}>
              <Link href={`/projects/${projectName}`}>
                <p className="menu-item">{projectName}</p>
              </Link>
            </li>
          ))}
        </ul>
      </button>
      <button>
        <label htmlFor="contactModal">
          <span className="btm-nav-label">Contact</span>
        </label>
      </button>
    </nav>
  );
}
