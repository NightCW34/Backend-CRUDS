import { mangastore } from "./interfaces";
import { mangastoreException } from './exceptions';


const validatemangastoreInput = (data: mangastore) => {
    if (!data.title) throw new mangastoreException("Property title is missing");
    if (data.title.length < 3) throw new mangastoreException("Property title must be at least 3 characters");
    if (data.title.length > 20) throw new mangastoreException("Property title must be at most 20 characters");
    if (!data.autor) throw new mangastoreException("Property autor is missing");
}

export default {
    validatemangastoreInput
}