import Image from 'next/image'
import styles from './styles.module.scss'
import Footer from '@/src/components/common/Footer'
import Link from 'next/link'

export default function Order() {
    return (
        <main className={styles.main}>
            <section className={styles.container_1}>
                <img
                    src={'/img/trattoria-logo-light.png'}
                    alt="Trattoria Fedeli"
                    className={styles.logo}
                />
                <img
                    src={'/img/trattoria-logo.png'}
                    alt="Trattoria Fedeli"
                    className={styles.logo_mobile}
                />
            </section>
            <section className={styles.container_2}>
                <h2>Como deseja fazer seu pedido?</h2>
                <Link href={'/table-order'}>
                    <button className={styles.button}>Estou no Restaurante!</button>
                </Link>
                <Link href={'/delivery-order'}>
                    <button className={styles.button}>Quero receber em casa!</button>
                </Link>
                <Link href={'/'} className={styles.back_text}>
                    Voltar
                </Link>
                <div className={styles.politic}>
                    <p>Ao utilizar nosso sistema, você concorda com nossas</p>
                    <span>Políticas de Privacidade.</span>
                </div>
                <Footer />
            </section>
        </main>
    )
}
