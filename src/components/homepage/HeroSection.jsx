import React from "react";
import { Button } from "../ui/button";
import Typewriter from "typewriter-effect";
import { useRouter } from "next/router";

const HeroSection = () => {
  const { push } = useRouter();
  return (
    <section className="w-full min-h-screen flex items-center">
      <div className="w-full space-y-6">
        <div>
          <p className="text-xl md:text-2xl tracking-widest font-semibold text-white">
            <span className="decoration-primary decoration-4 underline">
              DHENDI
            </span>{" "}
            SYAFA ATHALLAH PUTRA
          </p>
          <div className="md:flex gap-4 text-white text-6xl md:text-8xl font-bold my-3">
            <p className="">I&apos;m the </p>
            <div className="text-primary">
              <Typewriter
                options={{
                  strings: ["Student", "Builder"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
          </div>
          <p className="text-gray-400 font-semibold text-base md:text-lg">
            Hi there! good to see you here. I&apos;m a student who loves to
            build things.
          </p>
        </div>
        <Button onClick={() => push("/me")}>About Me</Button>
      </div>
    </section>
  );
};

export default HeroSection;
