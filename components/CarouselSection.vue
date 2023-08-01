<template>
    <section class="carouselSection">
      <div class="carouselSection__text-container">
        <h1>
          Refreshing sparkling water for a warm day or energizing smoothies for a
          pumped workout, we offer drinks for everyone.
        </h1>
      </div>
  
      <div class="slide-container">
        <Carousel :items-to-show="3.95" :wrapAround="true" :transition="500" v-model="currentSlide">
        <Slide v-for="product in productStore.products" :key="product.id">
          <div class="carousel__item">
            <!-- Pass the product and emit addToCart event when button is clicked -->
            <CarouselCard :product="product" :activeSlide="currentSlide" @addToCart="addToCart" />
            <button @click="addToCart(product)">Add to cart</button>
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
  import { ref } from 'vue';
  import useProductStore from "../stores/ProductStore";
const productStore = useProductStore()
const currentSlide = ref<number>(1);

// Function to handle addToCart event from child component
const addToCart = (product:any) => {
  console.log("Adding to cart:", product);
};
  
  const next = () => {
    currentSlide.value += 1;
  };
  
  const previous = () => {
    currentSlide.value -= 1;
  };
  

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
  }
  
  .rightArrow {
    position: absolute;
    width: 6rem;
    top: 20rem;
    right: 2rem;
  }
  </style>
  