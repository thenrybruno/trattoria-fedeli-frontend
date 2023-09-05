'use client'
import Image from 'next/image'
import styles from './TableOrder.module.scss'
import Footer from '@/src/components/common/Footer'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function TableOrder() {
    const router = useRouter()
    let isLoggedIn: boolean = true

    function formAuth() {
        //@ts-ignore
        const name: any = document.getElementById('name')?.value
        //@ts-ignore
        const table: any = document.getElementById('table')?.value
        //@ts-ignore
        const cellphone: any = document.getElementById('cel-phone')?.value
        //@ts-ignore
        const atHome: any = false

        if (name.length < 3 || table.length < 1 || cellphone.length < 10) {
            alert('Insira valores válidos no formulário!')
        } else {
            const user = {
                name,
                table,
                cellphone,
                atHome
            }

            sessionStorage.setItem('user', JSON.stringify(user))
            isLoggedIn = true
            sessionStorage.setItem('isLoggedIn', JSON.stringify(isLoggedIn))
            router.push('/table-menu')
        }
    }

    return (
        <main className={styles.main}>
            <section className={styles.container_1}>
                <img
                    src={'/img/trattoria-logo-light.png'}
                    alt="Trattoria Fedeli"
                    className={styles.logo}
                />
                <img
                    src={'/img/trattoria-logo.png'}
                    alt="Trattoria Fedeli"
                    className={styles.logo_mobile}
                />
            </section>
            <section className={styles.container_2}>
                <h2>Preencha os campos abaixo!</h2>
                <form>
                    <div className={styles.flex_input}>
                        <label htmlFor="name">Nome Completo:</label>
                        <input type="text" name="name" id="name" className={styles.input_name} />
                    </div>
                    <div className={styles.flex_input_2}>
                        <div className={styles.flex_input}>
                            <label htmlFor="cel-phone">Nº Celular:</label>
                            <input
                                type="number"
                                name="cel-phone"
                                id="cel-phone"
                                className={styles.input_phone}
                            />
                        </div>
                        <div className={styles.flex_input}>
                            <label htmlFor="table">Nº Mesa:</label>
                            <input
                                type="number"
                                name="table"
                                id="table"
                                className={styles.input_table}
                                max={30}
                            />
                        </div>
                    </div>
                    <button
                        className={styles.button}
                        onClick={(ev) => {
                            ev.preventDefault()
                            formAuth()
                        }}
                    >
                        Prosseguir
                    </button>
                </form>
                <Link href={'/order'} className={styles.back_text}>
                    Voltar
                </Link>
                <div className={styles.politic}>
                    <p>Ao utilizar nosso sistema, você concorda com nossas</p>
                    <span>Políticas de Privacidade.</span>
                </div>
                <Footer />
            </section>
        </main>
    )
}
