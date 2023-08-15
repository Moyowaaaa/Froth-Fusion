<template>
  <div class="showcaseSection">
    <div class="showcaseImageContainer">
      <img src="/images/showcase1.png" alt="" />
    </div>
    <div class="showcaseImageContainer">
      <img src="/images/showcase2.png" alt="" />
    </div>
    <div class="showcaseImageContainer">
      <img src="/images/showcase3.png" alt="" />
    </div>
    <div class="showcaseImageContainer">
      <img src="/images/showcase4.png" alt="" />
    </div>
    <div class="showcaseImageContainer">
      <img src="/images/showcase5.png" alt="" />
    </div>
    <div class="showcaseImageContainer">
      <img src="/images/showcase6.png" alt="" />
    </div>

    <div class="text-container">
      <div class="text-container__content">
        <h1>Experience the Benefits of Froth - Fusion Today.</h1>
        <p>
          Still have doubts? Don't! Froth Fusion is FDA-approved and its health
          benefits are well documented! Purchase one of our drinks now and
          experience the magical benefits yourself!
        </p>
        <button class="border-button-purple" @click="goToStoreSection()">
          Shop now
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { intersectionObserver } from "../animations/useIntersectionObserver";
gsap.registerPlugin(ScrollTrigger);

const goToStoreSection = () => {
  const shop = document.querySelector(".carouselSection");
  if (shop) {
    shop.scrollIntoView({ behavior: "smooth" });
  }
};

onMounted(() => {
  const viewportWidth = window.innerWidth;
  const textContainer = document.querySelector(".text-container__content");
  const showcaseImageContainer = document.querySelectorAll(
    ".showcaseImageContainer"
  );

  const tl = gsap.timeline();

  if (viewportWidth > 500) {
    showcaseImageContainer.forEach((container) =>
      intersectionObserver(container, { threshold: 0.02 }).then(() => {
        tl.fromTo(
          container,
          { yPercent: 100 },
          { duration: 0.5, yPercent: 0 }
        ).fromTo(
          container.children,
          { yPercent: -100 },
          { duration: 0.5, yPercent: 0 },
          "<"
        );
      })
    );

    tl.from(textContainer, {
      opacity: 0,
      duration: 1.5,
      ease: "power3.inOut",
      y: 100,
      delay: 0.6,
      scrollTrigger: {
        trigger: textContainer,
      },
    });
  }
});
</script>

<style scoped lang="scss">
.showcaseSection {
  width: 100%;

  position: relative;
  padding-top: 2rem;
  background-color: white;
  height: 130vh;

  .showcaseImageContainer {
    max-height: max-content;
    overflow: hidden;

    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }

    &:nth-child(1) {
      width: 22.25rem;
      height: 27.875rem;
      position: absolute;
      left: 0;
      top: 1rem;
    }

    &:nth-child(2) {
      width: 16.95369rem;
      height: 16.95369rem;
      position: absolute;
      margin: auto;
      left: 37rem;
    }

    &:nth-child(3) {
      width: 13.4375rem;
      height: 16.8125rem;
      position: absolute;
      margin: auto;
      right: 2rem;
    }

    &:nth-child(4) {
      width: 13.8125rem;
      height: 17.3125rem;
      position: absolute;
      bottom: 10rem;
      left: 2rem;
    }

    &:nth-child(5) {
      width: 13rem;
      height: 13rem;
      position: absolute;
      left: 38.5rem;
      bottom: 4rem;
    }

    &:nth-child(6) {
      width: 16.4375rem;
      height: 20.5rem;
      position: absolute;
      bottom: 10rem;
      right: 2rem;
    }
  }

  .text-container {
    position: absolute;
    width: 100%;
    height: 100%;

    top: 0;
    display: flex;
    flex-direction: column;
    color: black;
    align-items: center;
    justify-content: center;

    &__content {
      display: flex;
      text-align: center;
      flex-direction: column;
      align-items: center;

      h1 {
        font-family: "grotesk";
        font-size: 2.75rem;
        max-width: 45rem;
      }

      p {
        font-family: "maby";
        font-size: 1.125rem;
        max-width: 35rem;
      }

      button {
        padding: 1rem 2rem;
        border-radius: 0.3125rem;
        background: #151515;
        color: white;
        font-family: "grotesk";
        font-size: 1.5rem;
      }
    }
  }
}

@media screen and (max-width: 485px) {
  .showcaseSection {
    width: 100%;
    height: 40rem;
    display: flex;
    align-items: center;
  }
  .showcaseImageContainer {
    display: none;
    img {
      display: none;
    }
  }
  .text-container {
    h1 {
      max-width: 100%;
    }
  }
}
@media screen and (min-width: 495px) and (max-width: 1020px) {
  .showcaseSection {
    width: 100%;
    height: 100vh;
    margin-top: 5rem;
  }
  .showcaseImageContainer {
    // display: none;
    img {
      transform: scale(0.5);
      border: 2px solid red;
    }
    &:nth-child(1) {
      left: -5rem !important;
      top: -5rem !important;
      position: absolute;
    }
    &:nth-child(2) {
      left: 15rem !important;
      top: 2rem !important;
      position: absolute;
    }

    &:nth-child(4) {
      left: 1rem !important;
      bottom: 5rem !important;
      position: absolute;
    }

    &:nth-child(6) {
      right: 1rem !important;
      bottom: 5rem !important;
      position: absolute;
    }

    &:nth-child(5) {
      left: 15rem !important;
      bottom: 2rem !important;
      position: absolute;
    }
  }
}
</style>
