import {products} from "../db";
import repository from "./repository";
import {Store} from "./interfaces";

const list = async () => {
  return await repository.list();
};

const store = async (data: any) => {
  if (!data.name) throw new Error("Property name is missing");
  const stores = await repository.store(data);
  return stores;
};

const getOne = async (id: string) => {
  const modelStores = await repository.getOne(id);
  if (!modelStores) throw new Error("Store not found");

  return modelStores;
};

const destroy = async (id: string) => {
  const model = await repository.getOne(id);
  if (!model) throw new Error("Store not found");

  return await repository.delete(id);
};

const update = async (id: string, data: Store) => {
  console.log(id, data);

  const model = await repository.getOne(id);
  if (!model) throw new Error("store not found");

  const modelUpdated = await repository.update(id, data);
  return modelUpdated;
};

export default {
  list,
  store,
  getOne,
  delete: destroy,
  update,
};
