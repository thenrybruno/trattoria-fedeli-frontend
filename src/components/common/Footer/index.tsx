import styles from './styles.module.scss'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <p>
                © 2023 Trattoria Fedeli. This site is a fictional project built by thenrybruno and
                daviebatista. Most of its media do not contents belong to us, and are meant to be
                used with educational goals.
            </p>
            <a href="https://icons8.com" className={styles.iconCredits}>
                Icons by Icons8
            </a>
        </footer>
    )
}

export default Footer
