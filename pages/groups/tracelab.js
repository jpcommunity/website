import Head from 'next/head'
// import Image from 'next/image'
import styles from '../../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>jpcommunity</title>
        <meta name="description" content="jpcommunity home page." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h2 className={styles.title}>
		tracelabとは
        </h2>


        <div className={styles.grid}>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://twitter.com/Comamoca_"
          target="_blank"
          rel="noopener noreferrer"
        >
          Created by
	<span className={styles.comamoca}> Comamoca</span>
	
        </a>
      </footer>
    </div>
  )
}
