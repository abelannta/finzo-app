import React from "react";
import Badge from "../Common/Badge";
import PricingCard from "../Cards/PricingCard";
import { ButtonPrimarySmallFull, ButtonLightSmallFull } from "../Common/Button";
import FAQList from "../FAQ/FAQList";

function Pricing() {
  return (
    <div className="py-20">
      <div className="flex flex-col items-center justify-center gap-4 mb-16">
        <Badge text="Pricing" />
        <h1 className="font-medium text-3xl md:text-5xl leading-9 md:leading-[57px] max-w-lg">
          Plans for every budget
        </h1>
        <p className="text-sm md:text-lg text-center leading-5 md:leading-7 font-normal max-w-sm text-paragraph ">
          Whether you're a small business, or a large corporation, we have a
          plan that's right for you.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="col-span-1 p-10 rounded-3xl shadow-md">
          <PricingCard
            title="Personal"
            titleColor="text-primary"
            content="Built-in budgeting and get more from your money with our Standard account."
            contentColor="text-paragraph"
            price="0"
            button={<ButtonPrimarySmallFull text="Try for Free" />}
          />
        </div>
        <div className="flex flex-col lg:flex-row divide-y lg:divide-x lg:divide-y-0 col-span-1 md:col-span-2 py-10 rounded-3xl bg-primary text-white">
          <div className="flex-1 md:px-12 px-10 lg:py-0 pb-12">
            <PricingCard
              title="Business"
              titleColor="text-white"
              content="Give your everyday finances a boost. Get more out of your money for less."
              contentColor="text-[#FFFFFFA3]"
              price="29"
              button={<ButtonLightSmallFull text="Get Started" />}
            />
          </div>
          <div className="flex-1 md:px-12 px-10 lg:py-0 pt-12">
            <p className="text-sm uppercase text-[#FFFFFFA3] mb-5">Features</p>
            <ul className="flex flex-col list-disc list-outside list-image-checkmark gap-5 text-xs md:text-base leading-4 md:leading-6">
              <li>No payments back-office needed</li>
              <li>Faster implementation and global roll-out</li>
              <li>48 hour support response time</li>
              <li>Always benefit from the best rates and features</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-24 flex flex-col items-center justify-center">
        <h1 className="font-medium text-[40px] leading-[48px] mb-10">FAQ</h1>
        <FAQList />
      </div>
    </div>
  );
}

export default Pricing;
