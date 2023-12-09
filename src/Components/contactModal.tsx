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
    const { email, body, sender } = emailContents;
    const emailBody = `From: ${sender}\n${body}`;
    const emailSubject = "New message from your website!";
    const emailTo = "bee@gmail.com";
    const emailFrom = email;
    const emailFromName = sender;
    console.log(emailBody, emailSubject, emailTo, emailFrom, emailFromName);
  };

  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      className="fixed inset-0 overflow-y-auto flex justify-center items-center"
    >
      <Dialog.Panel className="bg-[#EBEAED] flex flex-col space-y-4 rounded shadow-lg px-[3rem] py-[2rem]">
        <Dialog.Title className="font-bold whitespace-nowrap">
          Let's work together!
        </Dialog.Title>
        <div className="flex flex-col space-y-4">
          <div className="">Email</div>
          <input
            className="rounded"
            placeholder="Your email"
            onChange={handleInputChange("email")}
          ></input>
          <div className="">Message</div>
          <input
            className="rounded"
            placeholder="Your message"
            onChange={handleInputChange("body")}
          ></input>
          <div className="">Name</div>
          <div className="flex flex-row justify-between">
            <input
              className="rounded"
              placeholder="Your name"
              onChange={handleInputChange("sender")}
            ></input>
            <button
              className="bg-[#87A878] text-white rounded items-center justify-end"
              onClick={sendEmail}
            >
              Send
            </button>
          </div>
        </div>
      </Dialog.Panel>
    </Dialog>
  );
}
