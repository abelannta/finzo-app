import React from "react";
import Ellipses from "../Background/Ellipses";
import TransferNotification from "../Cards/TransferCard";
import CurrencyBadge from "../Common/CurrencyBadge";
import amazonIcon from "../../assets/amazon.svg";
import Badge from "../Common/Badge";
import { ButtonPrimaryBig } from "../Common/Button";
import { InView } from "../../Animation/InView";

function Payment() {
  return (
    <div className="py-20 px-10">
      <InView>
        <div className="flex flex-col lg:flex-row-reverse gap-12">
          <div className="flex-1 md:px-16">
            <div className="w-full aspect-square bg-primary rounded-3xl relative">
              <div className="w-full h-full relative overflow-hidden">
                <div className="absolute -bottom-40 -right-60 rotate-[-100deg]">
                  <Ellipses
                    borderColor="border-[#CCE8C94D]"
                    scale="scale-[0.55]"
                  />
                </div>
              </div>
              <div className="absolute -top-10 md:top-12 -right-4 md:-left-16">
                <TransferNotification />
              </div>
              <div className="absolute bottom-4 md:bottom-12 -left-4 md:right-10">
                <CurrencyBadge text="+ €40.0" icon={amazonIcon} />
              </div>
            </div>
          </div>
          <div className="flex flex-1 flex-col justify-center">
            <Badge text="Payment" />
            <h1 className="font-medium text-3xl md:text-5xl leading-9 md:leading-[57px] my-6">
              Sending money, easy by the default
            </h1>
            <p className="text-sm md:text-lg leading-5 md:leading-7 font-normal text-paragraph max-w-[488px] mb-8">
              Moving money should never take more than a few taps. Transfers are
              always free between friends.
            </p>
            <ButtonPrimaryBig text="Learn More" arrow={true} />
          </div>
        </div>
      </InView>
    </div>
  );
}

export default Payment;
