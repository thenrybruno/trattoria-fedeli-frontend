import Header from "@/src/componets/Header";
import styles from './TableMenu.module.scss'

export default function TableMenu() {
    return (
        <>
            <Header/>
            <main className={styles.main}>
                <h2>As melhores opções para o seu jantar!</h2>
                <p>Navegue pelo nosso menu e descubra o melhor sabor para hoje!</p>
                <div className={styles.menu}>

                </div>
            </main>
        </>
    )
}