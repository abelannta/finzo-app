import React from "react";

function CurrencyBadge({ text, icon }) {
  return (
    <div className="py-2 px-4 sm:py-4 sm:px-6 bg-white shadow-md rounded-xl flex justify-between items-center gap-3 sm:gap-5">
      <div className="flex flex-row items-center gap-3">
        <div className="flex items-center justify-center aspect-square w-10 sm:w-14 bg-border rounded-full">
          <img src={icon} alt="Currency Icon" className="w-6 sm:w-10" />
        </div>
        <div className="flex flex-col gap-3 animate-pulse">
          <div className="h-2 sm:h-3 bg-border rounded-full w-16 sm:w-24"></div>
          <div className="h-2 sm:h-3 bg-border rounded-full w-8 sm:w-16"></div>
        </div>
      </div>
      <h3 className="font-medium whitespace-nowrap text-sm sm:text-2xl">
        {text}
      </h3>
    </div>
  );
}

export default CurrencyBadge;
