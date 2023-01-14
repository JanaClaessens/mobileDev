class SavedItemsService {
    items

    constructor() {
        this.items = []
    }

    //toevoegen aan saved items
    addProduct(id, naam, prijs) {
        // reeds gevonden => niet toevoegen
        if(!this.isToegevoegdAanSavedItems(id)){
            // niet gevonden => toevoegen
            this.items.push({
                id: id,
                naam: naam,
                prijs: prijs
            })
        }
    }

    isToegevoegdAanSavedItems(id) {
        for(let i = 0; i < this.items.length; i++){
            let item = this.items[i]
            if(item.id == id){
                return true
            }
        }
        return false
    }

    getItems(){
        return this.items
    }
}

let service = new SavedItemsService()
export default service