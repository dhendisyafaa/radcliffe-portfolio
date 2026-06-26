import TitleSection from "../homepage/TitleSection";

const MyDescription = () => {
  return (
    <section className="w-full min-h-screen flex items-center">
      <div className="w-full">
        <TitleSection title={"Me"} description={"About me in a nutshell"} />
        <div className="w-full md:w-[80%]">
          <p className="font-semibold text-2xl text-white">
            Hello! I&apos;m{" "}
            <span className="text-primary font-semibold">
              Dhendi Syafa Athallah Putra
            </span>
            , a creative technologist who builds digital products and crafts
            visual stories.
          </p>
          <p className="text-gray-200 mt-3">
            With a background in{" "}
            <span className="text-primary font-semibold">
              Computer Science Education
            </span>
            , I blend technology and creativity to produce impactful work
            whether it&apos;s a full-stack web application or a cinematic short
            film. I believe the best solutions come from the intersection of{" "}
            <span className="text-primary font-semibold">
              code, design, and storytelling.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default MyDescription;
