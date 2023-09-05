'use client'
import Image from 'next/image'
import styles from './page.module.scss'
import Footer from '@/src/components/common/Footer'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function Home() {
    const router = useRouter()

    useEffect(() => {
        if (!sessionStorage.getItem('isLoggedIn')) {
            router.push('/')
        } else {
            router.push('/table-menu')
        }
    }, [])

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
                <button className={styles.button}>Conheça mais sobre nós!</button>
                <div className={styles.politic}>
                    <p>Ao utilizar nosso sistema, você concorda com nossas</p>
                    <span>Políticas de Privacidade.</span>
                </div>
                <Footer />
            </section>
        </main>
    )
}
