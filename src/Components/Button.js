import React from "react";

export function ButtonLightSmall({ text, arrow }) {
  return (
    <button className="px-8 py-2.5 border border-border rounded-xl w-fit">
      {text}
    </button>
  );
}

export function ButtonLightSmallFull({ text, arrow }) {
  return (
    <button className="px-8 py-2.5 text-xs border border-border rounded-xl w-full">
      {text}
    </button>
  );
}

export function ButtonLightBig({ text, arrow }) {
  return (
    <button className="px-8 py-4 border border-border rounded-xl w-fit">
      {text}
    </button>
  );
}

export function ButtonPrimarySmall({ text, arrow }) {
  return (
    <button className="px-8 py-2.5 bg-primary rounded-xl text-white w-fit">
      {text}
    </button>
  );
}

export function ButtonPrimarySmallFull({ text, arrow }) {
  return (
    <button className="px-8 py-2.5 text-xs bg-primary rounded-xl text-white w-full">
      {text}
    </button>
  );
}

export function ButtonPrimaryBig({ text, arrow }) {
  return (
    <button className="px-8 py-4 bg-primary rounded-xl text-white w-fit">
      {text}
    </button>
  );
}
