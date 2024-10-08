'use client'
import { CardProductProps } from "@/app/components/detail/DetailClient";
import { products } from "@/utils/Products";
import { createContext, useCallback, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

interface CartContextProps {
    productCartQty: number
    cartProducts: CardProductProps[] | null
    addToBasket: (product: CardProductProps) => void
    addToBasketIncrease: (product: CardProductProps) => void
    addToBasketDecrease: (product: CardProductProps) => void
    removeFromCart: (product: CardProductProps) => void
    removeCart: () => void
}

const CartContext = createContext<CartContextProps | null>(null)

interface Props {
    [propName: string]: any
}
export const CartContextProvider = (props: Props) => {
    const [productCartQty, setProductCartQty] = useState(0)
    const [cartProducts, setCartProducts] = useState<CardProductProps[] | null>(null)

    useEffect(() => {
        let getItem: any = localStorage.getItem('cart')
        let getItemParse: CardProductProps[] | null = JSON.parse(getItem)
        setCartProducts(getItemParse)
    }, [])
    const addToBasketIncrease = useCallback((product: CardProductProps) => {
        let uptdatedcart
        if (product.quantity == 10) {
            return toast.error('Daha fazla eklenemez')
        }
        if (cartProducts) {
            uptdatedcart = [...cartProducts]
            const existingItem = cartProducts.findIndex(item => item.id === product.id)
            if (existingItem > -1) {
                uptdatedcart[existingItem].quantity = ++uptdatedcart[existingItem].quantity
            }
            setCartProducts(uptdatedcart)
            localStorage.setItem('cart', JSON.stringify(uptdatedcart))
        }
    }, [cartProducts])
    const addToBasketDecrease = useCallback((product: CardProductProps) => {
        let uptdatedcart
        if (product.quantity == 1) {

            return toast.error('Daha azaltılmaz')
        }
        if (cartProducts) {
            uptdatedcart = [...cartProducts]
            const existingItem = cartProducts.findIndex(item => item.id === product.id)
            if (existingItem > -1) {
                uptdatedcart[existingItem].quantity = --uptdatedcart[existingItem].quantity
            }
            setCartProducts(uptdatedcart)
            localStorage.setItem('cart', JSON.stringify(uptdatedcart))
        }
    }, [cartProducts])
    const removeCart = useCallback(() => {
        setCartProducts(null)
        toast.success('Tüm ürünler sepetten çıkarıldı!')
        localStorage.setItem('cart', JSON.stringify(null))
    }, [])

    const addToBasket = useCallback((product: CardProductProps) => {
        setCartProducts(prev => { // prev cartProducts o anki değerini alır.
            let updatedCart;
            if (prev) {
                updatedCart = [...prev, product]
            } else {
                updatedCart = [product]
            }
            toast.success('Ürün sepete eklendi!')
            localStorage.setItem('cart', JSON.stringify(updatedCart))
            return updatedCart
        })

    }, [cartProducts])
    const removeFromCart = useCallback((product: CardProductProps) => {
        if (cartProducts) {
            const filteredProducts = cartProducts.filter(cart => cart.id !== product.id)
            setCartProducts(filteredProducts)
            toast.success('Ürün sepentten silindi!')
            localStorage.setItem('cart', JSON.stringify(filteredProducts))

        }

    }, [cartProducts])
    let value = {
        productCartQty,
        addToBasket,
        cartProducts,
        removeFromCart,
        removeCart,
        addToBasketIncrease,
        addToBasketDecrease

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