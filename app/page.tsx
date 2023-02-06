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
        {`“The shotgun marriage of Friedrich von Hayek and Karl Polanyi, blessed by John Maynard Keynes, that helped raise the post–World War II North Atlantic developmental social democracy was as good as we have so far gotten. But it failed its own sustainability test, partly because a single generation of rapid growth raised the bar high, and partly because Polanyian rights required stability, the treating of equals equally, and the treating of perceived unequals unequally in ways that neither the Hayekian-Schumpeterian market economy of creative destruction nor the Polanyian social democratic society of universal egalitarian social insurance rights could ever deliver.”`}
        <br />
        <br />
        {`- Slouching Towards Utopia, J. Bradford DeLong;`}

        <br />
        <br />
        {`For a \"good money\" try `} <a href="https://www.getmonero.org/library/Zero-to-Monero-1-0-0.pdf">something actually anonymous</a>.
        </div>
      </div>
  )
}
