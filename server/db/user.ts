import DSource from './app-data-source';
import { User } from './entity/user.entity';
import { Request, Response } from 'express';

const getUser = async (req, res) => {
    const results = await DSource.getRepository(User).findOneBy({
        id: req.params.id,
    })
    return res.send(results)
}


const addUser = async (req: Request, res: Response) => {
    const user = await DSource.getRepository(User).create(req.body)
    const results = await DSource.getRepository(User).save(user)

    return res.send(results)
}


export {
    getUser,
    addUser
}