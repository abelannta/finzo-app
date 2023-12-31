import React from "react";

function Badge({ text }) {
  return (
    <div className="px-4 py-2 w-fit bg-secondary uppercase rounded-lg text-xs">
      {text}
    </div>
  );
}

export default Badge;
