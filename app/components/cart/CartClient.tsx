'use client'
import useCart from "@/hooks/useCart"
import PageContainer from "../containers/PageContainer"
import Image from "next/image"
import Button from "../general/Button"

const CartClient = () => {
    const { cartProducts } = useCart()
    console.log(cartProducts)
    if (!cartProducts || cartProducts.length == 0) {

        return <div>Sepetinizde ürün bulunmamaktadır</div>
    }
    return (
        <div className="my-3 md:my-10">
            <PageContainer>
                <div className="flex text-center items-center gap-3 border-b py-3">
                    <div className="w-1/5">Ürün resmi</div>
                    <div className="w-1/5">Ürün Adı</div>
                    <div className="w-1/5">Ürün Miktarı</div>
                    <div className="w-1/5">Ürün Fiyatı</div>
                    <div className="w-1/5"></div>

                </div>
                <div>
                    {
                        cartProducts.map(cart =>

                            <div className="flex text-center items-center justify-between my-5" key={cart.id}>
                                <div className="w-1/5 flex items-center justify-center">
                                    <Image
                                        src={cart.image}
                                        width={40}
                                        height={40}
                                        alt="yok" />
                                </div>
                                <div className="w-1/5">{cart.name}</div>
                                <div className="w-1/5">{cart.quantity}</div>
                                <div className="w-1/5 text-orange-600 text-lg">{cart.price}TL</div>
                                <div className="w-1/5 ">
                                <Button small text="Ürün sil" onClick={()=>{}}/>
                                </div>
                            </div>
                        )
                    }
                </div>
            </PageContainer>
        </div>
    )
}

export default CartClient