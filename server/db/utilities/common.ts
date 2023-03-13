import DSource from '../app-data-source';

const addQuerryWrapper = async (body, entity) => {
    const querry = await DSource.getRepository(entity).create(body)
    const results = await DSource.getRepository(entity).save(querry)
    
    return results
}

const getQuerryWrapper = async (id, entity, typeID) => {
    let results

    if(id === null && typeID === null) {
        results = await DSource.getRepository(entity).find()
    } else {
        results = await DSource.getRepository(entity).findOneBy({
            [typeID]: id,
        })
    }

    return results
}

const updateQuerryWrapper = async (id, entity, typeID, body) => {
    const item = await DSource
        .createQueryBuilder()
        .update(entity)
        .set(body)
        .where(`${typeID} = :${typeID}`, {[typeID]: id})
        .execute()

    return item
}

const deleteQuerryWrapper = async (id, entity, typeID) => {
    const entityRes = await getQuerryWrapper(id, entity, typeID)

    if(entityRes[typeID]) {
        const results = await DSource.getRepository(entity).delete(entityRes)
        
        return results
    } else {
        return 'No entity found'
    }

}

export {
    addQuerryWrapper,
    getQuerryWrapper,
    deleteQuerryWrapper,
    updateQuerryWrapper
}