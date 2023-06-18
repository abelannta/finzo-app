import "./App.css";
import LandingPageLayout from "./Layout/LandingPageLayout";
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
      <Summary />
      <Currency />
      <Payment />
      <Value />
      <Pricing />
      <CTA />
    </LandingPageLayout>
  );
}

export default App;
