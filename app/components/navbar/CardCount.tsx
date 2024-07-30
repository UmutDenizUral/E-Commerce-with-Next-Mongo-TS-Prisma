'use client'
import useCart from "@/hooks/useCart"
import Link from "next/link"
import { MdShoppingBasket } from "react-icons/md"

const CardCount = () => {
  const { cartProducts } = useCart()
  return (
    <Link href={'/cart'}>
      <div className="hidden md:flex relative">
        <MdShoppingBasket size="30" />
        <div className="absolute -top-1  -right-2 w-5 h-5 flex items-center justify-center text-xs rounded-full bg-orange-900">{cartProducts?.length || 0}</div>
      </div>
    </Link>

  )
}

export default CardCount