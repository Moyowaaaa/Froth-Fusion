
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
                    <input type="text" placeholder="Enter your email"/>
                    <button>Subscribe</button>
                </div>

                <p>By subscribing, you confirm that you agree with our Privacy Policy and accept that you will receive updates and newsletters from Froth Fusion.</p>
            

            </div>
            <div class="footer__top-section--second"></div>
            <div class="footer__top-section--third"></div>
            <div class="footer__top-section--fourth"></div>



        </div>

        <div class="footer__bottom-section">
            <p>Developed by Moyowa</p>

            <p>Israel Design <span>{{ year }}</span></p>
        </div>
    </div>
</template>

<style scoped lang="scss">
.footer{
    width: 100%;
    border: 2px solid blue;
    padding: 2rem 5rem;
    background-color: white;
    color: black;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;


    &__top-section{
        display: flex;

     

        &--first{
            flex-direction: column;
            border: 2px solid red;
            width: 40%;
            .logo{
                font-family: 'doctor-glitch';
            color: #800080;
            }

            &__input-container{
                display: flex;
                border: 2px solid red;
                gap:0.5rem;
                input{
                    width: 20rem;
                    padding: 1rem;
                    border: 1px solid #000;
background: #F4F4F4;
                }
                button{
                    padding: 1rem 2rem;
                    background: black;
                    color:white;
            font-family: "grotesk";
            font-size: 1.5rem;
                }
            }
        }
    }

    &__bottom-section{
        margin-top:4rem;
        padding-top:1rem;
        border-top: 2px solid black;
        display: flex;
        justify-content: space-between;
        font-family:"maby";
            font-size: 1rem;
            font-weight: 500;
    }
}
</style>