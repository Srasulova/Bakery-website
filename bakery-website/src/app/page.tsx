"use client";

import Image from "next/image";
import styles from "./page.module.css";
import NavBar from "./navBar";
import HeroAera from "./heroAera";
import HowItWorks from "./howItworks";
import Footer from "./footer";
import { useState } from "react";
import GalleryCollapsed from "./galleryCollapsed";
import GalleryExpanded from "./galleryExpanded";
import WhatWeMake from "./whatWeMake";

export default function Home() {
  const [showGalleryExpanded, setShowGalleryExpaned] = useState(false);

  const handleToggleGallery = () => {
    setShowGalleryExpaned(!showGalleryExpanded);
  };

  return (
    <main className="">
      <NavBar />
      <HeroAera />
      <WhatWeMake />
      <HowItWorks />
      {showGalleryExpanded ? (
        <GalleryExpanded toggleGallery={handleToggleGallery} />
      ) : (
        <GalleryCollapsed toggleGallery={handleToggleGallery} />
      )}

      <Footer />
    </main>
  );
}
