import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const HeroParallaxEffect = () => {
  const ref = useRef();
  const { scrollYProgress, scrollXProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // background
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const backgroundScale = useTransform(
    scrollYProgress,
    [0, 1],
    ["100%", "120%"]
  );

  // hogwarts
  const hogwartsScale = useTransform(scrollYProgress, [0, 1], ["100%", "120%"]);
  const hogwartsY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  // forest
  const rightY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const rightX = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const leftY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const leftX = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
  const forestScale = useTransform(scrollYProgress, [0, 1], ["100%", "120%"]);

  // dhenstand
  const dhenStand = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const dhenScale = useTransform(scrollYProgress, [0, 1], ["100%", "170%"]);

  // text
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const textScale = useTransform(scrollYProgress, [0, 1], ["100%", "200%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  // bird
  const birdY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);
  const birdX = useTransform(scrollYProgress, [0, 1], ["0%", "150%"]);
  const birdScale = useTransform(scrollYProgress, [0, 1], ["100%", "250%"]);
  const birdOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  return (
    <div
      ref={ref}
      className="w-full h-screen overflow-hidden relative grid place-items-center"
    >
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url(/assets/background.jpg)",
          backgroundPosition: "bottom",
          backgroundSize: "cover",
          y: backgroundY,
          scale: backgroundScale,
        }}
      />
      <motion.div
        className="text-center text-white relative z-10"
        style={{
          y: textY,
          scale: textScale,
          opacity: textOpacity,
        }}
      >
        <p className="font-black text-3xl md:text-5xl">DHENSJOURNAL</p>
        <span className="font-bold text-lg md:text-xl">
          Journals of my life
        </span>
      </motion.div>
      <motion.div
        className="absolute inset-52 z-20"
        style={{
          backgroundImage: "url(/assets/bird.png)",
          backgroundRepeat: "no-repeat",
          y: birdY,
          x: birdX,
          scale: birdScale,
          opacity: birdOpacity,
        }}
      />
      <motion.div
        className="absolute inset-0 z-20"
        style={{
          backgroundImage: "url(/assets/hogwarts.png)",
          backgroundPosition: "bottom",
          backgroundSize: "cover",
          y: hogwartsY,
          scale: hogwartsScale,
        }}
      />
      <motion.div
        className="absolute inset-0 z-30"
        style={{
          backgroundImage: "url(/assets/right.png)",
          backgroundPosition: "bottom",
          backgroundSize: "cover",
          y: rightY,
          x: rightX,
          scale: forestScale,
        }}
      />
      <motion.div
        className="absolute inset-0 z-40"
        style={{
          backgroundImage: "url(/assets/left.png)",
          backgroundPosition: "bottom",
          backgroundSize: "cover",
          y: leftY,
          x: leftX,
          scale: forestScale,
        }}
      />
      <motion.div
        className="absolute inset-0 z-40"
        style={{
          backgroundImage: "url(/assets/dhen_stand.png)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "bottom",
          scale: dhenScale,
          y: dhenStand,
        }}
      />
      <motion.div
        className="absolute inset-0 z-20"
        style={{
          backgroundImage: "url(/assets/smoke.png)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "bottom",
          backgroundSize: "contain",
        }}
      />
      <motion.div
        className="absolute inset-0 z-40"
        style={{
          backgroundImage: "url(/assets/smoke_dark.png)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "bottom",
          backgroundSize: "contain",
        }}
      />
    </div>
  );
};

export default HeroParallaxEffect;
