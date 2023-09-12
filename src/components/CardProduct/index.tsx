'use client'
import { ProductType } from '../../services/products'
import React, { useEffect, useState } from 'react'
import styles from './index.module.scss'
import SuccessToast from '../SuccessToast/page'

type CardProductsProps = {
    product: ProductType
}

const CardProduct: React.FC<CardProductsProps> = ({ product }) => {
    const [command, setCommand] = useState<ProductType[]>([])
    const { id, name, details, price, imageUrl, vegetarian, category } = product
    const [amount, setAmount] = useState(1)
    const [toastIsOpen, setToastIsOpen] = useState(false)

    useEffect(() =>{
        const storedCommand = localStorage.getItem('command')

        if (storedCommand) {
            setCommand(JSON.parse(storedCommand))
        }
    }, [])

    const addProduct = (product: ProductType, amount: number) =>{
        for (let i = 1; i <= amount; i++) {
            const updateCart = [...command, product]
            localStorage.setItem('command', JSON.stringify(updateCart))
            command.push(product)
            setCommand(updateCart)
        }
    }

    return (
        <div className={styles.card}>
            <img
                src={vegetarian === true ? '/cards/vegetarian.svg' : '/cards/not-vegetarian.svg'}
                alt="category-image"
                className={styles.category}
            />
            <img src={imageUrl} alt={name} className={styles.image} />
            <h3 className={styles.h3}>{name}</h3>
            <p className={styles.details}>{details}</p>
            <span className={styles.price}>
                R$ {price}
                <span className={styles.span}>
                    <button
                        className={styles.remove_button}
                        onClick={() => {
                            if(amount <= 1) {

                            } else  {
                                setAmount(amount - 1)
                            }
                        }}
                    >
                        -
                    </button>
                    <span className={styles.number} >{amount}</span>
                    <button
                        className={styles.add_button}
                        onClick={ () => {
                            setAmount(amount + 1)
                        }
                        }
                    >
                        +
                    </button>
                </span>
            </span>
            <button
                className={styles.button_add_dish}
                onClick={ () => {
                    addProduct(product, amount)
                    setToastIsOpen(true)
                    setTimeout(() => setToastIsOpen(false), 1000 * 3)
                    }
                }
            >
                Adicionar
            </button>
            <SuccessToast toastIsOpen={toastIsOpen} setToastIsOpen={setToastIsOpen}/>
        </div>
    )
}

export default CardProduct
