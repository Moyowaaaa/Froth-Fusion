<template>
  <section class="mainTitle">
    <div class="mainTitle__container">
      <div class="mainTitle__container--text-container">
        <div class="overflow-containers">
          <h1>FROTH</h1>
        </div>

        <div class="can-container">
          <img src="/images/mainCan.png" alt="" />
        </div>
        <div class="second">
          <h1 class="">FUSION</h1>
        </div>
      </div>

      <div class="button-container">
        <button class="border-button" @click="goToStoreSection()">Shop</button>
      </div>
    </div>

    <div class="image-overflow-container">
      <img src="/images/somefruit.png" class="somefruit" alt="" />
    </div>
    <div class="second-image-overflow-container">
      <img src="/images/lemon.png" class="lemon" alt="" />
    </div>
    <div class="third-image-overflow-container">
      <img src="/images/strawberry.png" class="strawberry" alt="" />
    </div>

    <!-- <Marquee /> -->
  </section>
</template>

<script setup lang="ts">
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  const titleContainer = document.querySelector(
    ".mainTitle__container--text-container"
  );

  gsap.from(
    [
      titleContainer?.children[1].children,
      ".somefruit",
      ".lemon",
      ".strawberry",
      ".button-container",
    ],
    {
      yPercent: 200,
      ease: "power3.inOut",
      duration: 1.2,
      opacity: 0,
    }
  );

  gsap.from([titleContainer?.children[0].children], {
    yPercent: 200,
    ease: "power3.inOut",
    duration: 1.5,
    opacity: 0,
    delay: 0.5,
  });

  gsap.from([titleContainer?.children[2].children], {
    yPercent: 200,
    ease: "power3.inOut",
    duration: 1.5,
    opacity: 0,
    delay: 0.5,
  });
});

const goToStoreSection = () => {
  const shop = document.querySelector(".carouselSection");
  if (shop) {
    shop.scrollIntoView({ behavior: "smooth" });
  }
};
</script>

<style scoped lang="scss">
.mainTitle {
  height: max-content;
  min-height: 100vh;
  width: 100%;
  background-color: #800080;
  background-image: url("/images/background.png");
  box-sizing: border-box;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  &__container {
    display: flex;
    max-width: 112rem;
    margin: auto;

    display: flex;
    flex-direction: column;
    align-items: center;
    display: relative;
    height: 100%;

    .overflow-containers {
      max-height: 20rem;
      overflow-y: hidden;
    }

    h1 {
      margin-top: 6rem;
      color: #e4e4e4;
      font-family: "grotesk";
      font-size: 13.75rem;
      z-index: 50;
      text-align: center;
      font-style: normal;
      line-height: normal;
      font-weight: 900;
      /* Adjust text-shadow values if needed */
      text-shadow: -10px 10px 0px #000;

      // &:nth-child(2){
      //     margin-top: -5rem;
      //     z-index: 700;

      // }
    }

    .second {
      margin-top: -15rem;
      z-index: 10 !important;
      position: absolute;
      width: 100%;
      left: 0;
      top: 30rem;
      max-height: 20rem;
      overflow-y: hidden;
      // text-align: center !;
    }

    .can-container {
      max-width: 112rem;
      margin: auto;
      max-height: 30rem;
      overflow-y: hidden;

      position: absolute;
      display: flex;
      justify-content: center;
      top: 9rem;
      object-position: center;
      left: 30rem;

      img {
        width: 30rem;
        margin: auto;
        object-fit: contain;
        z-index: 10;
      }
    }

    .button-container {
      margin-top: 20rem;
      width: 100%;
      display: flex;
      justify-content: center;

      button {
        padding: 1rem 4rem;
        border: 2px solid #000;
        background: #f4f4f4;
        border-radius: 0.3rem;
        font-family: "grotesk";
      }
    }
  }

  .image-overflow-container {
    position: absolute;
    top: 5rem;
    width: 13rem;
    right: 8rem;
    z-index: 10;
    max-height: max-content;
    overflow-y: hidden;
  }

  .second-image-overflow-container {
    position: absolute;
    width: 15rem;
    bottom: 5rem;
    left: 0rem;
    max-height: max-content;
    overflow-y: hidden;
  }

  .third-image-overflow-container {
    position: absolute;
    width: 15rem;
    right: 0rem;
    bottom: 1rem;
    max-height: max-content;
    overflow-y: hidden;
  }
}

@media screen and (max-width: 490px) {
  .mainTitle {
    overflow-x: hidden;
    &__container {
      max-width: 100%;
      padding-top: 4rem;
      h1 {
        font-size: 4rem;
        // max-width: ;
      }

      .second {
        // margin-top: -20rem;
        top: 28rem;
      }
      .can-container {
        left: 0rem !important;
        width: 100%;
        display: flex;
        justify-content: center;
        margin-top: 5rem;

        img {
          width: 20rem;
        }
      }
    }
  }

  .somefruit,
  .lemon,
  .strawberry {
    display: none;
  }
}
</style>
