"use client"

import { FormEvent, useState } from 'react'
import { FaEye, FaEyeSlash  } from "react-icons/fa";

import styles from './styles.module.scss'

export function RegisterForm() {
    const [show, setShow] = useState(false)
    const [value, setValue] = useState("")

    const handleSubmit = (event: FormEvent) =>{
        event.preventDefault();
    }
        
    

    return(
        <form onSubmit={handleSubmit} className={styles.registerForm}>
        <h1>Cadastro</h1>
           <span>Nome</span>
           <input type="text" />
           <span>Sobrenome</span>
           <input type="text" />
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
          
           <button className={styles.btn}>CADASTRAR</button> 
    </form>
    )
}