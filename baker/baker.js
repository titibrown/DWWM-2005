

class Bakery{

    constructor(){
    
            this.running = false;

            this.level=0;
            this.level_price=100;
    
            this.mills=1;
            this.mills_price=80;
    
            this.golds=100;
    
            this.flour=50;
    
            this.baguettes=0;
        
    
    }
    update() {
        this.flour += this.mills;
    }
    
    }
    
    