import { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  if (req.method === "GET") {
    handleGet(res)
  } else {
    res.status(405).send("")
  }

}

function handleGet(res: NextApiResponse) {
  res.status(200).json({
    id: 3,
    nome: "maria",
    idade: 33
  })
}
