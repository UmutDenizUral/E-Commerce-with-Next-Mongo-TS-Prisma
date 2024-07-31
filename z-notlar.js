/*
Bakılacaklar:
useCart detaylı incele

Notlar:
app klasörü altında oluşturulan klasör içinde page.tsx oluşturulursa sayfalama işleme yapılır.

Prisma:
Prisma dosyamı oluşturduktan sonra cmd ye npx prisma db push  ile databse yüklendi
*
CredentialsProvider Nedir?
CredentialsProvider, NextAuth.js'in kimlik bilgilerini (örneğin, e-posta ve parola) kullanarak kullanıcıları doğrulamasını sağlar. Diğer sağlayıcılar (örneğin, Google, Facebook gibi OAuth sağlayıcıları) genellikle üçüncü taraf hizmetler aracılığıyla kimlik doğrulama yaparken, CredentialsProvider doğrudan sizin backend'inizde kullanıcı doğrulama işlemini gerçekleştirir.
CredentialsProvider'daki name parametresi, kimlik doğrulama formunda görüntülenecek sağlayıcının adını belirtir. Ve name parametresi google,credentials,facebook gibi değerler alabilir.
*


adapter:Prisma Adapter ve genel olarak adapterler (uyarlayıcılar), kimlik doğrulama ve oturum yönetimi için kullanılan kütüphaneler (örneğin NextAuth.js) ile veri tabanı arasındaki iletişimi sağlar. Adapterler, kimlik doğrulama işlemlerini veri tabanına uygun bir şekilde gerçekleştirmek için gerekli ara yüzleri sağlar. 

bcrypt:Kullanıcı şifrelerini hash'lemek için kullanılır. Hash'leme, şifrelerin düz metin olarak saklanmasını önler ve güvenliği artırır.
hashlemek:??

JWT(JSON Web Token):web uygulamalarında kimlik doğrulama ve yetkilendirme işlemleri için kullanılan bir standarttır. JWT, sunucu ile istemci arasında güvenli bir şekilde veri alışverişi yapmak için kullanılır. Özellikle, kimlik doğrulama ve kullanıcı oturum yönetimi gibi senaryolar için oldukça popülerdir  





*/