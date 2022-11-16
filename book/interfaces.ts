import {Book} from "./models";

export interface Book {
  id: String;
  title: String;
  relaseDate: String;
  author: String;
  category: String;
  description: String;
  numberPage: Number;
}
