import DetailClient from "@/app/components/detail/DetailClient"
import { products } from "@/utils/Products"
import React from "react"

type DetailProps = {
    productid?: string
}
const Detail = ({ params }: { params: DetailProps }) => {
    const { productid } = params
    const product = products.find(product => product.id == productid)


    return (
        <div>
            <DetailClient product={product} />
        </div>
    )
}

export default Detail