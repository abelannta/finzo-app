import React from "react";

function Ellipses({ borderColor, scale }) {
  return (
    <div className={`relative w-96 aspect-square ${scale}`}>
      <div className="flex items-center w-full">
        <div
          className={`rounded-full w-[736px] aspect-square ${borderColor} border-2 absolute opacity-70`}
        ></div>
      </div>
      <div className="flex items-center w-full">
        <div
          className={`rounded-full w-[542px] aspect-square ${borderColor} border-2 absolute opacity-70`}
        ></div>
      </div>
      <div className="flex items-center w-full">
        <div
          className={`rounded-full w-[349px] aspect-square ${borderColor} border-2 absolute opacity-70`}
        ></div>
      </div>
    </div>
  );
}

export default Ellipses;
