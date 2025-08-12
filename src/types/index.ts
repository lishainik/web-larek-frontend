
export interface IShopItem {
    id: string;
    description: string;
    image: string;
    title: string;
    category: string;
    price: number | null;
}

export interface IOrderForm {
    payment: 'online'| 'onDelivery';
    deliveryAdress: string;
    mail: string;
    phone: string;

}

// export interface ICatalog {
//     items: IShopItem[];
//     setItems(items: IShopItem[]):void;
//     getItem(id: string): IShopItem;
// }

export type TBasketModal = Pick<IShopItem, 'title' | 'price'>
export type TOrderModal = Pick<IOrderForm, 'payment' | 'deliveryAdress'>