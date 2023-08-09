<template>
  <section class="carouselSection">
    <div class="carouselSection__text-container">
      <h1>
        Refreshing sparkling water for a warm day or energizing smoothies for a
        pumped workout, we offer drinks for everyone.
      </h1>
    </div>

    <div class="slide-container">
      <Carousel
        :items-to-show="itemsToShow"
        :wrapAround="true"
        :transition="500"
        v-model="currentSlide"
      >
        <Slide v-for="product in productStore.products" :key="product.id">
          <div class="carousel__item">
            <CarouselCard
              :product="product"
              :activeSlide="currentSlide"
              @addToCart="addToCart"
            />
            <button
              :style="{ boxShadow: `4px 2px 0px ${product.accentColor}` }"
              @click="addToCart(product)"
            >
              Add to cart
            </button>
          </div>
        </Slide>
      </Carousel>
    </div>

    <div class="leftArrow" @click="previous()">
      <img src="/images/leftArrow.png" alt="" />
    </div>

    <div class="rightArrow" @click="next()">
      <img src="/images/rightArrow.png" alt="" />
    </div>
  </section>
</template>

<script setup lang="ts">
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide } from "vue3-carousel";
import { ref, onMounted, onBeforeUnmount } from "vue";
import useProductStore from "../stores/ProductStore";
import useCartStore from "../stores/CartStore";
import useToastStore from "../stores/ToastStore";
import { productDetails } from "types/interfaces";

const productStore = useProductStore();
const cartStore = useCartStore();
const toastStore = useToastStore();
const currentSlide = ref<number>(1);
const itemsToShow = ref<number>(1);
const addToCart = (product: productDetails) => {
  cartStore.addItemToCart(product.id, 1);
};

const next = () => {
  currentSlide.value += 1;
};

const previous = () => {
  currentSlide.value -= 1;
};

const updateItemsToShow = () => {
  const viewportWidth = window.innerWidth;

  if (viewportWidth <= 480) {
    itemsToShow.value = 1;
  } else if (viewportWidth > 480 && viewportWidth <= 1020) {
    itemsToShow.value = 2;
  } else {
    itemsToShow.value = 3.95;
  }
};

onMounted(() => {
  updateItemsToShow();
  window.addEventListener("resize", updateItemsToShow);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", updateItemsToShow);
});
</script>
<style scoped lang="scss">
.carouselSection {
  min-height: 120vh;
  padding: 2rem;

  background-image: url("/images/background.png");
  box-sizing: border-box;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: white;
  color: #151515;
  position: relative;

  &__text-container {
    // width: 50rem;
    max-width: 35rem;
    margin: auto;
    font-family: "grotesk";
    text-align: center;
    // font-size: rem;
  }
}

.navigation-buttons {
  position: absolute;
  top: 10rem;
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: -4rem;
  div {
    img {
      width: 6rem;
    }
  }
}

.carousel__slide {
  padding: 5px;

  height: 30rem;
  width:max-content button {
    display: none !important;
  }
}

.carousel__viewport {
  perspective: 2000px;
}

.carousel__track {
  transform-style: preserve-3d;
}

.carousel__slide--sliding {
  transition: 0.5s;
}

.carousel__slide {
  opacity: 0.9;
  height: max-content !important;
  transform: scale(0.7);
  button {
    display: none !important;
  }
  //   transform: rotateY(-20deg) scale(0.9);
}

.carousel__slide--active ~ .carousel__slide {
  transform: rotateY(20deg) scale(0.7);
  margin: 0 6rem;
}

.carousel__slide--prev {
  opacity: 1;
  margin-right: 2rem;
  transform: rotateY(-10deg) scale(0.7);
}

.carousel__slide--next {
  opacity: 1;
  transform: rotateY(10deg) scale(0.7);
}

.carousel__slide--active {
  opacity: 1;
  transform: rotateY(0) scale(1);

  button {
    margin: 0 5rem;
    padding: 1rem 2rem;
    display: flex !important;
    background: #151515 !important;
    color: white !important;
    font-family: "grotesk" !important;
    font-size: 1.25rem !important;
    margin-bottom: 5rem !important;
    border-radius: 0.3125rem;

    &:hover {
      box-shadow: none !important;
      transition: all 1s;
    }
  }
}

.slide-container {
  position: absolute;
  left: 2rem;
  width: 100%;
  left: 0;
}

.leftArrow {
  position: absolute;
  width: 6rem;
  top: 20rem;

  &:hover {
    cursor: pointer;
    left: 1rem;
  }
}

.rightArrow {
  position: absolute;
  width: 6rem;
  top: 20rem;
  right: 2rem;
  &:hover {
    cursor: pointer;
    right: 1rem;
  }
}

@media screen and (max-width: 485px) {
  .carouselSection {
    min-height: 130dvh;
    padding: 2rem 0;

    height: max-content;
    &__text-container {
      max-width: 100%;
      width: 100%;
      font-size: 1rem;
      text-align: center;
    }
  }
  .leftArrow {
    position: absolute;
    width: 6rem;
    top: 22rem;
    left: 0;

    &:hover {
      cursor: pointer;
      left: 1rem;
    }
  }

  .rightArrow {
    position: absolute;
    width: 6rem;
    top: 22rem;
    right: 0;
    &:hover {
      cursor: pointer;
      right: 1rem;
    }
  }

  .carousel__slide {
    // display: ;
  }

  .carousel__slide--active {
    button {
      position: relative;
      width: max-content;
      margin-left: auto;
      margin-right: auto;
      margin-top: 10rem;
      font-size: 1rem !important;
    }
  }

  .carousel__slide--active ~ .carousel__slide {
    // display: none;
    margin: 0 !important;
  }

  .carousel__slide--next {
    // display: none;
    margin: 0 !important;
  }
  .carousel__slide--prev {
    // display: none;
    margin: 0 !important;
  }
}

@media only screen and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) {
  /* CSS rules specific to iPhone X */
  .carouselSection {
    min-height: 145dvh;
    padding: 2rem 0;

    .leftArrow {
      position: absolute;
      width: 6rem;
      top: 30rem;
      left: 0;

      &:hover {
        cursor: pointer;
        left: 1rem;
      }
    }

    .rightArrow {
      position: absolute;
      width: 6rem;
      top: 30rem;
      right: 0;
      &:hover {
        cursor: pointer;
        right: 1rem;
      }
    }
  }
}
</style>
