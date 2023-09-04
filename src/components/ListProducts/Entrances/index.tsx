import React from "react"
import { ProductType } from "../../../services/products"
import CardProduct from "../../CardProduct"
import styles from '../index.module.scss'
import dishes from '@/database.json';

type ListProductsProps = {
    entrances: ProductType[]
}

const Entrances: React.FC<ListProductsProps> = () => {
    const entrances = dishes.filter(dish => dish.category === 'entrances')
    return (
        <div className={styles.container} id="entrances">
            {entrances.map(product => (
                <div key={product.id}>
                    <CardProduct
                        product={product}
                    />
                </div>
            ))}
        </div>
    )
}

export default Entrances