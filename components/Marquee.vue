<template>
  <div class="marquee">
    <div class="marquee__container">
      <div class="marquee__container--marquee" v-for="data in marqueeData">
        <img :src="data.image" alt="" />
        <p>{{ data.name }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import noSugarImage from "/images/noSugar.svg";
import noSugarImage2 from "/images/noSugar2.svg";
import lowCalImage from "/images/lowCals.svg";
import justDrinkImage from "/images/justDrink.svg";
import allNatural from "/images/allNatural.svg";

const marqueeData = [
  { image: noSugarImage, name: "No added sugar" },
  { image: justDrinkImage, name: "Just drinking" },
  { image: lowCalImage, name: "Low calories" },
  { image: noSugarImage2, name: "No added Sugar" },
  { image: allNatural, name: "Natural ingredients" },
];

onMounted(() => {
  const viewportWidth = window.innerWidth;

  // if (viewportWidth > 480) {
  const marqueeContainer = document.querySelector(".marquee__container");

  gsap.from(marqueeContainer, {
    xPercent: -50,
    opacity: 0,
    duration: 5,
    ease: "power3.inOut",
    overflowX: "hidden",
    scrollTrigger: {
      trigger: marqueeContainer,
      scrub: 4,
      start: "top bottom+=20%",
      end: "center top+=20%",
    },
  });
  // }
});
</script>

<style scoped lang="scss">
.marquee {
  // padding: 2rem 1rem;
  padding: 1rem 2rem;
  background-color: white;
  width: 100%;
  position: relative;
  bottom: 0;
  color: black;

  &__container {
    display: flex;
    gap: 4rem;

    &--marquee {
      display: flex;
      gap: 1rem;
      align-items: center;
      min-width: max-content;

      img {
        width: 1.949rem;
        height: 3.125rem;
      }

      p {
        font-family: "doctor-glitch";
      }
    }
  }
}

@media screen and (max-width: 485px) {
  .marquee {
    max-width: 100%;
    padding: 1rem 0rem;
    overflow-x: scroll;
  }
}
</style>
