import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MyAchievment from "@/components/about_me/MyAchievment";
import MyDescription from "@/components/about_me/MyDescription";
import MyExperience from "@/components/about_me/MyExperience";
import MyProject from "@/components/about_me/MyProject";
import MySkills from "@/components/about_me/MySkills";
import MyFilmProject from "@/components/about_me/MyFilmProject";
import MyFilmAchievment from "@/components/about_me/MyFilmAchievment";
import ModeToggle from "@/components/about_me/ModeToggle";
import DhensJournalSection from "@/components/about_me/DhensJournalSection";
import HomepageLayout from "@/components/homepage/HomepageLayout";
import TECH_SKILLS from "@/constant/tech_skills.json";
import FILM_SKILLS from "@/constant/film_skills.json";

const contentVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.3,
      ease: "easeIn",
    },
  },
};

const AboutMe = () => {
  const [mode, setMode] = useState("tech");

  const toggleMode = () => {
    setMode((prev) => (prev === "tech" ? "film" : "tech"));
  };

  return (
    <div
      className={`bg-center bg-cover bg-no-repeat transition-all duration-700 ${
        mode === "tech"
          ? "bg-[url('/assets/about-me-pattern.svg')]"
          : "bg-[url('/assets/hero-pattern.svg')]"
      }`}
    >
      <HomepageLayout>
        <MyDescription />

        <ModeToggle mode={mode} onToggle={toggleMode} />

        <AnimatePresence mode="wait">
          {mode === "tech" ? (
            <motion.div
              key="tech"
              variants={contentVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <MySkills data={TECH_SKILLS} />
              <MyProject />
              <MyAchievment />
              <MyExperience />
              <DhensJournalSection />
            </motion.div>
          ) : (
            <motion.div
              key="film"
              variants={contentVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <MySkills data={FILM_SKILLS} />
              <MyFilmProject />
              <MyFilmAchievment />
              <DhensJournalSection />
            </motion.div>
          )}
        </AnimatePresence>
      </HomepageLayout>
    </div>
  );
};

export default AboutMe;
