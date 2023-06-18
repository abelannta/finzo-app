import React from "react";
import openAI from "../../assets/OpenAI svg.svg";
import raycast from "../../assets/Raycast svg.svg";
import ramp from "../../assets/Ramp svg.svg";
import mainImg from "../../assets/mainImg.png";
import Badge from "../Common/Badge";
import { ButtonPrimaryBig, ButtonLightBig } from "../Common/Button";
import TransactionCard from "../Cards/TransactionCard";

function Intro() {
  return (
    <div className="py-28 pt-40 px-0 md:px-10">
      <div className="flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1">
          <div className="mb-10">
            <Badge text="Modern Bank" />
            <h1 className="font-semibold text-4xl md:text-[64px] leading-9 md:leading-[80px] my-6">
              We're building the future banking just for you
            </h1>
            <p className="text-base md:text-xl leading-6 md:leading-7 font-normal text-paragraph max-w-[488px]">
              Easy and fast international business account that saves you money
              wherever you want to use it.
            </p>
          </div>
          <div className="flex gap-4 mb-14">
            <ButtonPrimaryBig text="Get Started Now" />
            <ButtonLightBig text="Learn More" />
          </div>
          <div>
            <p className="uppercase text-[#8793AB] text-xs md:text-base mb-8">
              TRUSTED BY COMPANY ACROSS THE WORLD
            </p>
            <div className="flex gap-8">
              <img src={openAI} className="w-20 md:w-auto" />
              <img src={raycast} className="w-20 md:w-auto" />
              <img src={ramp} className="w-20 md:w-auto" />
            </div>
          </div>
        </div>
        <div className="hidden md:flex justify-center flex-1">
          <div className="relative">
            <img
              src={mainImg}
              className="object-cover rounded-xl w-[437px] h-[520px]"
            />
            <div className="absolute -bottom-16 -left-28 z-2">
              <TransactionCard />
            </div>
            <div className="absolute -bottom-[72px] -left-28 -z-10">
              <div className="rounded-xl bg-secondary w-[400px] p-6"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intro;
