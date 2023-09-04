
import Header from "@/src/components/Header";
import styles from './TableMenu.module.scss';
import { NextPage } from "next";
import { ReactNode } from "react";
import Footer from "@/src/components/common/Footer";
import Entrances from "@/src/components/ListProducts/Entrances";
import MainDishes from "@/src/components/ListProducts/MainDishes";
import Extras from "@/src/components/ListProducts/Extras";
import Drinks from "@/src/components/ListProducts/Drinks";
import Desserts from "@/src/components/ListProducts/Desserts";
import '@/src/styles/globals.scss'

const TableMenu: NextPage = (props: {
    children?: ReactNode
}) =>{
    return (
        <>
            <Header/>
            <main className={styles.main}>
                <h2>As melhores opções para o seu jantar!</h2>
                <p>Navegue pelo nosso menu e descubra o melhor sabor para hoje!</p>
                <section>
                    <ul className={styles.ul}>
                        <li className={styles.li + ' active'}>Entradas</li>
                        <li className={styles.li}>Pratos</li>
                        <li className={styles.li}>Bebidas</li>
                        <li className={styles.li}>Sobremesas</li>
                        <li className={styles.li}>Extras</li>
                    </ul>
                    <div className={styles.menu}>
                        {/* @ts-ignore */}
                        <Entrances/>
                        {/* @ts-ignore */}
                        <MainDishes/>
                        {/* @ts-ignore */}
                        <Drinks/>
                        {/* @ts-ignore */}
                        <Desserts/>
                        {/* @ts-ignore */}
                        <Extras/>
                    </div>
                </section>
            </main>
            <Footer/>
        </>
    )
}

export default TableMenu