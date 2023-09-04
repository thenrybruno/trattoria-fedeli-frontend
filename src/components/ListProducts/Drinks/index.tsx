import React from "react"
import { ProductType } from "../../../services/products"
import CardProduct from "../../CardProduct"
import styles from '../index.module.scss'
import dishes from '@/database.json';

type ListProductsProps = {
    drinks: ProductType[]
}

const Drinks: React.FC<ListProductsProps> = () => {
    const drinks = dishes.filter(dish => dish.category === 'drinks')
    return (
        <div className={styles.container} id="drinks">
            {drinks.map(product => (
                <div key={product.id}>
                    <CardProduct
                        product={product}
                    />
                </div>
            ))}
        </div>
    )
}

export default Drinks