import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Footer from '../components/footer.js';


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>jpcommunity</title>
        <meta name="description" content="jpcommunity home page." />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
		Hello Word!
        </h1>

        <p className={styles.description}>
jpcommunityは学生プログラミンググループの連合です。


現在は
<ul className={styles.grouplist}>
	
	<li className={styles.groupname}><a href="groups/tracelab" className={styles.mylink}>trace lab</a></li>
	<li classNamee={styles.groupname}><a href="groups/tracelab" className={styles.mylink}>tracelab</a></li>
	<li classNamee={styles.groupname}><a href="groups/starlight" className={styles.mylink}>starlight</a></li>
</ul>

の4グループで活動しています。


		各メンバーの紹介は<a className={styles.mylink} >こちら</a>
        </p>

        <div className={styles.grid}>
        </div>
      </main>
	    <Footer />

    </div>
  )
}
