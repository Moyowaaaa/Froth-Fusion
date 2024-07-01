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

useSeoMeta({
  title: "Froth Fusion",
  ogTitle: "Froth Fusion",
  description: "Explore Froth-Fusion drink options, a drink for everyone.",
  ogDescription: "Explore Froth-Fusion drink options, a drink for everyone.",
  ogImage:
    "https://res.cloudinary.com/dyap7epew/image/upload/v1707733544/projects/vxbvgnmyjwjghv5rnpde.png",
  twitterImage:
    "https://res.cloudinary.com/dyap7epew/image/upload/v1707733544/projects/vxbvgnmyjwjghv5rnpde.png",
});

onMounted(() => {
  const timeline = gsap.timeline({ delay: 0.5 });
  gsap.set("#home", {
    autoAlpha: 0,
  });
  gsap.to("#home", {
    delay: 0.2,
    autoAlpha: 1,
  });
});
</script>

<style scoped lang="scss">
#home {
  display: block;
}
</style>
