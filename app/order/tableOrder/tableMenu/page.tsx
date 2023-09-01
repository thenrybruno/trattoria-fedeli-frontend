import Header from "@/src/componets/Header";
import styles from './TableMenu.module.scss';
import { GetStaticProps, NextPage } from "next";
import { ProductType, fetchProducts } from "@/src/services/products";
import { ReactNode } from "react";
import ListProducts from "@/src/componets/ListProducts";

export const getStaticProps: GetStaticProps = async () => {
    const products = await fetchProducts()

    return {props: {products}}
}

const TableMenu: NextPage = (props: {
    children?: ReactNode
    products?: ProductType[]
}) =>{
    return (
        <>
            <Header/>
            <main className={styles.main}>
                <h2>As melhores opções para o seu jantar!</h2>
                <p>Navegue pelo nosso menu e descubra o melhor sabor para hoje!</p>
                <div className={styles.menu}>
                    {<ListProducts products={props.products!}/>}
                </div>
            </main>
        </>
    )
}

export default TableMenu