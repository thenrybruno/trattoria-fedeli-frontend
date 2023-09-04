'use client'
import { useCommand } from "../../hooks/useMenu"
import { ProductType } from "../../services/products"
import React, {useState} from "react"
import styles from './index.module.scss'


type CardProductsProps = {
    product: ProductType
}

const CardProduct: React.FC<CardProductsProps> = ({ product }) =>{
    const { name, details, price, imageUrl } = product
    const { addProduct, removeProduct } = useCommand()

    return(
        <div className={styles.card}>
            <img src={imageUrl} alt={name} width={180} height={180}/>
            <h3>{name}</h3>
            <p className={styles.details}>{details}</p>
            <p className={styles.price}>
                R$ {price}
                <span>
                    <button className={styles.remove_button} onClick={() => {
                        removeProduct(product.id)
                    }}>
                        -
                    </button>
                    <span className={styles.number}>1</span>
                    <button className={styles.add_button} onClick={() =>{
                        addProduct(product)
                    }}>
                        +
                    </button>
                </span>
            </p>
            <button className={styles.button_add_dish} onClick={ () => {
                addProduct(product)
            }}>Adicionar</button>
        </div>
    )
}

export default CardProduct