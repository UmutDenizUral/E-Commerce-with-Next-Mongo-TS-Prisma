import Image from "next/image"
const Banner = () => {
    return (
        <div className="h-[237px]  flex items-center justify-center bg-slate-500">
            <div className="h-[137px]  relative w-full">
      
                <Image  
                    src='/reklam2.jpg'
                    fill
                    alt="Yok" 
                    className="object-cover"/>
            </div>

        </div>
    )
}

export default Banner