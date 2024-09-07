import { useState } from "react"
import type { Orden, OrdenItem } from "../types";

export default function useOrder() {

    const [order, setOrder] = useState<OrdenItem[]>([]);
    const [tip, setTip] = useState(0)


    const addItem = (item: Orden) => {

        const itemExist = order.find(orderItem => orderItem.id === item.id)

        if (itemExist) {

            const updateOrder = order.map(orderItem => orderItem.id === item.id ? { ...orderItem, quantity: orderItem.quantity + 1 } : orderItem)
            setOrder(updateOrder)
        }
        else {

            const newItem = { ...item, quantity: 1 }
            setOrder([...order, newItem])

        }

    }


    const removeItem = (id: Orden['id']) => {

        setOrder(order.filter(item => item.id !== id))

    }


    const placeOrder = () => {

        setOrder([])
        setTip(0)
    }




    return {
        addItem,
        order,
        tip,
        setTip,
        removeItem,
        placeOrder
    }
}