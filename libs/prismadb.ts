import { PrismaClient } from '@prisma/client';
/*import { PrismaClient } from "@prisma/client" const prisma = new PrismaClient()  [..nextuath] sayfasındaki
yapıyı burada global olarak tanımladım prisma yoksa undefiende olarak tanımladık
*/


/*declare global bloğu, TypeScript'e global bir değişken olan prismayı tanıttığımızı belirtir. Bu değişkenin tipi PrismaClient veya undefined olabilir.
 Bu global değişken, Prisma Client'ın tek bir örneğini uygulamanın tümünde paylaşmak için kullanılır.*/
declare global {
  var prisma: PrismaClient | undefined
}


/*
globalThis.prisma || new PrismaClient() ifadesi, global prisma değişkeni zaten tanımlıysa onu kullanır; aksi takdirde yeni bir PrismaClient örneği oluşturur.
globalThis tarayıcı ve Node.js ortamlarında global nesneye erişmek için kullanılan bir değişkendir.
if (process.env.NODE_ENV !== 'production') globalThis.prisma = client ifadesi, eğer çalışma ortamı production değilse (yani geliştirme veya test ortamında) 
global prisma değişkenini yeni oluşturulan PrismaClient örneği ile ayarlar.
Bu, PrismaClient'ın tekrar tekrar oluşturulmasını önler ve bellekte tek bir örnek olarak kalmasını sağlar.*/
const client = globalThis.prisma || new PrismaClient()
if (process.env.NODE_ENV !== 'production')
  globalThis.prisma = client

export default client
