import React from "react";
import type { NextPage } from "next";
import Script from "next/script";
import {
  Header,
  Hero,
  Skills,
  Projects,
  Footer,
  Tagline,
  Others,
} from "../components";
import Head from "next/head";
// import Darkmode from 'darkmode-js';

const Home: NextPage = () => {
  return (
    // <div>
    <div>
      <Head>
        <title>Ekanshu Joshi</title>
        <meta name="description" content="Ekanshu Joshi Portfolio Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      {/* <Script type='text/javascript' src="./index/animate.js"></Script> */}
      <main className="w-full mx-auto min-h-screen overflow-x-hidden bg-[#E7F2F5]">
        <Header />
        <Hero />
        <Skills />
        <Projects />
        <Others />
        <Tagline />
        <Footer />
      </main>
    </div>
  );
};

export default Home;
