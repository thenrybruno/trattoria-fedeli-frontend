import Image from 'next/image'
import styles from './Register.module.scss'
import Footer from '@/src/components/common/Footer'
import Link from 'next/link'

export default function Register() {
    return (
        <main className={styles.main}>
            <section className={styles.container_1}>
                <Image src={'/img/trattoria-logo-light.png'} alt='Trattoria Fedeli' width={597} height={157} />
            </section>
            <section className={styles.container_2}>
                <h2>Crie sua conta abaixo!</h2>
                <form>
                <div className={styles.flex_input}>
                        <label htmlFor="name">Nome Completo</label>
                        <input type="text" name="name" id="name" className={styles.input_name} />
                    </div>
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
                <Link href={'/order/deliveryOrder'} className={styles.back_text}>Voltar</Link>
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