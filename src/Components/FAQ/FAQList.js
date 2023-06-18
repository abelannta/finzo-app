import React from "react";
import FAQDropdown from "./FAQDropdown";

const FAQ = [
  {
    title: "What is Finzo?",
    content:
      "Finzo is payment institution that helps millions of people and businesses manage their money across the world. Finzo helps you get more from your money.",
  },
  {
    title: "How do I send money to a bank account?",
    content:
      "You can still read your existing content as usual, but you won’t be able to add new content. However, you can delete existing blocks to free up space.",
  },
  {
    title: "How do I verify my identity?",
    content:
      "Finzo is payment institution that helps millions of people and businesses manage their money across the world. Finzo helps you get more from your money.",
  },
  {
    title: "What happens when I go over the block limit on my Free plan?",
    content:
      "You can still read your existing content as usual, but you won’t be able to add new content. However, you can delete existing blocks to free up space.",
  },
];

function FAQList() {
  return (
    <div className="flex flex-col gap-6 max-w-4xl">
      {FAQ.map((item, i) => (
        <FAQDropdown title={item.title} content={item.content} key={i} />
      ))}
    </div>
  );
}

export default FAQList;
