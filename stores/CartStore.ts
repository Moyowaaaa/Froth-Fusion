import { defineStore, acceptHMRUpdate } from "pinia";
import { Item, productDetails } from "types/interfaces";
import useProductStore from "./ProductStore";
import useToastStore from "./ToastStore";


 const useCartStore = defineStore("CartStore",{
    state:() => {
        return {
            cart:[] as Item[]
        }
    },
    getters:{
        productsInCart: (state) => {
            const ProductStore = useProductStore();
            let cartProducts: productDetails[] = [];
            state.cart.forEach((item) => {
              const product: any = ProductStore.products.find(
                (product) => product.id === item.id
              );
              if (product) {
                cartProducts.push({ ...product, ...item });
              }
            });
      
            return cartProducts;
          },
          itemCount(): number {
            return this.cart.length;
          },
          itemsInCart: (state): number => {
            return state.cart.reduce((total, item) => {
              return total + item.quantity;
            }, 0);
          },
      
          totalAmountOfItemInCart: (state) => {
            const ProductStore = useProductStore();
            return state.cart.reduce((total, item) => {
              const product = ProductStore.products.find((p) => p.id === item.id);
              if (product) {
                return total + product.price * item.quantity;
              }
              return total;
            }, 0);
          },
    },
    actions:{
        addItemToCart(id: number, quantity: number = 1) {
          const toastStore = useToastStore()
            const ItemId = this.cart.find((product: Item) => product.id === +id);
            if (ItemId) {
              ItemId.quantity++;
              toastStore.increasedItem()
            } else {
              this.cart.push({ id, quantity }); 
              toastStore.addedItem()
            }
          },
          increaseItem(id: number) {
            const toastStore = useToastStore()
            const ItemId = this.cart.find((item) => item.id === +id);
            if (ItemId) {
              ItemId.quantity++;
              toastStore.increasedItem()
             
            }
          },
          decreaseItem(id: number) {
            const toastStore = useToastStore()
            const ItemId = this.cart.find((item) => item.id === +id);
            if (ItemId) {
              ItemId.quantity--;
              toastStore.decreasedItem()
              if (ItemId.quantity <= 0) {
                this.removeItemFromCart(id);
                toastStore.removedItem()
              }
            }
          },
          removeItemFromCart(id: number) {
            const toastStore = useToastStore()
            this.cart = this.cart.filter((item) => item.id !== +id);
            toastStore.removedItem()
          },
    }
})

export default useCartStore