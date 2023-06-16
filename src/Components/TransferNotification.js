import React from "react";
import { ButtonLightSmallFull, ButtonPrimarySmallFull } from "./Button";

function TransferNotification() {
  return (
    <div className="bg-white py-5 rounded-xl w-96 shadow-lg">
      <div className="flex justify-between items-center px-6">
        <div className="gap-2">
          <h3 className="font-medium">€750.00</h3>
          <h5>Send to Emma Watson</h5>
        </div>
        <div className="w-12 aspect-square bg-border rounded-full"></div>
      </div>
      <div className="my-4 w-full h-[0.2px] bg-border"></div>
      <div className="px-6">
        <p className="text-[8px] uppercase font-medium text-[#8D98AF]">Note</p>
        <div className="flex flex-col gap-3 mt-3">
          <div class="h-3 bg-border rounded-full w-64"></div>
          <div class="h-3 bg-border rounded-full w-52"></div>
        </div>
        <div className="flex gap-5 mt-5">
          <div className="flex-1">
            <ButtonLightSmallFull text="Reject" />
          </div>
          <div className="flex-1">
            <ButtonPrimarySmallFull text="Accept" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TransferNotification;
