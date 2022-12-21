import { NextApiRequest, NextApiResponse } from "next"

type Data = {
  nome: string;
  id: any,
  email: any;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const codigo = req.query.codigo 
  res.status(200).json({
    id: codigo,
    nome: `Maria ${codigo}`,
    email: `mariamariamaria${codigo}@xcfmail.com`
  })
}