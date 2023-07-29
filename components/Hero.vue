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
height: 5rem;
top:15rem
        }

        .flower-container{
            width: 5rem;
            position: absolute;
            top:4rem;
            right:8rem
        }
}
</style>