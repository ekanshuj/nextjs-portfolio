import React from "react";
import type { NextPage } from "next";
import { Header, Hero, Projects, Footer, Tagline, Others } from "../components";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Ekanshu Joshi</title>
        <meta name="description" content="Ekanshu Joshi Portfolio Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="https://fav.farm/👨‍💻" />
      </Head>
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
