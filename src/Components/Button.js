import React from "react";

export function ButtonLightSmall({ text, arrow }) {
  return (
    <button className="btn px-8 py-2.5 bg-white text-primary border border-border rounded-xl w-fit">
      {text}
    </button>
  );
}

export function ButtonLightSmallFull({ text, arrow }) {
  return (
    <button className="btn px-8 py-2.5 bg-white text-primary text-xs border border-border rounded-xl w-full">
      {text}
    </button>
  );
}

export function ButtonLightBig({ text, arrow }) {
  return (
    <button className="btn px-8 py-4 bg-white text-primary border border-border rounded-xl w-fit">
      {text}
    </button>
  );
}

export function ButtonLightBigFull({ text, arrow }) {
  return (
    <button className="btn px-8 py-4 bg-white text-primary border border-border rounded-xl w-full">
      {text}
    </button>
  );
}

export function ButtonPrimarySmall({ text, arrow }) {
  return (
    <button className="btn px-8 py-2.5 bg-primary rounded-xl text-white w-fit">
      {text}
    </button>
  );
}

export function ButtonPrimarySmallFull({ text, arrow }) {
  return (
    <button className="btn px-8 py-2.5 text-xs bg-primary rounded-xl text-white w-full">
      {text}
    </button>
  );
}

export function ButtonPrimaryBig({ text, arrow }) {
  return (
    <button className="btn px-8 py-4 bg-primary rounded-xl text-white w-fit">
      {text}
    </button>
  );
}

export function ButtonPrimaryBigFull({ text, arrow }) {
  return (
    <button className="btn px-8 py-4 bg-primary rounded-xl text-white w-fit">
      {text}
    </button>
  );
}

export function ButtonSecondarySmall({ text, arrow }) {
  return (
    <button className="btn px-8 py-2.5 bg-secondary text-primary rounded-xl w-fit">
      {text}
    </button>
  );
}
