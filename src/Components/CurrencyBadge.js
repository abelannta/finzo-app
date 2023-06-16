import React from "react";

function CurrentBadge({ text }) {
  return (
    <div className="py-4 px-6 bg-white shadow-md rounded-xl flex justify-between items-center gap-5">
      <div className="flex flex-row items-center gap-3">
        <div className="aspect-square w-14 bg-border rounded-full"></div>
        <div className="flex flex-col gap-3">
          <div class="h-3 bg-border rounded-full w-24"></div>
          <div class="h-3 bg-border rounded-full w-16"></div>
        </div>
      </div>
      <h3 className="font-medium text-2xl">{text}</h3>
    </div>
  );
}

export default CurrentBadge;
