import React from "react";

export default function ContactDetails() {
  return (
    <div>
      <h3 className="font-bold text-lg">Contact me:</h3>
      <p className="text-base">
        My Email:{" "}
        <a
          href="mailto:imMadeOfBees@gmail.com"
          target="_blank"
          className="text-blue-500"
        >
          ImMadeOfBees@gmail.com
        </a>
      </p>
      <p className="text-base">
        My LinkedIn:{" "}
        <a
          href="http://www.linkedin.com/in/MadeOfBees"
          target="_blank"
          className="text-blue-500"
        >
          linkedin.com/in/MadeOfBees
        </a>
      </p>
      <p className="text-base">
        My GitHub:{" "}
        <a
          href="http://www.github.com/MadeOfBees"
          target="_blank"
          className="text-blue-500"
        >
          github.com/MadeOfBees
        </a>
      </p>
      <div className="modal-action">
        <label htmlFor="contactModal" className="btn">
          Close
        </label>
      </div>
    </div>
  );
}
