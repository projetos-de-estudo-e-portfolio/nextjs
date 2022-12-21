import Navegador from "../components/Navegador"
import { useRouter } from 'next/router'

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
      <Navegador destino="/clientes/123" nome="Nav Dinamica" cor="green"/>
      <Navegador destino="/estado" nome="Estado" cor="pink"/>
    </div>
  )
}
