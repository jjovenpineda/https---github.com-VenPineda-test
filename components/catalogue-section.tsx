import React from "react";
import Image from "next/image";
import catalogLguImage from "../public/Images/catalog-lgu.jpg";
import catalogProjectImage from "../public/Images/catalog-projects.jpg";

export default function CatalogueSection() {
  return (
    <div className="mx-auto container">
      <div className="relative flex flex-row pt-[176px] gap-10 w-full items-center overflow-hidden ">
        <div
          className="border-dashed border-[#e5e7eb] w-[250px]  md:w-[50%] h-[662px] origin-top-left rotate-[-33.77deg] absolute top-[450px] border-4 rounded-[50%] "
          id="Ellipse"
        />
        <div className=" grid grid-cols-1 md:grid-cols-2 w-full ">
          <div className="relative flex flex-col w-full aligns-center">
            <Image
              src={catalogProjectImage}
              alt="project with people"
              className="w-full  h-[262px] md:h-[262px] lg:h-[399px] absolute top-0 left-0 rounded-xl mt-28 object-cover"
              id="Pexelsanamulrezwan"
              width={597}
              height={399}
            />
            <div className="bg-[linear-gradient(360deg,_rgba(0,_0,_0,_0.8)_0%,rgba(0,_0,_0,_0)_46%)] bg-cover bg-50%_50% bg-blend-normal bg-no-repeat relative flex flex-col justify-end gap-px  h-[262px] md:h-[262px] lg:h-[399px] shrink-0 items-start pl-10 py-10 rounded-lg mt-28">
              <div className="text-xl sm:text-2xl font-['Gilroy'] font-bold tracking-[0.12] text-white">
                Government Projects
              </div>
              <div className="text-sm font-['Gilroy'] font-semibold tracking-[0.07] leading-[20px] text-white">
                247 on record as of June 2023
              </div>
            </div>
          </div>
          <div className="relative md:self-start  flex flex-col-reverse md:flex-col mb-[205px] gap-6 md:gap-6 pt-6 md:pt-0   w-full">
            <div className="relative flex flex-col md:ml-4 lg:ml-14  ">
              <Image
                alt="Rizal park"
                src={catalogLguImage}
                className="w-full h-[262px] md:h-[332px] absolute top-0 left-0 rounded-xl object-cover"
                id="Pexelsjermaineboyles"
              />
              <div className="bg-[linear-gradient(360deg,_rgba(0,_0,_0,_0.8)_0%,rgba(0,_0,_0,_0)_46%)] bg-cover bg-50%_50% bg-blend-normal bg-no-repeat relative flex flex-col justify-end gap-1  h-[262px] md:h-[332px]  shrink-0 items-start pl-8  rounded-lg">
                <div className="mb-8">
                  <div className="text-xl sm:text-2xl font-['Gilroy'] font-bold tracking-[0.12] text-white">
                    List of LGUs
                  </div>
                  <div className="text-sm font-['Gilroy'] font-semibold tracking-[0.07] leading-[20px] text-white">
                    83 on record as of June 2023
                  </div>
                </div>
              </div>
            </div>

            <div
              className={`bg-[url(../public/Images/catalog-directory.jpg)] bg-cover object-cover  bg-50%_50% bg-blend-normal bg-no-repeat flex flex-col md:mr-10 lg:mr-32 md:ml-7 md:pb-px rounded-xl`}
            >
              <div className="bg-[linear-gradient(360deg,_rgba(0,_0,_0,_0.8)_0%,rgba(0,_0,_0,_0)_46%)] bg-cover bg-50%_50% bg-blend-normal bg-no-repeat flex flex-col justify-end h-[262px] md:h-64 shrink-0 items-start pl-6 py-8 rounded-lg ">
                <div className="text-xl sm:text-2xl font-['Gilroy'] font-bold tracking-[0.12] text-white">
                  Directory of Departments
                  <br />
                  and Agencies
                </div>
                <div className="text-sm font-['Gilroy'] font-semibold tracking-[0.07] leading-[20px] text-white">
                  932 on record as of June 2023
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
