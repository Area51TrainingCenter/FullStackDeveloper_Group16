import * as express from "express"
import { UserController } from '../controllers';
import { validador } from "../validators/validator";
import { schemasUser } from '../validators/user.schemas';
import { authentication, authorization } from '../policies';
import { errorsHandler } from "../handlers/errors.handler";
import { filesHandler } from "../handlers/files.handler";
import { STORAGE } from "../enums/storage.enum";
import { TYPE } from "../enums/type.enum";

const route = express.Router()
const controller = new UserController()

route.get("/", validador(schemasUser.AUTHORIZATION), authentication, authorization("admin"), controller.getAll)
route.get("/:id", controller.getOne)
/* route.post("/", authentication, authorization('admin', "auditor", "operador"), filesHandler.uploadOneMemory(), filesHandler.resizeOne(), errorsHandler.catchAsync(controller.insert)) */
/* route.post("/", authentication, authorization('admin', "auditor", "operador"), filesHandler.uploadFieldsMemory(), filesHandler.resizeFields(), errorsHandler.catchAsync(controller.insert)) */
/* route.post("/", authentication, authorization('admin', "auditor", "operador"), filesHandler.uploadArrayMemory(), filesHandler.resizeArray(), errorsHandler.catchAsync(controller.insert)) */
route.post("/", authentication, authorization('admin', "auditor", "operador"), filesHandler.upload({ storage: STORAGE.DISK, type: TYPE.SINGLE, fields: "foto" }), errorsHandler.catchAsync(controller.insert))

route.post("/login", validador(schemasUser.POST_LOGIN), errorsHandler.catchAsync(controller.login))
route.put("/:id", errorsHandler.catchAsync(controller.update))
route.delete("/:id", errorsHandler.catchAsync(controller.delete))

export default route