<template>
  <div class="cartItem">
    <div class="cartItem__image-container">
      <img :src="product.image" alt="" />
    </div>

    <div class="cartItem__text-container">
      <p>{{ product.name }}</p>

      <div class="desc-section">
        <p>${{ product.price }}</p>

        <div>
          <button @click="cartStore.decreaseItem(product.id)">-</button>
          {{ product.quantity }}
          <button @click="cartStore.increaseItem(product.id)">+</button>

          <button
            style="margin-left: 0.5rem"
            @click="cartStore.removeItemFromCart(product.id)"
          >
            X
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import useCartStore from "../stores/CartStore";
const cartStore = useCartStore();

defineProps(["product"]);
</script>

<style scoped lang="scss">
.cartItem {
  width: 100%;
  display: flex;
  margin-bottom: 1rem;
  align-items: center;

  &__image-container {
    max-height: 4rem;
    max-width: 4rem;
    min-height: 4rem;
    min-width: 4rem;
    img {
      height: 100%;
    }
  }

  &__text-container {
    width: 100%;
    p {
      font-family: "grotesk";
    }

    .desc-section {
      display: flex;
      width: 100%;

      justify-content: space-between;
      align-items: center;
      margin-top: -1rem;
    }
  }
}
</style>
