import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <div className="container">
      <main className="main">
        <h1 className="title">
          WTF Happened in 1791?
        </h1>
        {children}
              </main>

      <footer className="footer">
        <div>
          {"\"Inspired\" by:"} <a href="https://wtfhappenedin1971.com/">WTF Happened in 1971?</a>
        </div>

        <div className="footerContent">
          <a href="https://jackyoustra.com/">Newsletter</a>
          <a href="https://www.nber.org/subscribe">Get WTF 1791 Merch</a>
          <hr />
          <a href="/donations">Support Our Research</a>
          <a href="https://www.igmchicago.org/igm-economic-experts-panel/">Discussions</a>
        </div>
        
      </footer>
    </div>
      </body>
    </html>
  )
}
