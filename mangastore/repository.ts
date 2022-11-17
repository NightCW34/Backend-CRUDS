import { ulid } from 'ulid';
import { mangastore } from './models';
import { mangastore as Imangastore } from './interfaces';

const list = async () => {
    return await mangastore.find();
}

const store = async (data: Imangastore) => {
    const id = ulid();

    const model = new mangastore({ id, title: data.title, autor: data.autor, price: data.price, publicationDate: data.publicationDate, category: data.category });

    await model.save();

    return model;
}


const getOne = async (id: string) => {
    return await mangastore.findOne({ id });
}

const deleteItem = async (id: string) => {
    return await mangastore.deleteOne({ id });
}


const update = async (id: string, data: Imangastore) => {

    const model = await mangastore.findOneAndUpdate({ id }, data, { new: true });

    return model;
}

export default {
    list,
    store,
    getOne,
    delete: deleteItem,
    update
}