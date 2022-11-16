import { library } from "./interfaces";
import { libraryException } from './exceptions';


const validatelibraryInput = (data: library) => {
    if (!data.name) throw new libraryException("Property name is missing");
    if (data.name.length < 3) throw new libraryException("Property name must be at least 3 characters");
    if (data.name.length > 20) throw new libraryException("Property name must be at most 20 characters");
    if (!data.description) throw new libraryException("Property description is missing");
}
export default {
    validatelibraryInput
}