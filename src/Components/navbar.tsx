import React from "react";
import Link from "next/link";

interface NavbarProps {
  without?: string;
}

export default function Navbar({ without }: NavbarProps) {
  const [projectNames, setProjectNames] = React.useState([]);
  const [newProjectNames, setNewProjectNames] = React.useState([]);

  React.useEffect(() => {
    fetch("/projects.json")
      .then((response) => response.json())
      .then((data) => {
        const newProjects = data.filter((item: { new: boolean }) => item.new);
        setProjectNames(data.map((item: { name: string }) => item.name));
        setNewProjectNames(
          newProjects.map((item: { name: string }) => item.name)
        );
      });
  }, []);
  console.log(without);

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
