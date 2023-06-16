import "./App.css";
import openAI from "./OpenAI svg.svg";
import raycast from "./Raycast svg.svg";
import ramp from "./Ramp svg.svg";
import LandingPageLayout from "./Layout/LandingPageLayout";
import Badge from "./Components/Badge";
import { ButtonLightBig, ButtonPrimaryBig } from "./Components/Button";
import TransactionCard from "./Components/TransactionCard";
import Ellipses from "./Components/Ellipses";
import CurrentBadge from "./Components/CurrencyBadge";
import TransferNotification from "./Components/TransferNotification";

function App() {
  return (
    <LandingPageLayout>
      <div className="py-28 px-10">
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
            <TransactionCard />
          </div>
        </div>
      </div>
      {/* Section 2 */}
      <div className="py-20">
        <div className="bg-primary rounded-xl py-24 px-48 text-white relative overflow-hidden">
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
            <div className="w-full aspect-square bg-secondary rounded-xl relative">
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
            <h1 className="font-semibold text-5xl leading-[57px] my-6">
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
            <div className="w-full aspect-square bg-primary rounded-xl relative">
              <div className="w-full h-full relative overflow-hidden">
                <div className="absolute -bottom-64 -left-32 rotate-[-40deg]">
                  <Ellipses borderColor="border-white" scale="scale-[0.55]" />
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
            <h1 className="font-semibold text-5xl leading-[57px] my-6">
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
    </LandingPageLayout>
  );
}

export default App;
