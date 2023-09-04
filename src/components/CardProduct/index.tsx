'use client'
import { useCommand } from "../../hooks/useMenu"
import { ProductType } from "../../services/products"
import React, {useState} from "react"
import styles from './index.module.scss'


type CardProductsProps = {
    product: ProductType
}

const CardProduct: React.FC<CardProductsProps> = ({ product }) =>{
    const { name, details, price, imageUrl, vegetarian } = product
    const { addProduct, removeProduct } = useCommand()

    return(
        <div className={styles.card}>
            <img src={vegetarian === true ? "/cards/vegetarian.svg" : "/cards/not-vegetarian.svg"} alt="category-image" className={styles.category} />
            <img src={imageUrl} alt={name} className={styles.image}/>
            <h3 className={styles.h3}>{name}</h3>
            <p className={styles.details}>{details}</p>
            <span className={styles.price}>
                R$ {price}
                <span className={styles.span}>
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
            </span>
            <button className={styles.button_add_dish} onClick={ () => {
                addProduct(product)
            }}>Adicionar</button>
        </div>
    )
}

export default CardProduct