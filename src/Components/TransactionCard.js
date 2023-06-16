import React from "react";
import mainImg from "../mainImg.png";
import { BsFillCalendarFill } from "react-icons/bs";

function TransactionCard() {
  return (
    <div className="relative">
      <img
        src={mainImg}
        className="object-cover rounded-xl w-[437px] h-[520px]"
      />
      <div className="absolute -bottom-16 -left-28 z-2">
        <div className="rounded-xl bg-white w-[400px] p-6 shadow-md">
          <label className="text-[8px] text-[#8D98AF] uppercase">Amount</label>
          <div className="flex rounded-xl border border-border w-full py-2 px-3 gap-2">
            <select className="flex-none w-[76px]">
              <option>USD</option>
              <option>IDN</option>
              <option>SGP</option>
            </select>
            <input type="number" className="grow px-2" />
          </div>
          <div className="flex gap-3 mt-4">
            <div className="flex flex-col flex-1">
              <label className="text-[8px] text-[#8D98AF] uppercase">
                Send to
              </label>
              <select
                disabled
                className="px-2 border border-border rounded-xl h-10"
              >
                <option>Evelyn</option>
                <option>Andini</option>
                <option>Dul</option>
              </select>
            </div>
            <div className="flex flex-col flex-1">
              <label className="text-[8px] text-[#8D98AF] uppercase">
                Fx Fee
              </label>
              <input
                type="text"
                value="2.8% + $0.40"
                disabled
                className="px-2 border border-border rounded-xl h-10"
              />
            </div>
          </div>
          <p className="text-xs text-[#8D98AF] mt-4">
            Upgrade plan for fewer fees or{" "}
            <span className="text-primary font-medium underline">
              contact sales
            </span>
          </p>
          <div className="flex gap-2 mt-4">
            <button className="flex-none px-8 py-2.5 bg-primary rounded-xl text-white">
              <BsFillCalendarFill className="w-3 h-3" />
            </button>
            <button className="grow px-8 py-2.5 bg-primary rounded-xl text-white text-xs">
              Send
            </button>
          </div>
        </div>
      </div>
      <div className="absolute -bottom-[72px] -left-28 -z-10">
        <div className="rounded-xl bg-secondary w-[400px] p-6"></div>
      </div>
    </div>
  );
}

export default TransactionCard;