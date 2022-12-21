import { useState } from "react"
import Layout from "../components/Layout"

export default function Integracao() {

  const [cliente, setCliente] = useState<any>([])
  const [codigo, setCodigo] = useState<any>(1)


  const obterCliente = async () => {
    const res = await fetch(`http://localhost:3000/api/clientes/${codigo}`)
    const dados = await res.json()
    setCliente(dados)
  }

  return (
    <Layout>
      <div>
        <input
          type="number"
          value={codigo}
          onChange={e => setCodigo(e.target.value)}
        />
        <button onClick={obterCliente}>Obter cliente</button>
      </div>
      <ul>
        <li>Código: {cliente.id}</li>
        <li>Nome: {cliente.nome}</li>
        <li>email: {cliente.email}</li>
      </ul>
    </Layout>
  )
}