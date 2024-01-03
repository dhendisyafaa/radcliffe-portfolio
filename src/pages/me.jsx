import MyAchievment from "@/components/about_me/MyAchievment";
import MyDescription from "@/components/about_me/MyDescription";
import MyExperience from "@/components/about_me/MyExperience";
import MyProject from "@/components/about_me/MyProject";
import HomepageLayout from "@/components/homepage/HomepageLayout";
import Link from "next/link";

const AboutMe = () => {
  return (
    <div
      style={{
        backgroundImage: `url('/assets/about-me-pattern.svg')`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <HomepageLayout>
        <MyDescription />
        <MyProject />
        <MyAchievment />
        <MyExperience />
      </HomepageLayout>
    </div>
  );
};

export default AboutMe;
