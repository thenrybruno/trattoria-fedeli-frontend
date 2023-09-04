import React from 'react'
import { ProductType } from '../../services/products'
import CardProduct from '../CardProduct'
import styles from './index.module.scss'

type ListProductsProps = {
    products: ProductType[]
}

const ListProducts: React.FC<ListProductsProps> = ({ products }) => {
    return (
        <div className={styles.container}>
            {products.map((product) => (
                <div key={product.id}>
                    <CardProduct product={product} />
                </div>
            ))}
        </div>
    )
}

export default ListProducts
