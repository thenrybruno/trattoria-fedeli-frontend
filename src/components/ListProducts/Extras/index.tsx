import React from 'react'
import { ProductType } from '../../../services/products'
import CardProduct from '../../CardProduct'
import styles from '../index.module.scss'
import dishes from '@/database.json'

type ListProductsProps = {
    entrances: ProductType[]
}

const Extras: React.FC<ListProductsProps> = () => {
    const extras = dishes.filter((dish) => dish.category === 'extras')
    return (
        <div className={styles.container}>
            {extras.map((product) => (
                <div key={product.id}>
                    <CardProduct product={product} />
                </div>
            ))}
        </div>
    )
}

export default Extras
