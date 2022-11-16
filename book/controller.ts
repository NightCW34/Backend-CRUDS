import {products} from "../db";
import repository from "./repository";
import {Book} from "./interfaces";

const list = async () => {
  return await repository.list();
};

const book = async (data: any) => {
  if (!data.name) throw new Error("Property name is missing");
  const books = await repository.book(data);
  return books;
};

const getOne = async (id: string) => {
  const book = await repository.getOne(id);
  if (!book) throw new Error("Book not found");

  return book;
};

const destroyItem = async (id: string) => {
  const models = await repository.getOne(id);
  if (!models) throw new Error("Book not found");

  return await repository.delete(id);
};

const update = async (id: string, data: Book) => {
  console.log(id, data);

  const model = await repository.getOne(id);
  if (!model) throw new Error("Book not found");

  const modelUpdated = await repository.update(id, data);
  return modelUpdated;
};

export default {
  list,
  book,
  getOne,
  delete: destroyItem,
  update,
};
