'use client'
import Image from "next/image"
import { Rating } from "@mui/material"
import textClip from "@/utils/TextClip"
import { useRouter } from "next/navigation"

// product propuna herhangi type ı tanımlandı
const ProductCard = ({ product }: { product: any }) => {
    const router = useRouter()

    let productRating = product?.reviews?.reduce((acc: number, item: any) => acc + item.rating, 0) / product?.reviews?.length
    return (
        <div onClick={()=> router.push(`product/${product.id}`)} className="w-[240px] shadow-lg p-2 border rounded-md cursor-pointer bg-slate-100">
            <div className="relative h-[150px] ">
                <Image src={product.image}
                    fill
                    alt="Yok"
                    className="object-contain" />
            </div>
            <div className="text-center mt-2 space-y-1">
                <div >{textClip(product.name)} </div>
                <Rating name="read-only" value={productRating} readOnly />
                <div className="text-orange-500 font-bold text-lg md:text-xl">{product.price}TL</div>
            </div>

        </div>
    )
}

export default ProductCard