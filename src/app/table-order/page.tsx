import Image from 'next/image'
import styles from './TableOrder.module.scss'
import Footer from '@/src/components/common/Footer'
import Link from 'next/link'

export default function TableOrder() {
    return (
        <main className={styles.main}>
            <section className={styles.container_1}>
                <Image src={'/img/trattoria-logo-light.png'} alt='Trattoria Fedeli' width={597} height={157} />
            </section>
            <section className={styles.container_2}>
                <h2>Preencha os campos abaixo!</h2>
                <form>
                    <div className={styles.flex_input}>
                        <label htmlFor="name">Nome Completo:</label>
                        <input type="text" name="name" id="name" className={styles.input_name} />
                    </div>
                    <div className={styles.flex_input_2}>
                        <div className={styles.flex_input}>
                            <label htmlFor="cel-phone">Nº Celular:</label>
                            <input type="number" name="cel-phone" id="cel-phone" className={styles.input_phone} />
                        </div>
                        <div className={styles.flex_input}>
                            <label htmlFor="table">Nº Mesa:</label>
                            <input type="number" name="table" id="table" className={styles.input_table} />
                        </div>
                    </div>
                </form>
                <Link href={'/table-menu'}>
                    <button className={styles.button}>Prosseguir</button>
                </Link>
                <Link href={'/order'} className={styles.back_text}>Voltar</Link>
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