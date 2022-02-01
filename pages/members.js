
import Head from 'next/head'
// import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>jpcommunity</title>
        <meta name="description" content="jpcommunity home page." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
		members
        </h1>

        <p className={styles.description}>
		メンバーの紹介
	</p>

<ul className={styles.memberslist}>
	<li className={styles.member}>TRENDcreate 赤霊夢.rs</li>
	<li className={styles.member}>Umiiro くろっく <a href="https://twitter.com/ClockRBA" className={styles.mylink}>@ClockRBA</a></li>
	<li className={styles.member}>TC&Starlight ひでまる <a href="https://twitter.com/Hidemal _OwO" className={styles.mylink}>@Hidemal _OwO</a></li>
	<li className={styles.member}>D-Techs Circle Seezet <a href="https://twitter.com/see2et" className={styles.mylink}>@see2et</a></li>
	<li className={styles.member}>None れのらり <a href="https://twitter.com/" className={styles.mylink}>renorari</a></li>
	<li className={styles.member}>Umiiro TRENDcreate *NUKO <a href="https://twitter.com/sakura_05032" className={styles.mylink}>@sakura_05032</a></li>
	<li className={styles.member}>Umiiro くろっく <a href="https://twitter.com/ClockRBA" className={styles.mylink}>@ClockRBA</a></li>
	<li className={styles.member}>starlight 未知 <a href="https://twitter.com/michiworld_top" className={styles.mylink}>@michiworld_top</a></li>
	<li className={styles.member}>thinking Xepos <a href="https://twitter.com/Xepos7" className={styles.mylink}>@Xepos7</a></li>
</ul>

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
