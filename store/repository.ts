import {ulid} from "ulid";
import {Store} from "./models";
import {Store as IStore} from "./interfaces";

const list = async () => {
  return await Store.find();
};

const store = async (data: IStore) => {
  const id = ulid();

  const store = new Store({
    name: data.name,
    product: data.product,
    Categorie: data.Categorie,
    direction: data.direction,
    id,
  });

  await store.save();

  return store;
};

const getOne = async (id: string) => {
  return await Store.findOne({id});
};

const destroy = async (id: string) => {
  return await Store.deleteOne({id});
};

const update = async (id: string, data: IStore) => {
  const model = await Store.findOneAndUpdate({id}, data, {new: true});

  return model;
};

export default {
  list,
  store,
  getOne,
  delete: destroy,
  update,
};
