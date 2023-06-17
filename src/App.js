import "./App.css";
import openAI from "./OpenAI svg.svg";
import raycast from "./Raycast svg.svg";
import ramp from "./Ramp svg.svg";
import mainImg from "./mainImg.png";
import LandingPageLayout from "./Layout/LandingPageLayout";
import Badge from "./Components/Badge";
import {
  ButtonLightBig,
  ButtonLightSmall,
  ButtonLightSmallFull,
  ButtonPrimaryBig,
  ButtonPrimaryBigFull,
  ButtonPrimarySmall,
  ButtonPrimarySmallFull,
} from "./Components/Button";
import TransactionCard from "./Components/TransactionCard";
import Ellipses from "./Components/Ellipses";
import CurrentBadge from "./Components/CurrencyBadge";
import TransferNotification from "./Components/TransferNotification";
import BenefitCard from "./Components/BenefitCard";
import { BiLock, BiUserCircle } from "react-icons/bi";
import { BsPersonLock } from "react-icons/bs";
import { HiOutlineBuildingLibrary } from "react-icons/hi2";
import PricingCard from "./Components/PricingCard";
import FAQList from "./Components/FAQList";

function App() {
  return (
    <LandingPageLayout>
      <div className="py-28 pt-40 px-10">
        <div className="flex items-center gap-12">
          <div className="flex-1">
            <div className="mb-10">
              <Badge text="Modern Bank" />
              <h1 className="font-semibold text-[64px] leading-[80px] my-6">
                We're building the future banking just for you
              </h1>
              <p className="text-xl leading-8 font-normal text-paragraph max-w-[488px]">
                Easy and fast international business account that saves you
                money wherever you want to use it.
              </p>
            </div>
            <div className="flex gap-4 mb-14">
              <ButtonPrimaryBig text="Get Started Now" />
              <ButtonLightBig text="Learn More" />
            </div>
            <div>
              <p className="uppercase text-[#8793AB] text-base mb-8">
                TRUSTED BY COMPANY ACROSS THE WORLD
              </p>
              <div className="flex gap-8">
                <img src={openAI} />
                <img src={raycast} />
                <img src={ramp} />
              </div>
            </div>
          </div>
          <div className="flex flex-row-reverse flex-1">
            <div className="relative">
              <img
                src={mainImg}
                className="object-cover rounded-xl w-[437px] h-[520px]"
              />
              <div className="absolute -bottom-16 -left-28 z-2">
                <TransactionCard />
              </div>
              <div className="absolute -bottom-[72px] -left-28 -z-10">
                <div className="rounded-xl bg-secondary w-[400px] p-6"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Section 2 */}
      <div className="py-20">
        <div className="bg-primary rounded-3xl py-24 px-48 text-white relative overflow-hidden">
          <div className="flex justify-between items-center">
            <div className="flex flex-col items-center">
              <h1 className="text-[56px] font-medium">75K+</h1>
              <p className="text-xl">Satisfied users globally</p>
            </div>
            <div className="flex flex-col items-center">
              <h1 className="text-[56px] font-medium">12%</h1>
              <p className="text-xl">Benefical Cashback</p>
            </div>
            <div className="flex flex-col items-center">
              <h1 className="text-[56px] font-medium">190+</h1>
              <p className="text-xl">countries supported</p>
            </div>
          </div>
          <div className="absolute -top-32 right-16 rotate-[70deg]">
            <Ellipses borderColor="border-[#CCE8C94D]" />
          </div>
        </div>
      </div>
      {/* Section 3 */}
      <div className="py-20 px-10">
        <div className="flex gap-12">
          <div className="flex-1 px-16">
            <div className="w-full aspect-square bg-secondary rounded-3xl relative">
              <div className="w-full h-full relative overflow-hidden">
                <div className="absolute -bottom-64 -left-32 rotate-[-40deg]">
                  <Ellipses borderColor="border-white" scale="scale-[0.55]" />
                </div>
              </div>
              <div className="absolute top-10 right-12">
                <CurrentBadge text="+ €81.5" />
              </div>
              <div className="absolute top-44 -left-14">
                <CurrentBadge text="+ $30.1" />
              </div>
              <div className="absolute bottom-12 -right-16">
                <CurrentBadge text="+ €40.0" />
              </div>
            </div>
          </div>
          <div className="flex flex-1 flex-col justify-center">
            <Badge text="Currency" />
            <h1 className="font-medium text-5xl leading-[57px] my-6">
              Hold and send money in 190+ currencies
            </h1>
            <p className="text-lg leading-7 font-normal text-paragraph max-w-[488px] mb-8">
              Create an account for your chosen currency in seconds. Get great
              prices with limit and stop orders
            </p>
            <ButtonPrimaryBig text="Learn More" />
          </div>
        </div>
      </div>
      {/* Section 4 */}
      <div className="py-20 px-10">
        <div className="flex flex-row-reverse gap-12">
          <div className="flex-1 px-16">
            <div className="w-full aspect-square bg-primary rounded-3xl relative">
              <div className="w-full h-full relative overflow-hidden">
                <div className="absolute -bottom-40 -right-60 rotate-[-100deg]">
                  <Ellipses
                    borderColor="border-[#CCE8C94D]"
                    scale="scale-[0.55]"
                  />
                </div>
              </div>
              <div className="absolute top-12 -left-16">
                <TransferNotification />
              </div>
              <div className="absolute bottom-12 right-10">
                <CurrentBadge text="+ €40.0" />
              </div>
            </div>
          </div>
          <div className="flex flex-1 flex-col justify-center">
            <Badge text="Payment" />
            <h1 className="font-medium text-5xl leading-[57px] my-6">
              Sending money, easy by the default
            </h1>
            <p className="text-lg leading-7 font-normal text-paragraph max-w-[488px] mb-8">
              Moving money should never take more than a few taps. Transfers are
              always free between friends.
            </p>
            <ButtonPrimaryBig text="Learn More" />
          </div>
        </div>
      </div>
      {/* Section 5 */}
      <div className="py-20">
        <div className="p-24 bg-[#F9FBFB] rounded-3xl flex relative overflow-hidden">
          <div className="absolute -bottom-56 right-72 rotate-[-90deg]">
            <Ellipses borderColor="border-secondary" scale="scale-[0.8]" />
          </div>
          <div className="flex-1 flex flex-col justify-between z-10">
            <div className="max-w-sm">
              <h1 className="font-medium text-5xl leading-[57px] mb-6">
                We are a strategic choice
              </h1>
              <p className="text-lg leading-7 font-normal max-w-xs text-paragraph mb-8">
                We’re on a mission to bring transparency to finance and show you
                upfront.
              </p>
            </div>
            <ButtonPrimarySmall text="Watch Video Guide" />
          </div>
          <div className="flex-1 grid grid-cols-2 gap-16 z-10">
            <BenefitCard
              icon={<BiLock />}
              title="Security Teams"
              content="Security teams work to keep your money safe"
            />
            <BenefitCard
              icon={<BsPersonLock />}
              title="Authentication"
              content="We use top uthentication to protect your account"
            />
            <BenefitCard
              icon={<HiOutlineBuildingLibrary />}
              title="Safety Funds"
              content="Hold money with established financial institutions"
            />
            <BenefitCard
              icon={<BiUserCircle />}
              title="Account Place"
              content="Place all your account, all in one place"
            />
          </div>
        </div>
      </div>
      {/* Section 6 */}
      <div className="py-20">
        <div className="flex flex-col items-center justify-center gap-4 mb-16">
          <Badge text="Pricing" />
          <h1 className="font-medium text-5xl leading-[57px] max-w-lg">
            Plans for every budget
          </h1>
          <p className="text-lg text-center leading-7 font-normal max-w-sm text-paragraph ">
            Whether you're a small business, or a large corporation, we have a
            plan that's right for you.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-10">
          <div className="col-span-1 p-10 rounded-3xl shadow-md">
            <PricingCard
              title="Personal"
              titleColor="text-primary"
              content="Built-in budgeting and get more from your money with our Standard account."
              contentColor="text-paragraph"
              price="0"
              button={<ButtonPrimarySmallFull text="Try for Free" />}
            />
          </div>
          <div className="flex divide-x col-span-2 py-10 rounded-3xl bg-primary text-white">
            <div className="flex-1 px-12">
              <PricingCard
                title="Business"
                titleColor="text-white"
                content="Give your everyday finances a boost. Get more out of your money for less."
                contentColor="text-[#FFFFFFA3]"
                price="29"
                button={<ButtonLightSmallFull text="Get Started" />}
              />
            </div>
            <div className="flex-1 px-12">
              <p className="text-sm uppercase text-[#FFFFFFA3] mb-5">
                Features
              </p>
              <ul className="flex flex-col list-disc list-outside gap-5 text-base leading-6">
                <li>No payments back-office needed</li>
                <li>Faster implementation and global roll-out</li>
                <li>48 hour support response time</li>
                <li>Always benefit from the best rates and features</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-24 flex flex-col items-center justify-center">
          <h1 className="font-medium text-[40px] leading-[48px] mb-10">FAQ</h1>
          <FAQList />
        </div>
      </div>
      {/* Section 7 */}
      <div className="py-20">
        <div className="flex justify-between bg-secondary p-24 rounded-3xl relative overflow-hidden">
          <div className="absolute -top-40 left-96 rotate-[45deg]">
            <Ellipses borderColor="border-[#1D636333]" scale="scale-[0.55]" />
          </div>
          <div>
            <div className="max-w-md mb-8">
              <h1 className="font-medium text-5xl leading-[57px] mb-6">
                Join million people who already trust us
              </h1>
              <p className="text-lg leading-7 font-normal max-w-md text-paragraph mb-8">
                Easy and fast international business account that saves you
                money wherever you want to use it.
              </p>
            </div>
            <div className="flex gap-5">
              <ButtonPrimarySmall text="Open Account" />
              <ButtonLightSmall text="Book a demo" />
            </div>
          </div>
          <div className="w-fit h-fit relative">
            <TransactionCard />
            <div className="absolute -left-36 -bottom-10">
              <CurrentBadge text="+ €40.0" />
            </div>
          </div>
        </div>
      </div>
    </LandingPageLayout>
  );
}

export default App;
