import Link from "next/link"
import Navegador from "../components/Navegador"

export default function Inicio() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexWrap: 'wrap',
      height: '100vh'
    }}>
      <Navegador destino="/estiloso" nome="Estiloso"/>
      <Navegador destino="/exemplo" nome="Exemplo" cor="darkviolet"/>
      <Navegador destino="/jsx" nome="JSX" cor="crimson"/>
    </div>
  )
}
