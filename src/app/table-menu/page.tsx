import Header from "@/src/components/Header";
import styles from './TableMenu.module.scss';
import { NextPage } from "next";
import { ReactNode } from "react";
import ListProducts from "@/src/components/ListProducts";
import dishes from '../../../database.json';
import Footer from "@/src/components/common/Footer";

const TableMenu: NextPage = (props: {
    children?: ReactNode
}) =>{
    return (
        <>
            <Header/>
            <main className={styles.main}>
                <h2>As melhores opções para o seu jantar!</h2>
                <p>Navegue pelo nosso menu e descubra o melhor sabor para hoje!</p>
                <div className={styles.menu}>
                    {<ListProducts products={dishes}/>}
                </div>
            </main>
            <Footer/>
        </>
    )
}

export default TableMenu