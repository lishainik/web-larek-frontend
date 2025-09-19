import { createElement, ensureElement } from "../utils/utils";
import { Component } from "./base/Component"
import { IEvents } from "./base/events";
import { IBasketModel } from "./basket";

interface IBasketView {
    total: number;
    list: HTMLElement[]
    buttonDisabled: boolean;

}



export class BasketView extends Component<IBasketView> {
   
    protected _BasketViewList: HTMLElement
    protected _BasketSubmitButton: HTMLButtonElement;
    protected _BasketViewTotal: HTMLElement;

     constructor(container:HTMLElement, protected events: IEvents) { 
        super(container);

        this._BasketSubmitButton = ensureElement('.basket__button', this.container) as HTMLButtonElement;
        this._BasketViewList = ensureElement('.basket__list', this.container);
        this._BasketViewTotal = ensureElement('.basket__price', this.container);

        this._BasketSubmitButton.addEventListener('click', () => {
            events.emit('basket:submit')
        })

     }

     set total (value: number) {
        this.setText(this._BasketViewTotal, `${value} синапсов`)
     }

      set list(items: HTMLElement[]) {
        if (items.length) {
              this._BasketViewList.replaceChildren(...items);
        } else {
               this._BasketViewList.replaceChildren(createElement<HTMLParagraphElement>('p', {
                textContent: 'Корзина пуста',
                
               }));
        }
        
       
    }

    set buttonDisabled (value: boolean) {
     this.setDisabled(this._BasketSubmitButton, value)
    }
}