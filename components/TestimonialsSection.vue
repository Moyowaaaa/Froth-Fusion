<template>
  <div class="testimonialsSection">
    <div class="testimonialsSection__testimonialsContainer">
      <div class="testimonialsSection__testimonialsContainer--first">
        <TestimonialCard
          :testimonial="{
            name: 'Ayo',
            text: 'Never understood the hype around Froth Fusion drinks till I tried it out myself. HOLY SHIT!',
            position: 'M.D Cadbury',
          }"
        />
        <TestimonialCard
          :testimonial="{
            name: 'Baki',
            text: `My twelve-year old loves Froth Fusion so much, and he's not the only one! It's incredible!`,
            position: 'CEO, Baki Ent',
          }"
        />
      </div>
      <div class="testimonialsSection__testimonialsContainer--second">
        <TestimonialCard
          :testimonial="{
            name: 'Adeniyi',
            text: `Froth Fusion's a great way to kickstart the day!`,
            position: 'CEO, Daily Planet',
          }"
        />
        <TestimonialCard
          :testimonial="{
            name: 'Bobby',
            text: `The new leading energy drink on the market!`,
            position: 'Chairman, Man Utd',
          }"
        />
      </div>
      <div class="testimonialsSection__testimonialsContainer--third">
        <TestimonialCard
          :testimonial="{
            name: 'Josh D.',
            text: `My coworkers have taken to stealing my Froth Fusion drinks. Can't say I blame them.`,
            position: 'CEO, Daily News',
          }"
        />
        <TestimonialCard
          :testimonial="{
            name: 'Jordan',
            text: `I refuse to believe there are no added sugars in the drinks, they're incredible!! Keeps my coworker running all day!`,
            position: 'Chairman, Star Labs',
          }"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.testimonialsSection {
  width: 100%;
  padding: 5rem;
  background-color: #ffc0cb;
  background-image: url("/images/background.png");
  box-sizing: border-box;

  &__testimonialsContainer {
    display: flex;
    width: 100%;

    justify-content: space-between;

    &--first {
      width: 30%;

      display: flex;
      flex-direction: column;
      gap: 4rem;
    }

    &--second {
      width: 30%;

      display: flex;
      flex-direction: column;
      gap: 4rem;
      margin-top: 10rem;
    }

    &--third {
      width: 30%;

      display: flex;
      flex-direction: column;
      gap: 4rem;
    }
  }
}

@media screen and (max-width: 485px) {
  .testimonialsSection {
    padding: 2rem 0;
    &__testimonialsContainer {
      flex-direction: column;

      div {
        width: 90%;
        margin: auto;
        gap: 0.5rem;
        margin-top: 1rem;
      }
    }
  }
}

@media screen and (min-width: 495px) and (max-width: 1022px) {
  .testimonialsSection {
    padding: 2rem 0;
    &__testimonialsContainer {
      // flex-direction: column;
      flex-wrap: wrap;
    }

    div {
      min-width: 49%;
      // margin: auto;
      gap: 0.5rem;
      margin-top: 1rem;
      justify-content: flex-start;

      &:nth-child(3) {
        display: flex;
      }
    }
  }
}
</style>
