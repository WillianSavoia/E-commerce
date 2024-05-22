import { BsBagCheck } from "react-icons/bs"
import styles from "./page.module.scss";
import { HomeHeader } from "./component/HomeHeader";

export default function Home() {
  return (
    <>
        <HomeHeader />
        <div className={styles.content}>
            <BsBagCheck size={250}  className={styles.svg}/>
            <span className={styles.text}>Faça seu <a href="/register" className={styles.button}>cadastro</a> e explore todos
            os recursos disponíveis. Desfrute
            da facilidade em comprar e anunciar em um único lugar de forma <p>gratuita</p>
            </span>
        </div>
    </>
  );
}
