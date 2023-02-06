import Image from 'next/image'
import Script from 'next/script'
import styles from './page.module.css'

const fredStyle = {
  width: '670px',
  height: '525px',
  overflow: 'hidden',
}

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          WTF Happened in 1791?
        </h1>
        <div className="embed-container">
        <br />
        <iframe src="https://fred.stlouisfed.org/graph/graph-landing.php?g=X4TX&width=670&height=475" scrolling="no" frameBorder={0} style={fredStyle} loading="lazy"></iframe>
        </div>

        <p className={styles.description}>
        For some graphs that actually do not matter:
        </p>

        <iframe src="https://fred.stlouisfed.org/graph/graph-landing.php?g=ZFWI&width=670&height=475" scrolling="no" frameBorder={0} style={fredStyle} loading="lazy"></iframe>

        <p className={styles.description}>
        And all together:
        </p>

        <iframe src="https://fred.stlouisfed.org/graph/graph-landing.php?g=ZFWw&width=670&height=475" scrolling="no" frameBorder={0} style={fredStyle} loading="lazy"></iframe>
        <br />
        <br />

        <div className={styles.description}>
        {`“The shotgun marriage of Friedrich von Hayek and Karl Polanyi, blessed by John Maynard Keynes, that helped raise the post–World War II North Atlantic developmental social democracy was as good as we have so far gotten. But it failed its own sustainability test, partly because a single generation of rapid growth raised the bar high, and partly because Polanyian rights required stability, the treating of equals equally, and the treating of perceived unequals unequally in ways that neither the Hayekian-Schumpeterian market economy of creative destruction nor the Polanyian social democratic society of universal egalitarian social insurance rights could ever deliver.”`}
        <br />
        <br />
        {`- Slouching Towards Utopia, J. Bradford DeLong;`}

        <br />
        <br />
        {`For a \"good money\" try `} <a href="https://www.getmonero.org/library/Zero-to-Monero-1-0-0.pdf">something actually anonymous</a>.
        </div>

      </main>

      <footer className={styles.footer}>
        <div>
          {"\"Inspired\" by:"} <a href="https://wtfhappenedin1971.com/">WTF Happened in 1971?</a>
        </div>

        <div className={styles.footerContent}>
          <a href="https://jackyoustra.com/">Newsletter</a>
          <a href="https://www.nber.org/subscribe">Get WTF 1791 Merch</a>
          <hr />
          <a href="/donations">Support Our Research</a>
          <a href="https://www.igmchicago.org/igm-economic-experts-panel/">Discussions</a>
        </div>
        
      </footer>
    </div>
  )
}
