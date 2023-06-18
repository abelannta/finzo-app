import "./App.css";
import openAI from "./assets/OpenAI svg.svg";
import raycast from "./assets/Raycast svg.svg";
import ramp from "./assets/Ramp svg.svg";
import ukIcon from "./assets/uk.svg";
import sgIcon from "./assets/singapore.svg";
import gmIcon from "./assets/germany.svg";
import amazonIcon from "./assets/amazon.svg";
import mainImg from "./assets/mainImg.png";
import LandingPageLayout from "./Layout/LandingPageLayout";
import Badge from "./Components/Common/Badge";
import {
  ButtonLightBig,
  ButtonLightSmall,
  ButtonLightSmallFull,
  ButtonPrimaryBig,
  ButtonPrimaryBigFull,
  ButtonPrimarySmall,
  ButtonPrimarySmallFull,
} from "./Components/Common/Button";
import TransactionCard from "./Components/Cards/TransactionCard";
import Ellipses from "./Components/Background/Ellipses";
import CurrencyBadge from "./Components/Common/CurrencyBadge";
import TransferNotification from "./Components/Cards/TransferCard";
import BenefitCard from "./Components/Cards/BenefitCard";
import { BiLock, BiUserCircle } from "react-icons/bi";
import { BsPersonLock } from "react-icons/bs";
import { HiOutlineBuildingLibrary } from "react-icons/hi2";
import PricingCard from "./Components/Cards/PricingCard";
import FAQList from "./Components/FAQ/FAQList";
import Intro from "./Components/Home/Intro";
import Summary from "./Components/Home/Summary";
import Currency from "./Components/Home/Currency";
import Payment from "./Components/Home/Payment";
import Value from "./Components/Home/Value";
import Pricing from "./Components/Home/Pricing";
import CTA from "./Components/Home/CTA";

function App() {
  return (
    <LandingPageLayout>
      <Intro />
      {/* Section 2 */}
      <Summary />
      {/* Section 3 */}
      <Currency />
      {/* Section 4 */}
      <Payment />
      {/* Section 5 */}
      <Value />
      {/* Section 6 */}
      <Pricing />
      {/* Section 7 */}
      <CTA />
    </LandingPageLayout>
  );
}

export default App;
