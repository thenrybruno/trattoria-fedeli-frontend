import Header from '@/src/components/Header'
import styles from '../TableMenu.module.scss'
import { NextPage } from 'next'
import { ReactNode } from 'react'
import Footer from '@/src/components/common/Footer'
import '@/src/styles/globals.scss'
import Link from 'next/link'
import Drinks from '@/src/components/ListProducts/Drinks'

const TableMenu: NextPage = (props: { children?: ReactNode }) => {
    return (
        <section className={styles.section}>
            <Header />
            <main className={styles.main}>
                <h2>As melhores opções para o seu jantar!</h2>
                <p>Navegue pelo nosso menu e descubra o melhor sabor para hoje!</p>
                <section className={styles.productSection}>
                    <ul className={styles.ul}>
                        <Link href={'/table-menu'}>
                            <li className={styles.li}>Entradas</li>
                        </Link>
                        <Link href={'/table-menu/main-dishes'}>
                            <li className={styles.li}>Pratos</li>
                        </Link>
                        <Link href={'/table-menu/drinks'}>
                            <li className={styles.li + ' active'}>Bebidas</li>
                        </Link>
                        <Link href={'/table-menu/desserts'}>
                            <li className={styles.li}>Sobremesas</li>
                        </Link>
                        <Link href={'/table-menu/extras'}>
                            <li className={styles.li}>Extras</li>
                        </Link>
                    </ul>
                    <div className={styles.menu}>
                        {/* @ts-ignore */}
                        <Drinks />
                    </div>
                </section>
            </main>
            <Footer />
        </section>
    )
}

export default TableMenu
