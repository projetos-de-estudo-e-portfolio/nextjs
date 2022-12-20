import Link from "next/link";
import styles from '../styles/Navegador.module.css'

export default function Navegador(props: any){
  return (
    <Link href={props.destino}>
      <div className={styles.navegador} style={{
          backgroundColor: props.cor ?? 'dodgerblue'
      }}>
        {props.nome}
      </div>
    </Link>
  )
}