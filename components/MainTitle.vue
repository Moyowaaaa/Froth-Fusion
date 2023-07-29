<template>
    <section class="mainTitle">
      <div class="mainTitle__container">
        <div class="mainTitle__container--text-container">
            <!-- <div class="title">
                <h1>FROTH</h1>
          <h1 class="second">FUSION</h1>
            </div>

            <div class="titleCan">
            <img src="/images/mainCan.png" alt="" />
            </div> -->

            <h1>FROTH</h1>
            <div class="can-container">
              <img src="/images/mainCan.png" alt="" />
            </div>
            <div class="second">
              <h1 class="">FUSION</h1>
            
            </div>

           
        
          
        </div>

        <div class="button-container">
          <button>Shop</button>
        </div>


       
      </div>

      <img src="/images/somefruit.png" class="somefruit" alt=""/>
      <img src="/images/lemon.png" class="lemon" alt=""/>
      <img src="/images/strawberry.png" class="strawberry" alt=""/>
    
      <!-- <Marquee /> -->
    </section>
  </template>
  
  <script setup lang="ts"></script>
  
  <style scoped lang="scss">
    .mainTitle {
      height: max-content;
      min-height: 100vh;
      width: 100%;
      background-color: #800080;
      background-image: url('/images/background.png');
      box-sizing: border-box;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
  
  
      &__container {
        display: flex;
        max-width: 112rem;
        margin: auto;
       
        display: flex;
        flex-direction: column;
        align-items: center;
        display: relative;
        height: 100%;
        

        h1 {
          margin-top: 5rem;
            color: #e4e4e4;
            font-family: "grotesk";
            font-size: 13.75rem;
           z-index: 50;
            text-align: center;
            font-style: normal;
            line-height: normal;
            font-weight: 900;
            /* Adjust text-shadow values if needed */
            text-shadow: -10px 10px 0px #000;

            // &:nth-child(2){
            //     margin-top: -5rem;
            //     z-index: 700;
            
            // }
          }

          .second{
            margin-top: -10rem;
            z-index: 10 !important;
            position: absolute;
            width:100%;
            left: 0;
            top:30rem;
            // text-align: center !;
          }

          .can-container{
            max-width: 112rem;
        margin: auto;
        
        position: absolute;
        display: flex;
        justify-content: center;
        top:12rem;
        object-position: center;
        left:30rem;

        img{
          width: 30rem;
          margin: auto;
          object-fit: contain;
          z-index: 10;
        }
        
          }




.button-container{
  margin-top: 5rem;
  width: 100%;

  display: flex;
  justify-content: center;

  button{
    padding: 1rem 4rem;
    border: 2px solid #000;
background: #F4F4F4;
border-radius: 0.3rem;
font-family: "grotesk";

  }
}


  
           }

           .somefruit{
            position: absolute;
            top: 5rem;
            width: 13rem;
            right:8rem;
            z-index: 10;
           }

           .lemon{
            position: absolute;
            width: 15rem;
            bottom:5rem;
            left:0rem
           }

           .strawberry{
            position: absolute;
            width: 15rem;
            right:0rem;
            bottom:1rem
           }
    }
  </style>
  