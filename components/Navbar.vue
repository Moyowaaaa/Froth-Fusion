<template>
    <nav class="navbar">
        <div class="navbar__container">
            <!-- <img src="/images/logo.png" alt=""/> -->

            <div class="navbar__container--logo">
                <h1>Froth-Fusion</h1>
            </div>

            <div class="navbar__container--links-container">
                <p>Shop</p>
                <p>About</p>
                <p>Cart</p>
            </div>
        </div>

    </nav>

</template>

<script setup lang="ts">
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
    const navbarContainer = document.querySelector('.navbar__container')

    gsap.from(navbarContainer.children, {
  yPercent: 200,
  ease: "power3.inOut",
  duration: 1.2,
  opacity: 0,
});
})

</script>

<style scoped lang="scss">
.navbar{
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

    &__container{
        display: flex;
        width: 100%;
        max-width: 112rem;
        justify-content: space-between;
        font-size: 1rem;
        margin: auto;
        align-items: center;

        &--logo{
            font-family: 'doctor-glitch';
            color: #800080;
            
        }

      
        &--links-container{
            display: flex;
            gap:2rem;
            color:black;
            font-family: "grotesk";

        }
    }
}
</style>