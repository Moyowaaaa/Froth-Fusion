import { defineStore, acceptHMRUpdate } from "pinia";
import type { productDetails } from "@/types/interfaces";
import greenTea from "/images/mainCan.png";
import cranberryTea from "/images/cranberryTea.png";
import lemonTea from "/images/lemoTea.png";
import peachedTea from "/images/peachedTea.png";


 const useProductStore = defineStore("ProductStore",{
    state:() => {
        return {
            products: [
                { id: 1, name: "Cranberry Tea", image: cranberryTea, price: 10.99, accentColor:'#eaa6cd' },
  { id: 2, name: "Green tea", image: greenTea, price: 19.99, accentColor:'#70cb0e' },
  { id: 3, name: "Lemon Tea", image: lemonTea, price: 9.99, accentColor:'#eacf16' },
  { id: 4, name: "Peached Tea", image: peachedTea, price: 11.99, accentColor:'#f49663' },
  { id: 5, name: "Green Tea low sugar", image: greenTea, price: 8.99, accentColor:'#6bcb02' },
            ] as productDetails[]
        }
    }
})


export default useProductStore;
