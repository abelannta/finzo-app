import React from "react";
import Ellipses from "../Background/Ellipses";
import CurrencyBadge from "../Common/CurrencyBadge";
import ukIcon from "../../assets/uk.svg";
import sgIcon from "../../assets/singapore.svg";
import gmIcon from "../../assets/germany.svg";
import Badge from "../Common/Badge";
import { ButtonPrimaryBig } from "../Common/Button";

function Currency() {
  return (
    <div className="py-20 px-10">
      <div className="flex flex-col lg:flex-row gap-12">
        <div className="flex-1 md:px-16">
          <div className="w-full aspect-square bg-secondary rounded-3xl relative">
            <div className="w-full h-full relative overflow-hidden">
              <div className="absolute -bottom-64 -left-32 rotate-[-40deg]">
                <Ellipses borderColor="border-white" scale="scale-[0.55]" />
              </div>
            </div>
            <div className="absolute top-10 -right-10 md:right-12">
              <CurrencyBadge text="+ €81.5" icon={ukIcon} />
            </div>
            <div className="absolute top-28 md:top-44 -left-14 md:-left-14">
              <CurrencyBadge text="+ $30.1" icon={sgIcon} />
            </div>
            <div className="absolute bottom-8 md:bottom-12 -right-4 md:-right-16">
              <CurrencyBadge text="+ €40.0" icon={gmIcon} />
            </div>
          </div>
        </div>
        <div className="flex flex-1 flex-col justify-center">
          <Badge text="Currency" />
          <h1 className="font-medium text-3xl md:text-5xl leading-9 md:leading-[57px] my-6">
            Hold and send money in 190+ currencies
          </h1>
          <p className="text-sm md:text-lg leading-5 md:leading-7 font-normal text-paragraph max-w-[488px] mb-8">
            Create an account for your chosen currency in seconds. Get great
            prices with limit and stop orders
          </p>
          <ButtonPrimaryBig text="Learn More" arrow={true} />
        </div>
      </div>
    </div>
  );
}

export default Currency;
