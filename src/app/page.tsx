'use client'
import Image from 'next/image'
import styles from './page.module.scss'
import Footer from '@/src/components/common/Footer'
import Link from 'next/link'

export default function Home() {
    return (
        <main className={styles.main}>
            <section className={styles.container_1}>
                <img
                    src={'/img/trattoria-logo-light.png'}
                    alt="Trattoria Fedeli"
                    className={styles.logo}
                />
                <Image
                    src={'/img/trattoria-logo.png'}
                    alt="Trattoria Fedeli"
                    width={500}
                    height={140}
                    className={styles.logo_mobile}
                />
            </section>
            <section className={styles.container_2}>
                <h2>Boas vindas à Trattoria Fedeli!</h2>
                <Link href={'/order'}>
                    <button className={styles.button}>Faça o seu pedido!</button>
                </Link>
                <Link href={'/about-us'}>
                    <button className={styles.button}>Conheça mais sobre nós!</button>
                </Link>
                <div className={styles.politic}>
                    <p>Ao utilizar nosso sistema, você concorda com nossas</p>
                    <Link href={'/privacy'}>
                        <span>Políticas de Privacidade.</span>
                    </Link>
                </div>
                <Footer />
            </section>
        </main>
    )
}
