// import { useTranslation } from "react-i18next";
import ConsultationSection from "../Components/Home_Components/ConsultationSection";
import HomBackground from "../Components/Home_Components/HomBackground";
import OurGoals from "../Components/Home_Components/OurGoals";
import OurJourney from "../Components/Home_Components/OurJourney";
import OurPartners from "../Components/Home_Components/OurPartners";
import ServicesSection from "../Components/Home_Components/ServicesSection";
import Shooting_Team from "../Components/Home_Components/Shooting_Team";
import GIF_Logo from "../assets/Images/Icons/GIF_Logo.gif";

const Home = () => {
  // const { t } = useTranslation();
  return (
    <main className="relative">
      <HomBackground />
      <ConsultationSection />
      <ServicesSection />
      <OurGoals />
      <OurJourney />
      <OurPartners />
      <Shooting_Team />
      <div className="w-full h-full flex justify-center items-center ">
        <img
          src={GIF_Logo}
          alt="Shooting GIF Logo"
          className="xl:w-48 lg:w-48 md:w-48 w-40 xl:-mb-12 lg:-mb-12 md:-mb-12 -mb-[120px] xl:mt-12 lg:mt-12 md:mt-12 mt-12   "
        />
      </div>
    </main>
  );
};

export default Home;
