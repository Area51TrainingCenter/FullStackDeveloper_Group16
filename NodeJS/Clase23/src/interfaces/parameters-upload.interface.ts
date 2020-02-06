import { STORAGE } from "../enums/storage.enum";
import { TYPE } from "../enums/type.enum";

export interface ParametersUpload {
    storage: STORAGE,
    type: TYPE
    fields: any
}