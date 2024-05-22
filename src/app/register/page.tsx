import { BsBagCheck } from 'react-icons/bs'
import { FcGoogle } from "react-icons/fc";  
import styles from './styles.module.scss'
import { useState } from 'react';
import { RegisterForm } from '../component/RegisterForm';

export default function Register() {

   

    return(
        <>
            <div className={styles.header}>
                <a className={styles.logo} href='/'>
                    <BsBagCheck size={40} className={styles.svg}/>
                    <h1 className={styles.LogoName}>E-commerce</h1>
                </a>

                <div className={styles.inscription}>
                    <span className={styles.info}>Já possui conta?</span>
                    <a href="/login" className={styles.login}>Entrar</a>
                </div>
            </div>

            
           <div className={styles.body}>
                <div className={styles.description}>
                        <h2>Efetue seu cadastro <p>grátis</p> ou</h2>
                        <button className={styles.enterWithGoogle}>Entre com a sua conta <FcGoogle className={styles.svg} /></button>
                </div>

                <div className={styles.separator}></div>

                <RegisterForm />

               
           </div>
        </>
    )
}