import {NextApiRequest, NextApiResponse} from "next";

import api from "../../api";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const stores = await api.list();

  return res.json(stores);
}
