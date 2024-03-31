import Header from "./Component/Header/Header";
import Slider from "./Component/Slider/Slider";
import ConnectUs from "./Sections/ConnectUs/ConnectUs";
import FAQ from "./Sections/FAQ/FAQ";
import Footer from "./Sections/Footer/Footer";
import Numbers from "./Sections/Numbers/Numbers";
import SectionFour from "./Sections/SectionFour/SectionFour";
import SectionThree from "./Sections/SectionThree/SectionThree";
import SectionTwo from "./Sections/SectionTwo/SectionTwo";
import Test from "./Sections/TestSection/Test";
import Main from "./Sections/mainSection/Main";
import Passion from "./Sections/passion/Passion";
import SectionFive from "./Sections/section5/SectionFive";


function App() {
  return (
  <><Header /><Main />
  <Numbers/>
  <SectionTwo/>
  <SectionThree/>
  <SectionFour/>
  <SectionFive/>
  <Test/>
  <FAQ/>
  <Passion/>
  <ConnectUs/>
  <Footer/>
  </>
  );
}

export default App;
