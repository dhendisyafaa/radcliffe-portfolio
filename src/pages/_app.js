import { AnimatePresence, motion } from "framer-motion";
import Head from "next/head";
import { useRouter } from "next/router";
import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [queryClient] = useState(() => new QueryClient());

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <meta name="description" content="Education App" />
        <meta name="keywords" content="Education App" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <title>Dhendi Syafa A. P | Portfolio</title>
      </Head>
      <main>
        <QueryClientProvider client={queryClient}>
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
              <ReactQueryDevtools initialIsOpen={false} />
              <Component {...pageProps} />
            </motion.div>
          </AnimatePresence>
        </QueryClientProvider>
      </main>
    </>
  );
}

export default MyApp;
