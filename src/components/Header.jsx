import styles from './Header.module.css'
import logoskall from '../assets/logo.svg'

console.log(styles)
export function Header() {
    return (
        <header className={styles.header}>
            <img src={logoskall} alt="Logo SkallOverland" />
            <strong >Hub Overland</strong>
        </header>
    )
}