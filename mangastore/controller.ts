import { mangastore } from './interfaces';
import repository from './repository';
import validations from './validations';

const list = async () => {
    return await repository.list();
}


const store = async (data: mangastore) => {
    validations.validatemangastoreInput(data);

    const model = await repository.store(data);
    return model;
}


const getOne = async (id: string) => {
    const model = await repository.getOne(id);
    if (!model) throw new Error("Product not found");

    return model;
}

const deleteItem = async (id: string) => {
    const model = await repository.getOne(id);
    if (!model) throw new Error("Product not found");

    return await repository.delete(id);
}

const update = async (id: string, data: mangastore) => {
    
    const model = await repository.getOne(id);
    if (!model) throw new Error("Product not found");


    const modelUpdated = await repository.update(id, data);
    return modelUpdated;
}

export default {
    list,
    store,
    getOne,
    delete: deleteItem,
    update
}