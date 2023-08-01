
  <template>
      <div class="carouselCard" @click="handleClick()" id="i">
          <div class="carouselCard__image-container">
              <img :src="product.image" alt="" />
          </div>
  
          <div class="carouselCard__title-container">
              <p>{{product.name}}</p>
          </div>
  
          <div class="carouselCard__price-container">
              ${{product.price}}
          </div>
          
      </div>
  </template>
  
  <script setup lang="ts">
import type { productDetails } from "@/types/interfaces";

  
  defineProps<{ product: productDetails, activeSlide: number }>()

  defineEmits();



const handleClick = () => {
  // Do something without emitting an event
  console.log('Clicked without emitting an event');
};

  </script>
  

<style scoped lang="scss">
.carouselCard{
    display: flex;
    flex-direction: column;
    align-items: center;
    // gap:2rem;
    min-height: 40rem;
   height:max-content !important;
//    padding: 25rem 2rem !important;
    width: 23rem !important;
   
    height: max-content;
    
    font-family: "grotesk";
    


    &__image-container{
        width: 25rem;
        max-height: 25rem;
        

        img{
            height: 90%;
        }
    }

    &__title-container{
        font-size: 2rem;
    }

    &__price-container{
        border-radius: 0.625rem;
border: 1px solid rgba(0, 0, 0, 0.80);
background: #FFF;
padding: 0.5rem;
display: flex;
align-items: center;
justify-content: center;
    }
}
</style>


<!-- <template>
    <div class="card">

    </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.card{
    height:30rem;
    width: 20rem !important;
    border: 2px solid black;
}
</style> -->