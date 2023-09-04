import React from "react";
import Image from "next/image";
import eParticipationImage from "../public/Images/eparticipation-image.jpg";
import { BsPencil } from "react-icons/bs";

const visitorFeedback = () => {
  return (
    <div>
      {" "}
      <section className="grid grid-cols-1 sm:grid-cols-2">
        <Image
          className=" h-full object-cover"
          src={eParticipationImage}
          alt="e Participation image"></Image>
        <div className="   w-full bg-[#469ce5] p-4 sm:p-10 ">
          <h2 className="text-[#0E3467] text-sm font-normal ">
            Help us Improve the GOVPH
          </h2>
          <h1 className="text-[#0E3467] text-4xl font-black">
            e-Participation in the Philippines
          </h1>
          <p className="text-md font-normal text-[#0E3467] max-w-[580px] max-h-min pt-6">
            The <a className="underline">GOV.PH </a>Participation Tool is a
            platform that caters to all the suggestions, comments, and
            recommendations of the users regarding the content, design,
            usability and effectiveness of the portal. This aims to consult and
            encourage the Filipino people and other users to participate in the
            creation of a national portal that best suits their needs. In this
            form, the user will be asked to (1) rate the{" "}
            <a className="underline">GOV.PH</a> using the Likert scale, (2)
            leave any recommendations or suggestions they would like to see on
            the national portal, and (3) provide their short user profile.
          </p>
          <div className="pt-7 sm:pt-12 text-current">
            <button className="text-base w-40 h-11 border rounded-full flex items-center justify-center gap-1 text-white">
              Send Feedback
              <BsPencil />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default visitorFeedback;
