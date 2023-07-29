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
// import 'vue3-marquee/dist/style.css'
import { Vue3Marquee } from 'vue3-marquee'
import noSugarImage from '/images/noSugar.svg'
import noSugarImage2 from '/images/noSugar2.svg'
import lowCalImage from '/images/lowCals.svg'
import justDrinkImage from '/images/justDrink.svg'
import allNatural from '/images/allNatural.svg'

const marqueeData = [
    {image:noSugarImage, name: 'No added sugar'},
    {image:justDrinkImage, name: 'Just drinking'},
    {image:lowCalImage, name: 'Low calories'},
    {image:noSugarImage2, name: 'No added Sugar'},
    {image:allNatural, name: 'Natural ingredients'},

    


]

</script>

<style scoped lang="scss">

.marquee{
    // padding: 2rem 1rem;
    padding:1rem 2rem;
    background-color: white;
    width: 100%;
    position: relative;
    bottom: 0;
    color: black;

    &__container{
        display: flex;
        gap:4rem;

        &--marquee{
            display: flex;
            gap:1rem;
            align-items: center;
            min-width: max-content;

            img{
                width: 1.949rem;
height: 3.125rem;
            }

            p{
                font-family: 'doctor-glitch';
            }
        }
    
    }
}

</style>