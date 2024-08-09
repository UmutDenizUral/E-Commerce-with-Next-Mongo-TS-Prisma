// app/page.tsx (veya uygun bir dosya)
import getProductsId from "@/app/actions/getProductId";
import DetailClient from "@/app/components/detail/DetailClient";
import React from "react";

type DetailProps = {
    params: {
        productid: string; 
    }
}
const Detail = async ({ params }: DetailProps) => {

    const { productid } = params;
    const product = await getProductsId({ productId: productid });

    if (!product) {
        return <div>Ürün bulunamadı</div>;
    }
    return (
        <div>
            <DetailClient product={product} />
        </div>
    );
}

export default Detail;
