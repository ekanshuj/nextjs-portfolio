import React from "react";
import type { NextPage } from "next";
import Script from "next/script";
// import Image from 'next/image';
import { Hero, Projects, Footer, Tagline } from "../components";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div className="grid place-items-center">
      <Head>
        <title>Ekanshu Joshi</title>
        <meta name="description" content="Ekanshu Joshi Portfolio Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      {/* <Script type='text/javascript' src="./index/animate.js"></Script> */}

      <main className=" md:w-[90%] min-h-screen">
        <Hero />
        <Projects />
        <Tagline />
        <Footer />
      </main>
    </div>
  );
};

export default Home;
