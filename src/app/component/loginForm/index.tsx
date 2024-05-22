"use client"

import { FormEvent, useState } from 'react'
import { FaEye, FaEyeSlash  } from "react-icons/fa";

import styles from './styles.module.scss'

export function LoginForm() {
    const [show, setShow] = useState(false)
    const [value, setValue] = useState("")

    const handleSubmit = (event: FormEvent) =>{
        event.preventDefault();
    }
        
    

    return(
        <form onSubmit={handleSubmit} className={styles.registerForm}>
        <h1>Entrar </h1>
           <span>E-mail</span>
           <input type="email"  />
           <span>Senha</span>
            { show === false &&
             <>
                <input 
                type="password"
                value={value}
                onChange={(e) => setValue(e.target.value)} />
                <FaEye onClick={() => setShow(true)} size={25} className={styles.eyes}/> 
             </>
            }
            { show === true &&
             <>
                 <input type="text"
                 value={value}
                 onChange={(e) => setValue(e.target.value)}/>
                 <FaEyeSlash onClick={() => setShow(false)} size={25}  className={styles.eyes} />
             </>
            }
          
           <button className={styles.btn}>ENTRAR</button> 
    </form>
    )
}