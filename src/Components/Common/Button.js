import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

export function ButtonLightSmall({ text, arrow }) {
  return (
    <button className="btn capitalize font-normal px-6 lg:px-8 py-2 lg:py-2.5 bg-white text-primary text-xs lg:text-base border border-border rounded-xl w-fit">
      {text}
      {arrow ? (
        <span className="ml-2">
          <FiArrowUpRight />
        </span>
      ) : null}
    </button>
  );
}

export function ButtonLightSmallFull({ text, arrow }) {
  return (
    <button className="btn capitalize font-normal px-6 lg:px-8 py-2 lg:py-2.5 bg-white text-primary text-xs border border-border rounded-xl w-full">
      {text}
      {arrow ? (
        <span className="ml-2">
          <FiArrowUpRight />
        </span>
      ) : null}
    </button>
  );
}

export function ButtonLightBig({ text, arrow }) {
  return (
    <button className="btn capitalize font-normal px-6 lg:px-8 py-2 lg:py-3 bg-white text-primary border text-xs lg:text-base border-border rounded-xl w-fit">
      {text}
      {arrow ? (
        <span className="ml-2">
          <FiArrowUpRight />
        </span>
      ) : null}
    </button>
  );
}

export function ButtonLightBigFull({ text, arrow }) {
  return (
    <button className="btn capitalize font-normal px-6 lg:px-8 py-2 lg:py-3 bg-white text-primary text-xs lg:text-base border border-border rounded-xl w-full">
      {text}
      {arrow ? (
        <span className="ml-2">
          <FiArrowUpRight />
        </span>
      ) : null}
    </button>
  );
}

export function ButtonPrimarySmall({ text, arrow }) {
  return (
    <button className="btn capitalize font-normal px-6 lg:px-8 py-2 lg:py-2.5 bg-primary hover:bg-[#296b6bac] text-xs lg:text-base rounded-xl text-white w-fit">
      {text}
      {arrow ? (
        <span className="ml-2">
          <FiArrowUpRight />
        </span>
      ) : null}
    </button>
  );
}

export function ButtonPrimarySmallFull({ text, arrow }) {
  return (
    <button className="btn capitalize font-normal px-6 lg:px-8 py-2 lg:py-2.5 text-xs bg-primary hover:bg-[#296b6bac] rounded-xl text-white w-full">
      {text}
      {arrow ? (
        <span className="ml-2">
          <FiArrowUpRight />
        </span>
      ) : null}
    </button>
  );
}

export function ButtonPrimaryBig({ text, arrow }) {
  return (
    <button className="btn capitalize font-normal px-6 lg:px-8 py-2 lg:py-3 bg-primary hover:bg-[#296b6bac] text-xs lg:text-base rounded-xl text-white w-fit">
      {text}
      {arrow ? (
        <span className="ml-2">
          <FiArrowUpRight />
        </span>
      ) : null}
    </button>
  );
}

export function ButtonPrimaryBigFull({ text, arrow }) {
  return (
    <button className="btn capitalize font-normal px-6 lg:px-8 py-2 lg:py-3 bg-primary hover:bg-[#296b6bac] text-xs lg:text-base rounded-xl text-white w-fit">
      {text}
      {arrow ? (
        <span className="ml-2">
          <FiArrowUpRight />
        </span>
      ) : null}
    </button>
  );
}

export function ButtonSecondarySmall({ text, arrow }) {
  return (
    <button className="btn capitalize font-normal px-6 lg:px-8 py-2 lg:py-2.5 bg-secondary text-primary text-xs lg:text-base rounded-xl w-fit">
      {text}
      {arrow ? (
        <span className="ml-2">
          <FiArrowUpRight />
        </span>
      ) : null}
    </button>
  );
}
