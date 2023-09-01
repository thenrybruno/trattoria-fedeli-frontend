import Image from "next/image";
import Link from "next/link";
import styles from './index.module.scss'

export default function NotFound() {
    return (
        <section className={styles.container}>
            <div>
                <h2>MAMMA MIA!</h2>
                <p>Parece que algo deu errado. Que tal voltar para um lugar mais seguro?</p>
                <Link href={'/'}><button className={styles.btn}>Voltar</button></Link>
            </div>
            <Image src={'/img/error-tomato.png'} alt="Tomato" width={400} height={400} className={styles.img_tomato}/>
        </section>
    )
}
