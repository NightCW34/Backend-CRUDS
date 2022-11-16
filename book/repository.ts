import {ulid} from "ulid";
import {Book} from "./models";
import {Book as IBook} from "./interfaces";

const list = async () => {
  return await Book.find();
};

const book = async (data: IBook) => {
  const id = ulid();

  const book = new Book({
    title: data.title,
    relaseDate: data.relaseDate,
    author: data.author,
    category: data.category,
    description: data.description,
    numberPage: data.numberPage,
    id,
  });

  await book.save();

  return book;
};

const getOne = async (id: string) => {
  return await Book.findOne({id});
};

const destroyItem = async (id: string) => {
  return await Book.deleteOne({id});
};

const update = async (id: string, data: IBook) => {
  const model = await Book.findOneAndUpdate({id}, data, {new: true});

  return model;
};

export default {
  list,
  book,
  getOne,
  delete: destroyItem,
  update,
};
