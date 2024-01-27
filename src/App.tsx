import CategoriesContainer from "./components/CategoriesContainer";
import EmailContainer from "./components/EmailContainer";
import Footer from "./components/Footer";
import HeroPromo from "./components/HeroPromo";
import Navbar from "./components/Navbar";
import ShareContainer from "./components/ShareContainer";
import SocialContainer from "./components/SocialContainer";

const App = () => {
  return (
    <>
      <Navbar />
      <HeroPromo />
      <CategoriesContainer />
      <EmailContainer />
      <SocialContainer />
      <ShareContainer />
      <Footer />
    </>
  );
};

export default App;
