import MainPageHeader from "../Layouts/MainPageHeader";
import MainPageCompany from "../Layouts/MainPageCompany";
import MainPageMarket from "../Layouts/MainPageMarket";
import Background from "../assets/1.png";

const MainPage = () => {
  return (
    <div className="container">
      <img id="background-main" src={Background} alt="" />
      <MainPageHeader />
      <MainPageCompany />
      <MainPageMarket />
    </div>
  );
};

export default MainPage;
