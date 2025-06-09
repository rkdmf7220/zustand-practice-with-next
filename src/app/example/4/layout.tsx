import StoreProvider from "@/lib/with-zustand/StoreProvider";

export default function WithZustandLayout({children}: {children: React.ReactNode;}) {
  return (
      <html>
      <body className='with-zustand'>
      <h2>what?</h2>
      <StoreProvider lastUpdate={new Date().getTime()}>
        {children}
      </StoreProvider>
      </body>
      </html>
  )
}