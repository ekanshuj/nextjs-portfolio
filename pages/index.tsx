import React from "react";
import type { NextPage } from "next";
// import Script from "next/script";
import { Header, Hero, Projects, Footer, Tagline, Others } from "../components";
import Head from "next/head";
// import { useTheme } from "next-themes";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Ekanshu Joshi</title>
        <meta name="description" content="Ekanshu Joshi Portfolio Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      {/* <Script type='text/javascript' src="./index/animate.js"></Script> */}
      <main className="w-full mx-auto min-h-screen overflow-x-hidden bg-[#E7F2F5] dark:bg-black dark:text-white">
        <Header />
        <Hero />
        <Projects />
        <Others />
        <Tagline />
        <Footer />
      </main>
    </div>
  );
};

export default Home;
