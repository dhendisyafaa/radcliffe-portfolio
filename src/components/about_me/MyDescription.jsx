import React from "react";
import TitleSection from "../homepage/TitleSection";

const MyDescription = () => {
  return (
    <section className="w-full min-h-screen flex items-center">
      <div className="w-full">
        <TitleSection title={"Me"} description={"About me in a nutshell"} />
        <div>
          <p className="font-semibold text-2xl text-white">
            Hallo! Saya Dhendi James Radcliffe. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Quia repellendus,
          </p>
          <p className="text-gray-200 mt-3">
            debitis est excepturi maiores eveniet autem officiis consectetur
            incidunt, repudiandae molestiae. Aliquam excepturi corporis porro
            exercitationem! Quibusdam voluptas alias facilis. Lorem, ipsum dolor
            sit amet consectetur adipisicing elit. Quasi, amet! Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Optio, sint!
          </p>
        </div>
      </div>
    </section>
  );
};

export default MyDescription;
