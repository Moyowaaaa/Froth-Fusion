<template>
  <nav class="navbar">
    <div class="navbar__container">
      <!-- <img src="/images/logo.png" alt=""/> -->

      <div class="navbar__container--logo" @click="goToTitleSection()">
        <h1>Froth-Fusion</h1>
      </div>

      <div class="navbar__container--links-container">
        <p @click="goToStoreSection()">Shop</p>
        <p @click="goToAboutSection()">About</p>
        <p @click="toggleCart()">
          Cart
          <span class="count">
            {{ cartStore.itemsInCart }}
          </span>
        </p>
      </div>
      <div class="mobile-cart" @click="toggleCart()">
        Cart
        <span class="count">
          {{ cartStore.itemsInCart }}
        </span>
      </div>
    </div>

    <Cart v-if="showCart" @toggleCart="toggleCart()" />
  </nav>
</template>

<script setup lang="ts">
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useCartStore from "../stores/CartStore";

const cartStore = useCartStore();
gsap.registerPlugin(ScrollTrigger);

const showCart = ref<boolean>(false);

onMounted(() => {
  const navbarContainer = document.querySelector(".navbar__container");

  gsap.from((navbarContainer as HTMLDivElement).children, {
    yPercent: 200,
    ease: "power3.inOut",
    duration: 1.2,
    opacity: 0,
  });
});

const goToTitleSection = () => {
  const title = document.querySelector(".mainTitle__container");
  if (title) {
    title.scrollIntoView({ behavior: "smooth" });
  }
};

const goToStoreSection = () => {
  const shop = document.querySelector(".carouselSection");
  if (shop) {
    shop.scrollIntoView({ behavior: "smooth" });
  }
};

const goToAboutSection = () => {
  const aboutSection = document.querySelector(".heroSection");
  if (aboutSection) {
    aboutSection.scrollIntoView({ behavior: "smooth" });
  }
};

let toggleCart = () => {
  showCart.value = !showCart.value;
};
</script>

<style scoped lang="scss">
.navbar {
  display: flex;
  width: 100%;
  padding: 0 5rem;
  background-color: white;
  color: black;
  box-sizing: border-box;
  position: fixed;
  z-index: 300;
  max-height: max-content;
  overflow-y: hidden;

  &__container {
    display: flex;
    width: 100%;
    max-width: 112rem;
    justify-content: space-between;
    font-size: 1rem;
    margin: auto;
    align-items: center;

    &--logo {
      font-family: "doctor-glitch";
      color: #800080;
      cursor: pointer;
    }

    &--links-container {
      display: flex;
      gap: 2rem;
      color: black;
      font-family: "grotesk";
      cursor: pointer;
    }
  }
}

.mobile-cart {
  display: none;
}

@media screen and (max-width: 485px) {
  .navbar {
    padding: 0 1rem;

    &__container {
      &--links-container {
        display: none;
      }

      .mobile-cart {
        display: flex;
        font-size: 1rem;
        font-family: "grotesk";
      }
    }
  }
}
@media screen and (min-width: 495px) and (max-width: 1020px) {
  .navbar {
    padding: 0 1rem;
  }
}
</style>
