import { useRouter } from "next/router";
import Layout from "../../components/Layout";

export default function ClienteProCodigo() {
  const router = useRouter()
  return (
    <Layout>
      <span>Código = {router.query.codigo}</span>
    </Layout>
  )
}