import Link from "next/link";
import TitleSection from "../homepage/TitleSection";

const MyDescription = () => {
  return (
    <section className="w-full min-h-screen flex items-center">
      <div className="w-full">
        <TitleSection title={"Me"} description={"About me in a nutshell"} />
        <div className="w-[90%]">
          <p className="font-semibold text-2xl text-white">
            Hello! My name{" "}
            <span className="text-primary font-semibold">
              Dhendi Syafa Athallah Putra
            </span>
            , a vocational high school boy who is trying to dive into the world
            of technology
          </p>
          <p className="text-gray-200 mt-3">
            I am a vocational student majoring in{" "}
            <span className="text-primary font-semibold">
              Software Engineering.
            </span>{" "}
            Starting from watching a Korean drama{" "}
            <span className="text-primary font-semibold">Start Up</span> that
            made me curious about programming, and now I am interested in
            becoming a Web Developer.
          </p>
        </div>
        <div className="text-primary font-bold underline">
          <Link href={"/dhensjournal"}>Still curious about me?</Link>
        </div>
      </div>
    </section>
  );
};

export default MyDescription;
