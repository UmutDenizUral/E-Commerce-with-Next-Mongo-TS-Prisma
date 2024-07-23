import React from 'react'
// Destructuring Assignment: { children }: { children: React.ReactNode }
// children, React'in özel bir prop'u olan props.children'ı temsil eder. children, bileşenin içine yerleştirilen içeriği ifade eder.
// { children }: { children: React.ReactNode } yapısı, children prop'unun React.ReactNode türünde olduğunu belirtir. ReactNode,
//  JSX içinde yer alabilecek tüm öğeleri kapsar (dize, JSX öğeleri, sayılar vb.).
// React.ReactNode any ile benzer işlev gösterir.
const PageContainer = ({children}: {children: React.ReactNode}) => {
  return (
    <div className='px-3 md:px-10'>{children}</div>
  )
}

export default PageContainer