import MyAchievment from "@/components/about_me/MyAchievment";
import MyDescription from "@/components/about_me/MyDescription";
import MyExperience from "@/components/about_me/MyExperience";
import MyProject from "@/components/about_me/MyProject";
import HomepageLayout from "@/components/homepage/HomepageLayout";

const AboutMe = () => {
  return (
    <div className="bg-[url('/assets/about-me-pattern.svg')] bg-center bg-cover bg-no-repeat">
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
