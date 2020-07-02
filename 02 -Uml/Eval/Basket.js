import Fruit from './Fruit.js';
import Customer from './Customer.js';
/**
 * @class Basket
 */

class Basket
{

    /**
     * 
     * @param Object 
     */
    constructor(_Basket){
       
        this._ref = 0;
       
        

        if (_ref !== undefined) { 
            return " Not existing "
        }
    }


get_ref() {
    return this._ref;

}


get_basket() {
    return this.get_basket;

}



set_basket(_basket) {
    this._basket = _basket
}

get_TotalPrice(get_TotalPrice) {
    this.get_TotalPrice = _TotalPrice
}

}