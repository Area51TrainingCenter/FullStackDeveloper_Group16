import * as express from "express"
import { UserController } from '../controllers';
import { validador } from "../validators/validator";
import { schemasUser } from '../validators/user.schemas';

const route = express.Router()
const controller = new UserController()

route.get("/", controller.getAll)
route.get("/:id", controller.getOne)
route.post("/", controller.insert)
route.post("/login", validador(schemasUser.POST_LOGIN), controller.login)
route.put("/:id", controller.update)
route.delete("/:id", controller.delete)

export default route