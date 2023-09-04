import React from "react"
import { ProductType } from "../../../services/products"
import CardProduct from "../../CardProduct"
import styles from '../index.module.scss'
import dishes from '@/database.json';



type ListProductsProps = {
    mainDishes: ProductType[]
}

const MainDishes: React.FC<ListProductsProps> = () => {
    const mainDishes = dishes.filter(dish => dish.category === 'main')
    return (
        <div className={styles.container} id="mainDishes">
            {mainDishes.map(product => (
                <div key={product.id}>
                    <CardProduct
                        product={product}
                    />
                </div>
            ))}
        </div>
    )
}

export default MainDishes