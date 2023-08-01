<template>
    <section class="heroSection">

        <div class="heroSection__text-container">
            Explore Froth-Fusion drink options, a drink for everyone.
        </div>

        <div class="arrow-container">
            <img src="/images/downArrow.svg" alt=""/>
        </div>

        <div class="flower-container">
            <img src="/images/flower.png" alt=""/>
        </div>
    </section>
</template>

<script setup lang="ts">
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
    const heroContainer = document.querySelector('.heroSection')
    gsap.from((heroContainer as HTMLDivElement)?.children[1],{
        height:'5rem',
        ease:"power3.inOut",
        duration:1,
        delay:0.5,
        scrollTrigger:{
            trigger:heroContainer?.children[1],
            scrub:4
        }
    })
})

</script>

<style scoped lang="scss">
.heroSection{
    // position: absolute;
    position: relative;
    height: max-content;
    width: 100%;
    padding: 5rem;
    background-image: url('/images/background.png');
      box-sizing: border-box;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
    background-color: #aae759;

    &__text-container{
          font-family: "grotesk";
          color: black;
          font-size: 5rem;
          text-align: center;
          max-width: 60rem ;
          margin: auto;
        }


        .arrow-container{
            position: absolute;
            width: 5rem;
height: 10rem;


top:15rem;

img{
    height: 100%;
    width: 100%;
}
        }

        .flower-container{
            width: 5rem;
            position: absolute;
            top:4rem;
            right:8rem
        }
}
</style>