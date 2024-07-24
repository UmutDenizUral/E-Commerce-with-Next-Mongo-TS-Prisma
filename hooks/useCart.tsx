'use client'
import { CardProductProps } from "@/app/components/detail/DetailClient";
import { createContext, useCallback, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

interface CartContextProps {
    productCartQty: number
    cartProducts:CardProductProps[] | null
    addToBasket: (product: CardProductProps) => void
    removeFromCart: (product: CardProductProps) => void
}

const CartContext = createContext<CartContextProps | null>(null)

interface Props {
    [propName: string]: any
}
export const CartContextProvider = (props: Props) => {
    const [productCartQty, setProductCartQty] = useState(0)
    const [cartProducts, setCartProducts] = useState<CardProductProps[]| null>(null)
    
    useEffect(()=>{
            let getItem :any = localStorage.getItem('cart')
            let getItemParse: CardProductProps[] | null = JSON.parse(getItem)
            setCartProducts(getItemParse)
    },[])
    
    const addToBasket = useCallback((product:CardProductProps)=>{
        setCartProducts(prev=>{ // prev cartProducts o anki değerini alır.
            let updatedCart;
            if(prev){
                updatedCart= [...prev,product]
            }else{
                updatedCart=[product]
            }
            toast.success('Ürün sepete eklendi!')
            localStorage.setItem('cart',JSON.stringify(updatedCart))
            console.log(updatedCart)
            return updatedCart
        })

    },[cartProducts])
    const removeFromCart = useCallback((product: CardProductProps)=>{

    },[])
    let value = {
         productCartQty,
         addToBasket,
         cartProducts,
         removeFromCart

     }
    return (<CartContext.Provider value={value} {...props} />)

}


const useCart = () => {
    const context = useContext(CartContext)
    if (context == null) {
        throw new Error('bir hata durumu mevcut')
    }
    return context

}

export default useCart