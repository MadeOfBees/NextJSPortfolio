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
      const pageNames = data.projects.map((project: { name: string }) => project.name);
      const newPageNames = data.projects
        .filter((project: { new: boolean }) => project.new === true)
        .map((project: { name: string }) => project.name);
      setProjectNames(pageNames);
      setNewProjectNames(newPageNames);
    }
  };
  
  React.useEffect(() => {
    getPages();
  }, []);

  return (
    <nav className="btm-nav">
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
      <button>
        <span className="btm-nav-label">Projects</span>
      </button>
      <button>
        <span className="btm-nav-label">Contact Me</span>
      </button>
    </nav>
  );
}
