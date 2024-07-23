
// Bu, TypeScript'in bir interface tanımıdır. Bu arayüz, Heading bileşeninin beklediği props türlerini tanımlar.

// center?: boolean: Bu özellik isteğe bağlıdır (? işareti bu durumu belirtir) ve bir boolean değeri alır. Bu, başlık metninin ortalanıp ortalanmayacağını belirtir.
// text: string: Bu özellik zorunludur ve bir string değeri alır. Bu, başlık olarak gösterilecek metindir.
interface HeadingProps {
    center?: boolean
    text: string
}


// React.FC<HeadingProps>: Bu, Heading bileşeninin bir React fonksiyonel bileşeni (React.FC) olduğunu belirtir ve bu bileşenin HeadingProps türündeki props'ları kabul ettiğini ifade eder.
// ({ center, text }): Bu kısım, props nesnesinden center ve text özelliklerini çıkartır (destructuring).
const Heading: React.FC<HeadingProps> = ({ center, text }) => {
    return (
        <div className={`text-slate-500 ml-2 text-xl my-3 md:my-10 px-3 ${center ? 'text-center': 'text-start' }`}>
                {text}
        </div>
    )
}
export default Heading

// Import: React'i import ettik.
// Interface: HeadingProps interface'ini tanımladık.
// Bileşen: Heading bileşenini tanımladık.
// props içinden center ve text özelliklerini çıkardık.
// return içinde bir div döndürdük ve style özelliği ile textAlign'ı ayarladık. Eğer center true ise, textAlign değeri center olacak, aksi halde left olacak.
// div içinde text değerini gösterdik.
// Export: Heading bileşenini dışa aktardık.
// Bu sayede, Heading bileşeniniz artık metni gösterecek ve isteğe bağlı olarak metni ortalayacaktır.