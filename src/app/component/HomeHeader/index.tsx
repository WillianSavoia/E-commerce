import styles from './styles.module.scss'
import { BsBagCheck } from "react-icons/bs"

export function HomeHeader(){
    return(
        <>
            <div className={styles.header}>
                <a className={styles.logo} href='/'>
                    <BsBagCheck size={40} className={styles.svg}/>
                    <h1 className={styles.LogoName}>E-commerce</h1>
                </a>

                <div className={styles.inscription}>
                    <a href="/login" className={styles.login}>Entrar</a>
                </div>
            </div>

        </>
    )
}