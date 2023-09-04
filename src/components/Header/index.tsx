import Image from 'next/image'
import styles from './index.module.scss'
import Link from 'next/link'

const Header = () => {
    return (
        <header className={styles.header}>
            <Link href={'/'}>
                <Image
                    src={'/img/trattoria-logo-light.png'}
                    alt="Trattoria Fedeli"
                    width={170}
                    height={45}
                />
            </Link>
            <input type="search" name="find" id="find" />
            <div>
                <p>Name</p>
            </div>
        </header>
    )
}

export default Header
