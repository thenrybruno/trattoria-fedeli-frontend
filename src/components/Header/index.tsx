'use client'
import Image from 'next/image'
import styles from './index.module.scss'
import { ReactNode, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import '@/src/app/page.module.scss'

const Header = (props: { children?: ReactNode }) => {
    const [user, setUser] = useState<UserType>()
    const [modalClass, setModalClass] = useState(styles.hidden)


    type UserType = {
        name: string,
        table: number,
        cellphone: string,
        atHome: boolean
    }

    const handleDisconnect = () =>  {
        sessionStorage.removeItem('isLoggedIn')
        router.push('/')
    }

    const router = useRouter()

    useEffect(() =>{
        const isLoggedIn = sessionStorage.getItem('isLoggedIn')
        const storedUser = localStorage.getItem('user')

        if (storedUser && isLoggedIn) {
            setUser(JSON.parse(storedUser))
        }   else {
            router.push('/')
        }
    }, [])

    return (
        <header className={styles.header}>
            <Image
                src={'/img/trattoria-logo-light.png'}
                alt="Trattoria Fedeli"
                width={170}
                height={45}
                className={styles.logo}
            />
            <input type="search" name="find" id="find" />
            <div className={styles.menu} onClick={() => setModalClass(modalClass == styles.hidden ? styles.visible : styles.hidden)}>
                <div className={styles.userButton}>
                    <Image src={'/header/person.svg'} width={25} height={25} alt='user-icon'/>
                    <p>{user?.name}</p>
                    <Image src={'/header/triangle.svg'} width={10} height={10} alt='user-icon'/>
                </div>
                <span className={styles.options + ' ' + modalClass} >
                    <Link href={'/user'} className={styles.menuItem}>
                        <Image src={'/header/command.svg'} width={25} height={25} alt='user-icon'/>
                        <p>Comanda</p>
                    </Link>
                    <span className={styles.menuItem} onClick={()=> handleDisconnect()}>
                        <Image src={'/header/quit.svg'} width={25} height={25} alt='user-icon'/>
                        <p>Sair</p>
                    </span>
                </span>
            </div>
        </header>
    )
}

export default Header
