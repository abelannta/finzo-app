import React from "react";

function BenefitCard({ title, content, icon }) {
  return (
    <div className="cols-span-1 flex flex-col gap-6">
      <div className="w-14 h-14 text-primary text-2xl rounded-full bg-secondary flex items-center justify-center">
        {icon}
      </div>
      <div className="flex flex-col gap-3">
        <h4 className="text-lg md:text-2xl leading-9 font-medium">{title}</h4>
        <p className="text-base md:text-xl leading-7 text-paragraph">
          {content}
        </p>
      </div>
    </div>
  );
}

export default BenefitCard;
