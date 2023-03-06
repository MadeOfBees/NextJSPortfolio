import { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Modal(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = () => setIsOpen(!isOpen);

  return (
    <>
      <input
        type="checkbox"
        id="contactModal"
        className="modal-toggle"
        checked={isOpen}
        onChange={toggleModal}
      />
      <label htmlFor="contactModal" className="modal cursor-pointer">
        <div className="modal-box relative">
          <div className="flex flex-col justify-start">
            <div className="flex flex-row justify-between items-center w-full h-12">
              <p className="font-bold text-3xl mt-5">Contact Me:</p>
              <div className="modal-action">
                <label
                  htmlFor="contactModal"
                  className="btn-square btn-primary flex justify-center items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </label>
              </div>
            </div>

            <p className="text-base mt-8 flex flex-row items-center">
              <FaEnvelope />
              ⠀My Email:
            </p>
            <a
              href="mailto:imMadeOfBees@gmail.com"
              target="_blank"
              className="link link-primary"
            >
              ImMadeOfBees@gmail.com
            </a>
            <p className="text-base mt-4 flex flex-row items-center">
              <FaLinkedin />
              ⠀My LinkedIn:
            </p>
            <a
              href="http://www.linkedin.com/in/MadeOfBees"
              target="_blank"
              className="link link-primary"
            >
              linkedin.com/in/MadeOfBees
            </a>
            <p className="text-base mt-4 flex flex-row items-center">
              <FaGithub />
              ⠀My Github:
            </p>
            <a
              href="http://www.github.com/MadeOfBees"
              target="_blank"
              className="link link-primary mb-4"
            >
              github.com/MadeOfBees
            </a>
          </div>
        </div>
      </label>
    </>
  );
}
