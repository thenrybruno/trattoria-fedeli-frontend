'use client'
import { useCommand } from "../../hooks/useMenu"
import { ProductType } from "../../services/products"
import React from "react"
import styles from './index.module.scss'


type CardProductsProps = {
    product: ProductType
}

const CardProduct: React.FC<CardProductsProps> = ({ product }) =>{
    const { name, details, price, imageUrl } = product
    const { addProduct } = useCommand()

    return(
        <div className={styles.card}>
            <img src={imageUrl} alt={name} width={180} height={180}/>
            <h3>{name}</h3>
            <p className={styles.details}>{details}</p>
            <p className={styles.price}>
                R$ {price}
                <span>
                    <button className={styles.remove_button}>-</button>
                    <span className={styles.number}>{1}</span>
                    <button className={styles.add_button}>+</button>
                </span>
            </p>
            <button className={styles.button_add_dish} onClick={ () => {
                addProduct(product)
            }}>Adicionar</button>
        </div>
    )
}

export default CardProduct