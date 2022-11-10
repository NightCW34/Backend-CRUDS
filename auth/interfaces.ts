export interface User {
  id: string;
  name: string;
  username: string;
  password: string;
  categories: string;
}

export interface UserLogin extends Omit<User, "name"> {}
