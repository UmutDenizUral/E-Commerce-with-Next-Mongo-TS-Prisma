'use client'
import PageContainer from "../containers/PageContainer"
import Image from "next/image"
import Counter from "../general/Counter"
import { useEffect, useState } from "react"
import { Rating } from "@mui/material"
import Button from "../general/Button"
import Comment from "./Comment"
import Heading from "../general/Heading"
import useCart from "@/hooks/useCart"
export type CardProductProps = {
    id: string,
    name: string,
    description: string,
    price: number,
    quantity: number,
    image: string,
    inStock: boolean,
}

const DetailClient = ({ product }: { product: any }) => {
    const { productCartQty, addToBasket, cartProducts } = useCart()
    const [displayButton, setDisplayButton] = useState(false)
    const [cardProduct, setCardProduct] = useState<CardProductProps>({
        id: product.id,
        name: product.name,
        description: product.description,
        price: product.price,
        quantity: 1,
        image: product.image,
        inStock: product.inStock
    })

    console.log(cartProducts, 'cartProducts geldi!')
    useEffect(() => {
        setDisplayButton(false)
        let controlDisplay: any = cartProducts?.findIndex(cart => cart.id == product.id)
        if (controlDisplay > -1) {
            setDisplayButton(true)
        }   

    }, [cartProducts])
    const increaseFunc = () => {
        if (cardProduct.quantity == 10) return
        setCardProduct(prev => ({ ...prev, quantity: prev.quantity + 1 })
        )
    }
    const decreaseFunc = () => {
        if (cardProduct.quantity == 1) return
        setCardProduct(prev => ({ ...prev, quantity: prev.quantity - 1 })
        )
    }

    let productRating = product?.reviews?.reduce((acc: number, item: any) => acc + item.rating, 0) / product?.reviews?.length

    return (
        <div className="my-10">
            <PageContainer>
                <div className=" md:flex gap-10 justify-center">
                    <div className="relative h-[300px] md:h-[400px] w-[250px] md:w-[400px]  mb-3 md:mb-0 ">
                        <Image
                            src={product?.image}
                            fill
                            alt="Yok" />
                    </div>
                    <div className="w-full md:w-1/2">
                        <div className="text-xl md:text-2xl"> {product?.name}</div>
                        <Rating name="read-only" value={productRating} readOnly />
                        <div className="text-slate-500"> {product?.description}</div>
                        <div className="flex gap-2">
                            <div>Stok Durumu:</div>

                            {product.inStock ? <div className="text-green-500">Ürün Stokta Mevcut</div> : <div className="text-red-500">Stokta Yok </div>}
                        </div>
                        <div className="text-lg md:text-2xl my-2 text-orange-500 font-bold">{product.price}TL</div>
                        {
                            displayButton ? <>
                                <Button small outline text="Ürün Sepete Ekli" onClick={() => {}} />
                            </> : <>
                                <Counter increaseFunc={increaseFunc} decreaseFunc={decreaseFunc} cardProduct={cardProduct} />
                             
                                <Button small text="Sepete Ekle" onClick={() => addToBasket(cardProduct)} />
                            </>
                        }
                    </div>
                </div>
                <div className="mt-2 border  p-1">
                    <Heading text="Yorumlar" />
                  
                    {product?.reviews?.map((prd: any) => (
                        <Comment key={prd.id} prd={prd} />
                    )
                    )}
                </div>
            </PageContainer>
        </div>
    )
}

export default DetailClient