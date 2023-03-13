import { Request, Response } from "express"
import axios from 'axios'

export const authenticate = (req: Request, res: Response) => {
    const {GITHUB_URL, CLIENT_ID, CLIENT_SECRET} = process.env
    console.log(GITHUB_URL)
    axios({
        method: "POST",
        url: `${GITHUB_URL}?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&code=${req.query.code}`,
        headers: {
          Accept: "application/json",
        },
      }).then((response) => {
        res.redirect(
          `http://localhost:3000?access_token=${response.data.access_token}`
        );
      });
}
