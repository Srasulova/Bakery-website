"use client";

import Image from "next/image";
import styles from "./page.module.css";
import NavBar from "./navBar";
import HeroAera from "./heroAera";
import HowItWorks from "./howItworks";
import Footer from "./footer";
import { useState } from "react";
import GalleryCollapsed from "./galleryCollapsed";

export default function Home() {
  return (
    <main className="">
      <NavBar />
      <HeroAera />
      <HowItWorks />
      <GalleryCollapsed />
      <Footer />
    </main>
  );
}
