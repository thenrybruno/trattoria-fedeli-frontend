import Image from 'next/image'
import styles from './page.module.scss'
import Footer from '@/src/components/common/Footer'
import Link from 'next/link'

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.container_1}>
        <Image src={'/img/trattoria-logo-light.png'} alt='Trattoria Fedeli' width={597} height={157} />
      </section>
      <section className={styles.container_2}>
        <h2>Boas vindas à Trattoria Fedeli!</h2>
        <Link href={'/order'}><button className={styles.button}>Faça o seu pedido!</button></Link>
        <button className={styles.button}>Conheça mais sobre nós!</button>
        <div className={styles.politic}>
          <p>
            Ao utilizar nosso sistema, você concorda com nossas
          </p>
          <span>
            Políticas de Privacidade.
          </span>
        </div>
        <Footer />
      </section>
    </main>
  )
}
