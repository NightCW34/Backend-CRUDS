import { ulid } from 'ulid';
import { library } from './models';
import { library as Ilibrary } from './interfaces';

const list = async () => {
    return await library.find();
}

const store = async (data: Ilibrary) => {
    const id = ulid();

    const model = new library({ id, name: data.name, description: data.description, price: data.price, dateExpiration: data.dateExpiration, Sales: data.Sales });

    await model.save();

    return model;
}

const getOne = async (id: string) => {
    return await library.findOne({ id });
}

const deleteItem = async (id: string) => {
    return await library.deleteOne({ id });
}


const update = async (id: string, data: Ilibrary) => {

    const model = await library.findOneAndUpdate({ id }, data, { new: true });

    return model;
}

export default {
    list,
    store,
    getOne,
    delete: deleteItem,
    update
}