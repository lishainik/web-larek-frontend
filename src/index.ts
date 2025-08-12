import './scss/styles.scss';



const flow: string = 'fsf'

console.log (flow)


interface IBasketModel {
    items: Map<string, number>;
    add (id: string): void;
    remove (id: string): void;
    
}

 class BasketModel implements IBasketModel {

    items: Map<string, number> = new Map()
    
    add(id: string): void {
        if (!this.items.has(id)) this.items.set(id, 0);
        this.items.set(id, this.items.get(id)! + 1);

    }

    remove(id: string): void {
        
    }

    clearBasket(): void {
        this.items.clear()
    }

   
 }  

const Basket = new BasketModel;

function addToBasket(id: string){
    Basket.add(id)
    return console.log(Basket.items)
}

addToBasket('foo')
addToBasket('foo')

addToBasket('1')
addToBasket('2')

function clearBasket() {
    Basket.clearBasket()
    return console.log(Basket)
}

clearBasket()