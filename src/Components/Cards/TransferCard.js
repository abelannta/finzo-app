import React from "react";
import { ButtonLightSmallFull, ButtonPrimarySmallFull } from "../Common/Button";
import { motion } from "framer-motion";

function TransferNotification() {
  return (
    <motion.div
      drag={true}
      dragSnapToOrigin={true}
      whileHover={{ scale: 1.025 }}
      className="bg-white py-3 md:py-5 rounded-xl w-52 md:w-96 shadow-lg cursor-grab"
    >
      <div className="flex justify-between items-center px-3 md:px-6">
        <div className="gap-2">
          <h3 className="font-medium text-base md:text-2xl">€750.00</h3>
          <h5 className="text-xs md:text-base">
            Send to <span className="text-primary">Emma Watson</span>
          </h5>
        </div>
        <div className="w-8 md:w-12 aspect-square bg-border rounded-full"></div>
      </div>
      <div className="my-4 w-full h-[0.2px] bg-border"></div>
      <div className="px-3 md:px-6">
        <p className="text-[8px] uppercase font-medium text-[#8D98AF]">Note</p>
        <div className="flex flex-col gap-3 mt-3">
          <div className="h-2 md:h-3 bg-border rounded-full w-44 md:w-64"></div>
          <div className="h-2 md:h-3 bg-border rounded-full w-44 md:w-52"></div>
        </div>
        <div className="flex mt-5 w-full gap-3">
          <div className="flex-1">
            <ButtonLightSmallFull text="Reject" />
          </div>
          <div className="flex-1">
            <ButtonPrimarySmallFull text="Accept" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default TransferNotification;
