<template>
  <div id="home">
    <ToastComponent />
    <MainTitle />
    <Marquee />
    <Hero />
    <CarouselSection />
    <TestimonialsSection />
    <ShowcaseSection />
    <Misc />
  </div>
</template>

<script setup lang="ts">
import Lenis from "@studio-freight/lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import groteskFont from "/fonts/DTGetaiGroteskDisplay-Black.otf";
import mabyFont from "/fonts/MabryPro-Regular.ttf";
import doctorGlitch from "/fonts/doctor.otf";
import mabyMd from "/fonts/MabryPro-Medium.ttf";

import titleCan from "/images/mainCan.png";
import titleImage1 from "/images/somefruit.png";
import titleImage2 from "/images/lemon.png";
import titleImage3 from "/images/strawberry.png";
import background from "/images/background.png";

const fonts = [groteskFont, mabyFont, mabyMd, doctorGlitch];

const assets = [titleCan, titleImage1, titleImage2, titleImage3, background];

gsap.registerPlugin(ScrollTrigger);
let lenis: any;

if (process.client) {
  lenis = new Lenis({
    lerp: 0.2,
    smoothWheel: true,
  });

  lenis.on("scroll", () => ScrollTrigger.update());

  const scrollFn = (time: number) => {
    lenis.raf(time);
    requestAnimationFrame(scrollFn);
  };

  requestAnimationFrame(scrollFn);
}

onMounted(() => {
  //assets check
  const promises: any[] = [];

  assets.forEach((asset) => {
    const img = new Image();
    img.src = asset;
    promises.push(
      new Promise((resolve, reject) => {
        img.onload = resolve;
        img.onerror = reject;
      })
    );
  });
  new Promise((resolve, reject) => {
    fonts.forEach((font) => {
      const handwriting = new FontFace("f", `url(${font})`);
      handwriting.load().then(resolve, reject);
    });
    Promise.all(promises).then(() => {
      const container: HTMLDivElement | null = document.querySelector("#home");
      if (container) {
        container.style.display = "block";
      }
    });
  });
});

useSeoMeta({
  title: "Froth Fusion",
  ogTitle: "Froth Fusion",
  description: "Explore Froth-Fusion drink options, a drink for everyone.",
  ogDescription: "Explore Froth-Fusion drink options, a drink for everyone.",
  ogImage: "/images/favicon.ico",
  // twitterCard: "/images/favicon.ico",
});
</script>

<style scoped lang="scss"></style>
