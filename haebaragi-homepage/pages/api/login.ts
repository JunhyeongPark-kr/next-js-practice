import type { NextApiRequest, NextApiResponse } from "next";

const login = (req: NextApiRequest, res: NextApiResponse) => {
  const { username, password } = req.body;

  if (username === "user" && password === "password") {
    res.status(200).json({ success: true });
  } else {
    res.status(401).json({ success: false });
  }
};

export default login;
