// import { useTranslation } from "react-i18next";
import ConsultationSection from "../Components/Home_Components/ConsultationSection";
import HomBackground from "../Components/Home_Components/HomBackground";
import ServicesSection from "../Components/Home_Components/ServicesSection";

const Home = () => {
  // const { t } = useTranslation();
  return (
    <main className="">
      <HomBackground />
      <ConsultationSection />
      <ServicesSection />
    </main>
  );
};

export default Home;
