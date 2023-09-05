'use client'

import Header from '@/src/components/Header'
import styles from './styles.module.scss'
import { NextPage } from 'next'
import { ReactNode, useEffect, useState } from 'react'
import Footer from '@/src/components/common/Footer'
import { ProductType } from '@/src/services/products'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

type CommandEntry = {
    product: ProductType
    quantity: number
}

const UserDashboard: NextPage = (props: { children?: ReactNode, entry?: CommandEntry }) => {
    const [command, setCommand] = useState<ProductType[]>([])

    useEffect(() =>{
        const storedCommand = localStorage.getItem('command')

        if (storedCommand) {
            setCommand(JSON.parse(storedCommand))
        }
    }, [])

    


    return (
        <section className={styles.section}>
            <Header />
            <main className={styles.main}>
                <h1 className={styles.h1}>Minha comanda</h1>
                <p>Acompanhe seu pedido de perto!</p>
                <section className={styles.dashboard}>
                    {
                        command.length < 1 ?
                        <div className={styles.empty}>
                            <h1>Oh não! Você ainda não pediu nada. Que tal ver o <Link href={'/table-menu'}>cardápio?</Link></h1>
                        </div>
                        :
                        <div>
                            <CommandProduct/>
                        </div>
                    }
                </section>
            </main>
            <Footer />
        </section>
    )
}

const TableRow = (props: {
    entry: CommandEntry
})  =>  {
    const [command, setCommand] = useState<ProductType[]>([])
    const router = useRouter()

    useEffect(() =>{
        const storedCommand = localStorage.getItem('command')

        if (storedCommand) {
            setCommand(JSON.parse(storedCommand))
        }
    }, [])

    const addProduct = (product: ProductType) =>{
        const updateCart = [...command, product]
        localStorage.setItem('command', JSON.stringify(updateCart))
        setCommand(updateCart)
        router.refresh()
    }

    const removeProduct = (productId: number) =>{
        const productIndex = command.findIndex(product => product.id === productId)

        if (productIndex !== -1) {
            const updatedCart = [...command]
            updatedCart.splice(productIndex, 1)
            localStorage.setItem('command', JSON.stringify(updatedCart))
            setCommand(updatedCart)
            router.refresh()
        }
    }

    return  (
        <div className={styles.row}>
            <span className={styles.divide} >
                <img src={props.entry.product.imageUrl} alt={props.entry.product.name} className={styles.thumbnail} />
            </span>
            <span className={styles.divide}>
                {props.entry.product.name}
            </span>
            <span className={styles.divide}>
                {props.entry.quantity}
            </span>
            <span className={styles.divide}>
                <p>
                    R$ {(props.entry.product.price * props.entry.quantity).toFixed(2)}
                </p>
                <span className={styles.buttons}>
                    <button className={styles.button + " " + styles.add} onClick={()=> {
                            addProduct(props.entry.product)
                        }
                    }>
                        +
                    </button>
                    <button className={styles.button + " " + styles.remove} onClick={()=> {
                            removeProduct(props.entry.product.id)
                        }
                    }>
                        -
                    </button>
                </span>
            </span>
        </div>
    )
}

function CommandProduct()    {
    const [ commandEntries, setCommandEntries ] = useState<CommandEntry[]>([])
    const [command, setCommand] = useState<ProductType[]>([])

    useEffect(() =>{
        const storedCommand = localStorage.getItem('command')

        if (storedCommand) {
            setCommand(JSON.parse(storedCommand))
        }
    }, [])

    useEffect(() => {
        const entriesList = command.reduce((list, product) => {
            const entryIndex = list.findIndex(entry => entry.product.id === product.id)

            if (entryIndex === -1) {
                return [
                    ...list,
                    {
                        product,
                        quantity: 1
                    }
                ]
            }

            list[entryIndex].quantity++
            return list

        }, [] as CommandEntry[])

        entriesList.sort((a, b) => a.product.id - b.product.id)
        setCommandEntries(entriesList)

    }, [command])

    return  (
        <section>
            <div className={styles.tr}>
                <h6>Produto</h6>
                <h6>Preço</h6>
                <h6>Qtd.</h6>
                <h6>Total</h6>
            </div>
            <div className={styles.products}>
                {commandEntries.map(entry => <TableRow key={entry.product.id} entry={entry} />)}
            </div>
        </section>
    )
}

export default UserDashboard
