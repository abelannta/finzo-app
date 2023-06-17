import React from "react";
import logo from "../LogoLight.svg";
import { ButtonLightSmall, ButtonSecondarySmall } from "./Button";
import { FaFacebookSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";

const FooterNavigation = [
  {
    title: "Platform",
    navigation: [
      {
        title: "Multi-virtual Card",
        url: "#",
      },
      {
        title: "Investment",
        url: "#",
      },
      {
        title: "Learn",
        url: "#",
      },
    ],
  },
  {
    title: "Solutions",
    navigation: [
      {
        title: "Exchange & Pro",
        url: "#",
      },
      {
        title: "Wallet",
        url: "#",
      },
      {
        title: "Commerce",
        url: "#",
      },
      {
        title: "Taxes",
        url: "#",
      },
    ],
  },
  {
    title: "Features",
    navigation: [
      {
        title: "Transfer",
        url: "#",
      },
      {
        title: "Investor Index",
        url: "#",
      },
      {
        title: "Exchange",
        url: "#",
      },
    ],
  },
  {
    title: "Company",
    navigation: [
      {
        title: "About Us",
        url: "#",
      },
      {
        title: "Career",
        url: "#",
      },
      {
        title: "Blog",
        url: "#",
      },
    ],
  },
];

function Footer() {
  return (
    <div className="bg-primary pt-20">
      <div className="container mx-auto px-20 text-white">
        <div className="grid grid-cols-3 gap-10 pb-16">
          <div className="col-span-2 grid grid-cols-4">
            {FooterNavigation.map((item, i) => (
              <div key={i}>
                <h5 className="text-lg font-medium leading-7 mb-6">
                  {item.title}
                </h5>
                <div className="flex flex-col gap-2 text-sm text-[#FFFFFFA3]">
                  {item.navigation.map((link, i) => (
                    <a href={link.url} key={i}>
                      {link.title}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="col-span-1">
            <h5 className="text-lg font-medium leading-7 mb-6">
              Follow our newsletter
            </h5>
            <div className="flex gap-3 w-full p-1 bg-white rounded-xl">
              <input
                type="email"
                placeholder="Your work email"
                className="grow rounded-xl text-black px-3"
              />
              <ButtonSecondarySmall text="Submit" />
            </div>
          </div>
        </div>
        <div className="divide-y">
          <div className="flex justify-between items-center pb-8">
            <div>EN</div>
            <div className="flex gap-6 items-center">
              <p className="text-sm">Follow us on</p>
              <div className="flex text-3xl gap-3">
                <FaFacebookSquare />
                <FaLinkedin />
                <FaTwitterSquare />
              </div>
            </div>
          </div>
          <div className="py-10 flex justify-between items-center">
            <img src={logo} className="w-[127px] h-[44px] mr-20" />
            <p className="text-sm text-[#FFFFFFA3]">
              © Finzo. All Rights Reserved.
            </p>
            <div className="flex gap-10 text-sm">
              <a href="#">Terms</a>
              <a href="#">Privacy</a>
              <a href="#">Security</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
