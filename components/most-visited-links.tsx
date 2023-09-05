import React from "react";
import { GiPlainCircle } from "react-icons/gi";
import { BsArrowLeft } from "react-icons/bs";
import Link from "next/link";

const mostVisitedLinks = () => {
  return (
    <div>
      <section className="grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 gap-8 bg-[#ffffff] m-4 lg:m-10 sm:m-4">
        <h1 className="text-[#000000] font-['Gilroy'] lg:col-span-3 md:col-span-2 sm:col-span-2 flex font-bold text-xl gap-2 ">
          Most Visited Links
        </h1>
        <div className="max-w-xs flex flex-col gap-1.5 ">
          <Link href="#" className="--title">
            Schedule Passport Application Appointment
          </Link>

          <a className="text-[#6B7280] text-xs">
            https://www.passport.gov.ph/appointment
          </a>

          <div className="--tag-action">
            <GiPlainCircle className="h-[6px] w-[6px] " />
            Passport & Travel
          </div>
        </div>

        <div className="flex flex-col gap-1.5">
          <Link href="#" className="--title">
            Register and Apply Online for NBI Clearance
          </Link>

          <a className="text-[#6B7280] text-xs">
            https://clearance.nbi.gov.ph/
          </a>

          <div className="--tag-action ">
            <GiPlainCircle className="h-[6px] w-[6px] " />
            Certificates & IDs
          </div>
        </div>

        <div className="flex flex-col gap-1.5 ">
          <Link href="#" className="--title">
            Register as SSS Member
          </Link>

          <p className="text-[#6B7280] text-xs break-words">
            https://www.sss.gov.ph/sss/appmanager/viewArticle.jsp?...
          </p>

          <div className="--tag-action">
            <GiPlainCircle className="h-[6px] w-[6px] " />
            Contributions
          </div>
        </div>

        <div className=" flex flex-col gap-1.5">
          <Link href="#" className="--title ">
            Register to the Philippine Identification System (PhilSys), or
            National ID
          </Link>

          <a className="text-[#6B7280] text-xs">
            https://maintenance.register.philsys.gov.ph/
          </a>

          <div className="--tag-action">
            <GiPlainCircle className="h-[6px] w-[6px] " />
            Certificates & IDs
          </div>
        </div>

        <div className=" flex flex-col gap-1.5">
          <Link href="#" className="--title">
            Register your Business through the Philippines Business Hub
          </Link>

          <a className="text-[#6B7280] text-xs">https://business.gov.ph/home</a>

          <div className="--tag-action">
            <GiPlainCircle className="h-[6px] w-[6px] " />
            Business & Trade
          </div>
        </div>

        <div className="flex flex-col gap-1.5">
          <Link href="#" className="--title ">
            Request for a Birth Certificate via PSA Serbilis
          </Link>

          <a className="text-[#6B7280] text-xs break-words">
            https://www.psaserbilis.com.ph/Census/BirthCertificate
          </a>

          <div className="--tag-action">
            <GiPlainCircle className="h-[6px] w-[6px] " />
            Certificates & IDs
          </div>
        </div>

        <Link
          href="#"
          className="text-[#3B82F6]  flex justify-center items-center text-sm gap-2 lg:col-span-3 md:col-span-2 sm:col-span-2"
        >
          See full list of Services from A-Z
          <BsArrowLeft className="rotate-180" />
        </Link>
      </section>
    </div>
  );
};

export default mostVisitedLinks;
