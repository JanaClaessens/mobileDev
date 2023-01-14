class CartService {
    items

    constructor() {
        this.items = []
    }

    //toevoegen aan winkelmandje
    //reeds gevonden => aantal verhogen 
    addProduct(naam, prijs) {
        let gevonden = false;
        for(let i = 0; i < this.items.length; i++){
            let item = this.items[i]
            if(item.naam == naam){
                item.aantal++
                gevonden = true
            }
        }
        //niet gevonden => toevoegen
        if(!gevonden){
            this.items.push({
                naam: naam,
                prijs: prijs,
                aantal: 1,
            })
        }
    }

    getItems(){
        return this.items
    }
}

let service = new CartService()
export default service