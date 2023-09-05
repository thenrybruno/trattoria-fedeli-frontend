'use client'

import Header from '@/src/components/Header'
import styles from './styles.module.scss'
import { NextPage } from 'next'
import { ReactNode } from 'react'
import Footer from '@/src/components/common/Footer'



const UserDashboard: NextPage = (props: { children?: ReactNode }) => {

    //@ts-ignore
    let tasks: [] = []

    if(!localStorage.getItem('tasks'))  {
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }   else    {

    }

    let localStorageData = window.localStorage.getItem('tasks')


    return (
        <section className={styles.section}>
            <Header />
            <main className={styles.main}>
                <h1 className={styles.h1}>Meu pedido</h1>
                <section className={styles.dashboard}>
                    {
                        tasks.length < 1 ?
                        <div className={styles.empty}>
                            <h1>Oh não! Você ainda não pediu nada. Que tal ver o cardápio?</h1>
                        </div>
                        :
                        <div>
                            <h1>Hello, world!</h1>
                        </div>
                    }
                </section>
            </main>
            <Footer />
        </section>
    )
}

export default UserDashboard
