import ContactSection from "@/components/homepage/ContactSection";
import HeroSection from "@/components/homepage/HeroSection";
import HomepageLayout from "@/components/homepage/HomepageLayout";
import { ListSosmedHorizontal } from "@/components/homepage/ListSosmedComponent";
import { useDataProfile } from "./api/resolvers/linkedinResolver";

const Home = () => {
  const { data } = useDataProfile();
  console.log("🚀 ~ file: index.jsx:9 ~ Home ~ data :", data);
  return (
    <div className="bg-[url('/assets/hero-pattern.svg')] bg-center bg-cover bg-no-repeat">
      <HomepageLayout>
        <HeroSection />
        <ListSosmedHorizontal />
        <ContactSection />
      </HomepageLayout>
    </div>
  );
};

export default Home;
