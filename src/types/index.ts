export type Orden = {
    id: number,
    name: string,
    price: number,
}


export type OrdenItem = Orden & {
    quantity: number
}