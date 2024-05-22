
import styles from './styles.module.scss'
import { BsBagCheck } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';
import { LoginForm } from '../component/loginForm';

export default function Login() {


    
    return (
        <>
        <div className={styles.header}>
            <a className={styles.logo} href='/'>
                <BsBagCheck size={40} className={styles.svg}/>
                <h1 className={styles.LogoName}>E-commerce</h1>
            </a>

            <div className={styles.inscription}>
                <span className={styles.info}>Não possui conta?</span>
                <a href="/register" className={styles.login}>Cadastrar</a>
            </div>
        </div>

        
       <div className={styles.body}>
            <div className={styles.description}>
                    <h2>Faça login com seu e-mail e senha <p>grátis</p> ou</h2>
                    <button className={styles.enterWithGoogle}>Entre com a sua conta <FcGoogle className={styles.svg} /></button>
            </div>

            <div className={styles.separator}></div>

            <LoginForm /> 
            

           
       </div>
    </>
    )

    
}