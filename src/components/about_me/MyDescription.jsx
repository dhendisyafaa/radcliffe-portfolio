import Link from "next/link";
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
            , a software developer with a focus on web technology development.
          </p>
          <p className="text-gray-200 mt-3">
            With a background in{" "}
            <span className="text-primary font-semibold">
              Computer Science Education
            </span>{" "}
            and always striving to create innovative solutions that have a
            positive impact. I must continue to hone my skills to become a{" "}
            <span className="text-primary font-semibold">
              useful developer.
            </span>
          </p>
        </div>
        <div className="absolute text-primary font-bold underline pt-1 pr-1">
          <span class="animate-ping absolute top-1 right-0 inline-flex h-2 w-2 rounded-full bg-primary opacity-75"></span>
          <Link href={"/dhensjournal"}>Still curious about me?</Link>
        </div>
      </div>
    </section>
  );
};

export default MyDescription;
