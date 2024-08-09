import Image from "next/image";
import Category from "./components/home/Category";
import Banner from "./components/home/Banner";
import Products from "./components/home/Products";
import getProducts from "./actions/getProduct";
import firebaseApp from "@/libs/firebase";
import { getStorage } from "firebase/storage";


export default async function  Home() {
  const products = await getProducts({category:null })


  return (
    <div >
      <Category/>
      <Banner/>
      <Products products={products}/>

    </div>

  );
}
