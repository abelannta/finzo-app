import React from "react";
import Ellipses from "../Background/Ellipses";
import { ButtonPrimarySmall } from "../Common/Button";
import BenefitCard from "../Cards/BenefitCard";
import { BiLock, BiUserCircle } from "react-icons/bi";
import { BsPersonLock } from "react-icons/bs";
import { HiOutlineBuildingLibrary } from "react-icons/hi2";
import { InView } from "../../Animation/InView";

function Value() {
  return (
    <div className="py-20">
      <InView>
        <div className="p-10 lg:p-24 bg-[#F9FBFB] rounded-3xl flex flex-col gap-20 lg:flex-row lg:gap-0 relative overflow-hidden">
          <div className="absolute -bottom-56 right-72 rotate-[-90deg]">
            <Ellipses borderColor="border-secondary" scale="scale-[0.8]" />
          </div>
          <div className="flex-1 flex flex-col justify-between z-10">
            <div className="max-w-sm">
              <h1 className="font-medium text-3xl md:text-5xl leading-9 md:leading-[57px] mb-6">
                We are a strategic choice
              </h1>
              <p className="text-sm md:text-lg leading-5 md:leading-7 font-normal max-w-xs text-paragraph mb-8">
                We’re on a mission to bring transparency to finance and show you
                upfront.
              </p>
            </div>
            <ButtonPrimarySmall text="Watch Video Guide" />
          </div>
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-16 z-10">
            <BenefitCard
              icon={<BiLock />}
              title="Security Teams"
              content="Security teams work to keep your money safe"
            />
            <BenefitCard
              icon={<BsPersonLock />}
              title="Authentication"
              content="We use top uthentication to protect your account"
            />
            <BenefitCard
              icon={<HiOutlineBuildingLibrary />}
              title="Safety Funds"
              content="Hold money with established financial institutions"
            />
            <BenefitCard
              icon={<BiUserCircle />}
              title="Account Place"
              content="Place all your account, all in one place"
            />
          </div>
        </div>
      </InView>
    </div>
  );
}

export default Value;
