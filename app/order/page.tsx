import Image from 'next/image'
import styles from './Order.module.scss'
import Footer from '@/src/componets/Footer'
import Link from 'next/link'

export default function Order() {
    return (
        <main className={styles.main}>
            <section className={styles.container_1}>
                <Image src={'/img/trattoria-logo-light.png'} alt='Trattoria Fedeli' width={597} height={157} />
            </section>
            <section className={styles.container_2}>
                <h2>Como deseja fazer seu pedido?</h2>
                <Link href={'/order/tableOrder'}>
                    <button className={styles.button}>Estou no Restaurante!</button>
                </Link>
                <Link href={'/order/deliveryOrder'}>
                    <button className={styles.button}>Quero receber em casa!</button>
                </Link>
                <Link href={'/'} className={styles.back_text}>Voltar</Link>
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