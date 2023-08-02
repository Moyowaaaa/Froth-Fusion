<template>
  <Transition name="fader">
    <div class="cart">
      <div class="cart__container">
        <div class="top">
          <h1>CART</h1>
          <p @click="$emit('toggleCart')">X</p>
        </div>
        <div class="items-container">
          <CartItem
            v-for="product in cartStore.productsInCart"
            :product="product"
          />
        </div>
        <div class="bottom">
          <div>
            <p>
              Checkout {{ cartStore.itemsInCart }} Item<span
                v-if="cartStore.itemsInCart > 1"
                >s</span
              >
            </p>
          </div>
          <div>
            <img src="/images/rightArrow.png" alt="" />
            <p>${{ cartStore.totalAmountOfItemInCart }}</p>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import useCartStore from "../stores/CartStore";
const cartStore = useCartStore();
</script>

<style scoped lang="scss">
.cart {
  position: fixed;
  width: 20rem;
  height: 100vh;
  background-color: white;
  right: 0;
  z-index: 50;
  top: 0;
  color: black;
  // z-index: 80000;
  overflow-y: scroll;
  box-sizing: border-box;
  cursor: pointer;

  &__container {
    padding: 0 2rem;

    .top {
      display: flex;
      justify-content: space-between;
      align-items: center;

      p {
        font-size: 1.5rem;
      }
    }

    .bottom {
      position: absolute;
      height: max-content;

      width: 100%;
      bottom: 0;
      display: flex;
      flex-direction: column;
      left: 0;

      div {
        padding-left: 0.5rem;
        &:nth-child(2) {
          // padding: 0.5rem 0.5rem;
          padding-right: 1rem;
          background-color: #800080;
          color: white;
          display: flex;
          justify-content: space-between;
          align-items: center;

          p {
            font-size: 1.5rem;
            font-weight: bold;
          }

          img {
            width: 6rem;
            height: 4rem;
          }
        }
      }
    }
  }
}

.fader-enter-active {
  transition: all 0.3s ease-out;
}

.fader-leave-active {
  transition: all 0.3s ease-in-out;
}

.fader-enter-from,
.fader-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
