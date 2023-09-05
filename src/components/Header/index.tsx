'use client'
import Image from 'next/image'
import styles from './index.module.scss'
import { ReactNode, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

const Header = (props: { children?: ReactNode }) => {
    const [user, setUser] = useState<UserType>()

    type UserType = {
        name: string,
        table: number,
        cellphone: string,
        atHome: boolean
    }


    const router = useRouter()

    useEffect(() =>{
        const storedUser = sessionStorage.getItem('user')

        if (storedUser) {
            setUser(JSON.parse(storedUser))
        } else  {
            router.push('/')
        }
    }, [user])

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
            <div>
                <p>{user?.name}</p>
            </div>
        </header>
    )
}

export default Header
