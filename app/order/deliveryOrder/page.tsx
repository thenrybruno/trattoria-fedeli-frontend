import Image from 'next/image'
import styles from './DeliveryOrder.module.scss'
import Footer from '@/src/componets/Footer'
import Link from 'next/link'

export default function Order() {
    return (
        <main className={styles.main}>
            <section className={styles.container_1}>
                <Image src={'/img/trattoria-logo-light.png'} alt='Trattoria Fedeli' width={597} height={157} />
            </section>
            <section className={styles.container_2}>
                <h2>Faça seu login no site!</h2>
                <form>
                    <div className={styles.flex_input}>
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" className={styles.input_email} />
                    </div>
                    <div className={styles.flex_input}>
                        <label htmlFor="password">Senha</label>
                        <input type="password" name="password" id="password" className={styles.input_password} />
                    </div>
                </form>
                <button className={styles.button}>Fazer login</button>
                <p>Ou, crie sua conta <span>aqui!</span></p>
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