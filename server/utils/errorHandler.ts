import { NextFunction, Request, Response } from 'express';

const errorHandler = (req: Request, res: Response, next: NextFunction) => {
    res.send('Something happend')
    next()
}

export {
    errorHandler
}