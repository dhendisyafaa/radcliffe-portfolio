import { useRouter } from "next/router";
import Typewriter from "typewriter-effect";
import HOMEPAGE from "../../constant/homepage.json";
import { Button } from "../ui/button";

const HeroSection = () => {
  const { push } = useRouter();
  return (
    <section className="w-full min-h-screen flex items-center">
      <div className="w-full space-y-6">
        <div>
          <p className="text-xl md:text-2xl tracking-widest font-semibold text-white uppercase">
            <span className="decoration-primary decoration-4 underline">
              {HOMEPAGE.firstname}
            </span>{" "}
            {HOMEPAGE.lastname}
          </p>
          <div className="md:flex gap-4 text-white text-6xl md:text-8xl font-bold my-3">
            <p className="">I&apos;m the </p>
            <div className="text-primary">
              <Typewriter
                options={{
                  strings: HOMEPAGE.typewriter,
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
          </div>
          <p className="text-gray-400 font-semibold text-base md:text-lg">
            {HOMEPAGE.description}
          </p>
        </div>
        <Button onClick={() => push("/me")}>{HOMEPAGE.button}</Button>
      </div>
    </section>
  );
};

export default HeroSection;
