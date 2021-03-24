
import { bakery }from "./models/bakery.js";



const myBaker = {
 data(){
     return{
         bakery: new bakery(),
     }
 }

}

const appBaker = Vue.createApp(myBaker);
appBaker.mount('#app')