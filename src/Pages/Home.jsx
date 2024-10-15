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
      <img src={GIF_Logo} alt="Shooting GIF Logo" className="mt-6 -mb-6" />
    </main>
  );
};

export default Home;
