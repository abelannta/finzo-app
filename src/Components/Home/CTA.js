import React from "react";
import Ellipses from "../Background/Ellipses";
import { ButtonPrimarySmall, ButtonLightSmall } from "../Common/Button";
import TransactionCard from "../Cards/TransactionCard";
import CurrencyBadge from "../Common/CurrencyBadge";
import gmIcon from "../../assets/germany.svg";

function CTA() {
  return (
    <div className="py-20">
      <div className="flex flex-col lg:flex-row justify-between bg-secondary p-10 md:p-24 rounded-3xl gap-10 lg:gap-0 relative overflow-hidden">
        <div className="absolute -top-40 left-96 rotate-[45deg]">
          <Ellipses borderColor="border-[#1D636333]" scale="scale-[0.55]" />
        </div>
        <div className="flex-1">
          <div className="max-w-md mb-8">
            <h1 className="font-medium text-3xl md:text-5xl leading-9 md:leading-[57px] mb-6">
              Join million people who already trust us
            </h1>
            <p className="text-sm md:text-lg leading-5 md:leading-7 font-normal max-w-md text-paragraph mb-8">
              Easy and fast international business account that saves you money
              wherever you want to use it.
            </p>
          </div>
          <div className="flex gap-5">
            <ButtonPrimarySmall text="Open Account" />
            <ButtonLightSmall text="Book a demo" />
          </div>
        </div>
        <div className="flex flex-1 items-center justify-center w-full h-fit relative">
          <TransactionCard />
          <div className="absolute -left-10 md:-left-20 bottom-10 md:-bottom-10">
            <CurrencyBadge text="+ €40.0" icon={gmIcon} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CTA;
