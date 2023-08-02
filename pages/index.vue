<template>
  <div>
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
</script>

<style scoped lang="scss"></style>
