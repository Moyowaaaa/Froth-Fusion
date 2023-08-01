<template>
  <div class="miscSection">
    <div class="miscSection__top-section">
      <div class="miscSection__top-section--left">
        <img src="/images/miscImage1.png" alt="" />
      </div>

      <div class="miscSection__top-section--right">
        <img src="/images/miscImage2.png" alt="" />
      </div>
    </div>
    <div class="miscSection__bottom-section">
        <div class="image-container">
        <img src="/images/textBubble.png" alt="" />

        </div>

        <div class="text-container">
           <img src="/images/helloText.png" alt="" />
        </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.miscSection {
  width: 100%;

  &__top-section {
    display: flex;
    height: 30rem;

    &--left {
      // height: 30rem;
      width: 50%;
      height: 100%;
      img {
        height: 100%;
        width: 100%;
        object-fit: cover;
      }
    }

    &--right {
      width: 50%;
      height: 100%;
      background: #800080;
      display: flex;
      align-items: flex-end;
      justify-content: flex-end;
      position: relative;
      img {
        height: 90%;
        width: 100%;
        object-fit: contain;
        position: absolute;
        bottom: 0;
      }
    }

  }

  &__bottom-section{
        width: 100%;
        height: 38rem;
        background-color: #aae759;
        background-image: url('/images/background.png'), url('/images/palm.png');
      box-sizing: border-box;
      background-position: center, bottom;
      background-repeat: no-repeat;
      background-size: cover,auto;
      padding: 5rem;
      display: flex;
     
      .image-container{
        width:10rem;
        img{
        width: 5rem;
        height: 5rem;
      }
      }

      .text-container{
        margin-left: 2rem;
        margin-top: 5rem;
        width: 56.3735rem;
height: 17.30144rem;
        color: black;
      }



    
    }
}
</style>
