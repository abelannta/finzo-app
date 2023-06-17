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
        <h5 className={`text-[28px] leading-10 font-medium ${titleColor}`}>
          {title}
        </h5>
        <p className={`text-base ${contentColor} leading-6`}>{content}</p>
      </div>
      <div className={`text-[40px] font-medium ${titleColor}`}>
        ${price}{" "}
        <span className={`${contentColor} text-lg font-medium`}>/ month</span>
      </div>
      {button}
    </div>
  );
}

export default PricingCard;
