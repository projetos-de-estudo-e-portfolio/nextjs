import { useState } from "react"
import Layout from "../components/Layout"

export default function Estado() {
  const [numero, setNumero] = useState(0)

  function incrementa(){
    setNumero(numero + 1)
  }

  return(
    <Layout>
      <span>
        {numero}
      </span>
      <button onClick={incrementa}>
        Incrementar
      </button>
    </Layout>
  )
}