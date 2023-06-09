import Image from "next/image";
import styles from "./page.module.css";
import NavBar from "./navBar";
import HeroAera from "./heroAera";
import HowItWorks from "./howItworks";
import Footer from "./footer";
import { useState } from "react";

export default function Home() {
  return (
    <main className="">
      <NavBar />
      <HeroAera />
      <HowItWorks />
      <Footer />
    </main>
  );
}
