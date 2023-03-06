import React from "react";
import { useRouter, NextRouter } from "next/router";
import Head from "next/head";
import Navbar from "../../Components/navbar";

const ProjectPage = () => {
  const router: NextRouter = useRouter();
  const idString: string = router.query.id as string;
  const [pageHeader, setPageHeader] = React.useState("");
  const [pageContent, setPageContent] = React.useState("");
  const [pageImage, setPageImage] = React.useState("");
  const [githubLink, setGithubLink] = React.useState("");
  const [deployedLink, setDeployedLink] = React.useState("");

  React.useEffect(() => {
    if (idString === undefined) return;
    fetchProject();
  }, [idString]);

  const fetchProject = async () => {
    setPageHeader(idString);
    fetch(`/api/projects/populatePage`, {
      method: "POST",
      body: JSON.stringify({ name: idString }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setPageContent(data.project.pageContent);
        setPageImage(`/images/${data.project.image}`);
        setGithubLink(data.project.githubLink);
        setDeployedLink(data.project.deployedLink);
      });
  };

  return (
    <>
      <Head>
        <title>Bee's Portfolio</title>
        <meta name="description" content={idString} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col items-center justify-center mb-20 mt-8">
        <h1 className="text-5xl font-bold text-center mb-8">{pageHeader}</h1>
        <div
          className="w-3/4 h-3/4 md:w-1/2 md:h-1/2 lg:w-1/3 lg:h-1/3 xl:w-1/4 xl:h-1/4"
          style={{ maxWidth: "500px" }}
        >
          <img
            className="w-full h-full object-cover"
            src={pageImage}
            alt={pageHeader}
          />
        </div>
        <p className="p-6" style={{ textIndent: "2em" }}>
          {pageContent}
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center">
          <div className="p-2 m-2" style={{ textAlign: "center" }}>
            Github Link:
            <br />
            <a href={githubLink}>{githubLink}</a>
          </div>
          {deployedLink ? (
            <div className="p-2 m-2" style={{ textAlign: "center" }}>
              Deployed Link:
              <br />
              <a href={deployedLink}>{deployedLink}</a>
            </div>
          ) : null}
        </div>
      </main>
      <Navbar without={idString} />
    </>
  );
};

export default ProjectPage;
