
import { bakery }from "./models/bakery.js";



const myBaker = {
 data(){
     return{
         bakery: new bakery(),
     }
 }

}

methods : {

startStop: () => {

        if(this.bakery.running)
}

}

const appBaker = Vue.createApp(myBaker);
appBaker.mount('#app')