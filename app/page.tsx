import { quote, quoteSource } from './manualConstants'
import styles from './page.module.css'

const fredStyle = {
  width: '670px',
  height: '525px',
  overflow: 'hidden',
}

export default function Home() {
  return (
    <div className="main">
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
        {quote}
        <br />
        <br />
        {`- ${quoteSource}`}

        <br />
        <br />
        {`For a \"good money\" try `} <a href="https://www.getmonero.org/library/Zero-to-Monero-1-0-0.pdf">something actually anonymous</a>.
        </div>
      </div>
  )
}
