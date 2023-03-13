import { Request, Response } from "express"
import { Groceries } from "./entity/groceries.entity"
import { addQuerryWrapper, deleteQuerryWrapper, getQuerryWrapper, updateQuerryWrapper } from "./utilities/common"

const getGrocery = async (req: Request, res: Response) => {
    const id = Number(req.params.id)
    const result = await getQuerryWrapper(id, Groceries, 'grocery_id')

    return res.send(result)
}

const getAllGroceries = async (req: Request, res: Response) => {
    const results = await getQuerryWrapper(null, Groceries, null)

    return res.send(results)
}

const addGrocery = async (req: Request, res: Response) => {
    const result = await addQuerryWrapper(req.body, Groceries)
    
    return res.send(result)
}

const removeGrocery = async (req: Request, res: Response) => {
    const id = Number(req.params.id)

    const results = await deleteQuerryWrapper(id, Groceries, 'grocery_id')

    res.send(results)
}

const updateGroceryById = async (req: Request, res: Response) => {
    const id = Number(req.params.id)
    const body = req.body

    const results = await updateQuerryWrapper(id, Groceries, 'grocery_id', body)

    res.send(results)
}

export {
    getGrocery,
    getAllGroceries,
    addGrocery,
    removeGrocery,
    updateGroceryById
}
