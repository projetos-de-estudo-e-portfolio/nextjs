// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string | any;
  method: any;
  idade: string | any;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ 
    name: req.query.nome,
    method: req.method,
    idade: req.query.idade // em js só colocar um sinal de + na frente de req para transformar em int
  })
}
