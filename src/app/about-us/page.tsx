import Link from 'next/link'
import styles from './styles.module.scss'
import Footer from '@/src/components/common/Footer'

export default function AboutUs() {
    return (
        <main className={styles.main}>
            <section className={styles.section}>
                <h1 className={styles.h1}>Sobre nós</h1>
                <p>A Trattoria Fedeli é um restaurante italiano tradicional localizado na região dos Jardins em São Paulo, fundado em 1993 por imigrantes italianos. Desde então, o restaurante é um dos mais notórios nomes da tradição gastronômica ítalo-brasileira.</p>
                <img src="https://images.unsplash.com/photo-1545659531-9a66f06e260a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="italian-cook" />
                <p>Com ambiente familiar e culinária refinada, nós visamos trazer a comida tradicional das mais notáveis regiões italianas, explorando novos meios de entregar a seus clientes um pequeno pedaço da região de nossas famílias.</p>
                <p>Sabemos que a comida é melhor quando servida em boa companhia, e buscamos trazer um ambiente que remonte as tradicionais cantinas do interior campestre da Itália.</p>
                <img src="https://images.unsplash.com/photo-1612874742237-6526221588e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80" alt="pizza-sharing" />
                <p>Esperamos você e sua família para conhecer a nossa!</p>
                <Link href={'/'}>
                    <h6 className={styles.link}>Voltar</h6>
                </Link>
            </section>
            <Footer />
        </main>
    )
}
