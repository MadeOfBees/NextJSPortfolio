"use client";
import { Dialog } from "@headlessui/react";
import { useState } from "react";

type Props = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

type emailContents = {
  email: string;
  body: string;
  sender: string;
};

export default function ContactModal({ isOpen, setIsOpen }: Props) {
  const [emailContents, setEmailContents] = useState<emailContents>({
    email: "",
    body: "",
    sender: "",
  });

  const handleInputChange =
    (property: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setEmailContents({ ...emailContents, [property]: e.target.value });
    };

  const sendEmail = () => {
    if (emailContents.email && emailContents.body && emailContents.sender) {
      const { email, body, sender } = emailContents;
      const emailBody = `From: ${sender}\n${body}`;
      const emailSubject = "New message from your website!";
      const emailTo = "bee@gmail.com";
      const emailFrom = email;
      const emailFromName = sender;
      window.location.href = `mailto:${emailTo}?subject=${emailSubject}&body=${emailBody}`;
    } else {
      alert("Incomplete form, please fill out all 3 fields");
    }
  };

  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      className="fixed inset-0 flex justify-center items-center z-50"
    >
      <Dialog.Panel className="bg-[#EBEAED] flex flex-col space-y-4 rounded-2xl shadow-lg sm:px-[3rem]] sm:px-[2rem] px-[1rem] pb-[1rem] sm:pt-[2rem] sm:pb-[2rem]">
        <Dialog.Title className="text-3xl text font-bold hidden md:block">
          Let's work together!
        </Dialog.Title>
        <div className="text-sm font-bold hidden lg:block">Email</div>
        <input
          className="text-lg bg-white justify-center pl-6 py-3 rounded-xl border-2 border-solid items-start"
          placeholder="Your email"
          onChange={handleInputChange("email")}
        ></input>
        <div className=" text-sm font-bold mt-6 hidden lg:block">Message</div>
        <input
          className="text-lg bg-white pl-6 md:pb-28 py-3 rounded-xl border-2 border-solid items-start"
          placeholder="Your message"
          onChange={handleInputChange("body")}
        ></input>
        <div className="text-sm font-bold mt-5 hidden lg:block">Name</div>
        <div className="items-stretch flex flex-col md:flex-row justify-between gap-2.5 mt-1.5">
          <input
            className="text-lg bg-white justify-center pl-6 py-3 rounded-xl border-2 border-solid items-start"
            placeholder="Your name"
            onChange={handleInputChange("sender")}
          ></input>
          <div
            className="flex items-center justify-center bg-[#87A878] hover:bg-[#9ebd90] text-white px-5 rounded-xl text-xl font-bold cursor-pointer py-[0.5rem]"
            onClick={sendEmail}
          >
            Send
          </div>
        </div>
      </Dialog.Panel>
    </Dialog>
  );
}
