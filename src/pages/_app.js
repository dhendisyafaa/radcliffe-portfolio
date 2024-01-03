import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import "tailwindcss/tailwind.css";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={router.route}
        initial="initialState"
        animate="animateState"
        exit="exitState"
        transition={{
          duration: 1,
        }}
        variants={{
          initialState: {
            opacity: 0,
            clipPath: "inset(0 0 100% 0)",
          },
          animateState: {
            opacity: 1,
            clipPath: "inset(0 0 0 0)",
          },
          exitState: {
            clipPath: "inset(0 0 100% 0)",
          },
        }}
      >
        <Component {...pageProps} />
      </motion.div>
    </AnimatePresence>
  );
}

export default MyApp;
