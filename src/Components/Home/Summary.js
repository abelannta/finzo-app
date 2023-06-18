import React from "react";
import Ellipses from "../Background/Ellipses";
import { InView } from "../../Animation/InView";

function Summary() {
  return (
    <div className="py-20">
      <InView>
        <div className="bg-primary rounded-3xl py-24 px-10 md:px-48 text-white relative overflow-hidden">
          <div className="flex flex-col gap-28 lg:gap-10 lg:flex-row justify-between items-center">
            <div className="flex flex-col items-center gap-2 md:gap-5 text-center">
              <h1 className="text-4xl md:text-[56px] font-medium">75K+</h1>
              <p className="text-md md:text-xl">Satisfied users globally</p>
            </div>
            <div className="flex flex-col items-center gap-2 md:gap-5 text-center">
              <h1 className="text-4xl md:text-[56px] font-medium">12%</h1>
              <p className="text-md md:text-xl">Benefical Cashback</p>
            </div>
            <div className="flex flex-col items-center gap-2 md:gap-5 text-center">
              <h1 className="text-4xl md:text-[56px] font-medium">190+</h1>
              <p className="text-md md:text-xl">Countries supported</p>
            </div>
          </div>
          <div className="absolute -top-32 right-16 rotate-[70deg]">
            <Ellipses borderColor="border-[#CCE8C94D]" />
          </div>
        </div>
      </InView>
    </div>
  );
}

export default Summary;
