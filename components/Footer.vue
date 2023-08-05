<script setup lang="ts">
let year = ref<any>();

onMounted(() => {
  const date = new Date();
  year.value = date.getFullYear();
});
</script>

<template>
  <div class="footer">
    <div class="footer__top-section">
      <div class="footer__top-section--first">
        <h1 class="logo">Froth-Fusion</h1>

        <div class="footer__top-section--first__input-container">
          <input type="text" placeholder="Enter your email" />
          <button class="border-button-purple">Subscribe</button>
        </div>

        <p>
          By subscribing, you confirm that you agree with our Privacy Policy and
          accept that you will receive updates and newsletters from Froth
          Fusion.
        </p>
      </div>
      <div class="footer__top-section--second">
        <h1>Explore</h1>
        <p>Home</p>
        <p>Shop</p>
        <p>About us</p>
        <p>FAQ</p>
        <p>Contact</p>
      </div>
      <div class="footer__top-section--third">
        <h1>Our top picks</h1>
        <p>Peach Iced tea</p>
        <p>Superpump Smoothie</p>
        <p>Lemon Iced tea</p>
        <p>Matcha Green Tea Latte</p>
        <p>Chia Seed Energy Drink</p>
      </div>
      <div class="footer__top-section--fourth">
        <h1>Socials</h1>
        <div>
          <p>Linkedin</p>
          <p>Facebook</p>
        </div>
        <div>
          <p>Twitter</p>
          <p>Youtube</p>
        </div>
        <div><p>Instagram</p></div>
      </div>
    </div>

    <div class="footer__bottom-section">
      <p>Developed by Moyowa</p>

      <p>
        Israel Design <span>{{ year }}</span>
      </p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.footer {
  width: 100%;

  padding: 2rem 5rem;
  background-color: white;
  color: black;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;

  &__top-section {
    display: flex;
    justify-content: space-between;

    div {
      min-width: 10rem;
      color: #151515;
      font-weight: 700;
      font-family: "maby";

      h1 {
        font-size: 1.5rem;
      }

      p {
        font-weight: 400;
      }
    }

    &--first {
      flex-direction: column;

      width: 40%;
      .logo {
        font-family: "doctor-glitch";
        color: #800080;
      }

      &__input-container {
        display: flex;

        gap: 0.5rem;
        input {
          width: 20rem;
          padding: 1rem;
          border: 1px solid #000;
          background: #f4f4f4;
        }
        button {
          padding: 1rem 2rem;
          background: black;
          color: white;
          font-family: "grotesk";
          font-size: 1.5rem;
        }
      }

      p {
        font-size: 0.85rem;
        // color: black;
        font-family: "maby";
      }
    }

    &--fourth {
      display: block;

      div {
        display: flex;
        gap: 4rem;
      }
    }
  }

  &__bottom-section {
    margin-top: 4rem;
    padding-top: 1rem;
    border-top: 2px solid black;
    display: flex;
    justify-content: space-between;
    font-family: "maby";
    font-size: 1rem;
    font-weight: 500;
  }
}

@media screen and (max-width: 1020px) {
  .footer {
    padding: 1rem;

    &__top-section {
      // flex-direction: column;
      flex-wrap: wrap;
      div {
        width: auto;
      }
      &--first {
        width: 100%;

        &__input-container {
          button {
            font-size: 0.8rem;
            padding: 0.5rem;
          }
        }
      }
    }

    &__bottom-section {
      flex-direction: column;
      p {
        &:nth-child(2) {
          text-align: center;
        }
      }
    }
  }
}
</style>
