import { Product } from '@prisma/client'
import Heading from "../general/Heading"
import ProductCard from "./ProductCard"


interface ProductsProps{
    products: Product[]
}
const Products:React.FC<ProductsProps> = ({products}) => {
    
    return (
        <div className="">
            <Heading text="Tüm Ürünler" />
            <div className='flex items-center flex-wrap gap-4 px-3 md:px-10 '>
                {
                    products.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))
                }
            </div>
        </div>
    )
}

export default Products