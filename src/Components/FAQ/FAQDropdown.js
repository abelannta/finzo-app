import React from "react";

function FAQDropdown({ title, content }) {
  return (
    <div className="collapse collapse-plus bg-[#F9FBFB] p-3 md:py-7 md:px-10">
      <input type="checkbox" />
      <div className="collapse-title text-xl leading-7 font-medium">
        {title}
      </div>
      <div className="collapse-content">
        <p className="text-base leading-6 text-paragraph">{content}</p>
      </div>
    </div>
  );
}

export default FAQDropdown;
