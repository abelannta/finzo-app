import React from "react";

function PricingCard({
  title,
  content,
  price,
  button,
  titleColor,
  contentColor,
}) {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-3">
        <h5
          className={`text-xl md:text-[28px] leading-10 font-medium ${titleColor}`}
        >
          {title}
        </h5>
        <p className={`text-sm md:text-base ${contentColor} leading-4`}>
          {content}
        </p>
      </div>
      <div className={`text-3xl md:text-[40px] font-medium ${titleColor}`}>
        ${price}{" "}
        <span className={`${contentColor} text-base md:text-lg font-medium`}>
          / month
        </span>
      </div>
      {button}
    </div>
  );
}

export default PricingCard;
