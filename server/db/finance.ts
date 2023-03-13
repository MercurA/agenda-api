import DSource from './app-data-source';
import { Finances } from './entity/finance.entity';
import { Request, Response } from 'express';
import { addQuerryWrapper, deleteQuerryWrapper, getQuerryWrapper, updateQuerryWrapper } from './utilities/common';

const getFinance = async (req, res) => {
    const id = Number(req.params.id)
    const results = await getQuerryWrapper(id, Finances, 'finance_id')

    return res.send(results)
}

const getAllFinances = async (req: Request, res: Response) => {
    const results = await getQuerryWrapper(null, Finances, null)

    return res.send(results)
}

const addFinance = async (req: Request, res: Response) => {
    const results = await addQuerryWrapper(req.body, Finances)

    return res.send(results)
}

const removeFinance = async (req: Request, res: Response) => {
    const id = Number(req.params.id)
    const results = await deleteQuerryWrapper(id, Finances, 'finance_id')

    res.send(results)
}

const updateFinanceById = async (req: Request, res: Response) => {
    const id = Number(req.params.id)
    const body = req.body

    const results = await updateQuerryWrapper(id, Finances, 'finance_id', body)
    
    res.send(results)
}

export {
    getFinance,
    getAllFinances,
    addFinance,
    removeFinance,
    updateFinanceById
}