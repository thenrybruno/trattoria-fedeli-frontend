import React from 'react'
import { ProductType } from '../../../services/products'
import CardProduct from '../../CardProduct'
import styles from '../index.module.scss'
import dishes from '@/database.json'

type ListProductsProps = {
    entrances: ProductType[]
}

const Desserts: React.FC<ListProductsProps> = () => {
    const desserts = dishes.filter((dish) => dish.category === 'desserts')
    return (
        <div className={styles.container} id="entrances">
            {desserts.map((product) => (
                <div key={product.id}>
                    <CardProduct product={product} />
                </div>
            ))}
        </div>
    )
}

export default Desserts
