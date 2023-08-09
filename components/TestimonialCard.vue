<template>
  <div class="testimonialCard">
    <img src="/images/quote.svg" alt="" class="quote" />
    <p>{{ testimonial?.text }}</p>

    <div class="testimonialCard__customer">
      <div class="testimonialCard__customer--account">
        <img src="/images/avatar.svg" alt="" />
        <div>
          <p style="font-weight: bold">{{ testimonial?.name }}</p>
          <p>{{ testimonial?.position }}</p>
        </div>
      </div>

      <img src="/images/stars.svg" alt="" />
    </div>
  </div>
</template>

<script setup lang="ts">
type Testimonial = {
  text: string;
  name: string;
  position: string;
};

interface testimony {
  testimonial: Testimonial;
}

defineProps<testimony>();
</script>

<style scoped lang="scss">
.testimonialCard {
  width: 90%;
  height: 12rem;
  background-color: white;
  color: black;
  border-radius: 1.875rem;
  border: 2px solid #151515;
  padding: 0.2rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 1rem;
  font-size: 1rem;
  position: relative;

  .quote {
    position: absolute;
    top: 2rem;
    width: 1.5rem;
  }

  p {
    margin-top: 3rem;
    padding-left: 2rem;
  }

  &__customer {
    display: flex;
    width: 100%;

    display: flex;
    justify-content: space-between;

    img {
      width: 4rem;

      &:nth-child(1) {
        width: 2rem;
      }
    }

    &--account {
      display: flex;
      gap: 0.5rem;

      div {
        display: flex;
        flex-direction: column;
        p {
          margin: 0;
          padding: 0;
        }
      }
    }
  }
}
</style>
