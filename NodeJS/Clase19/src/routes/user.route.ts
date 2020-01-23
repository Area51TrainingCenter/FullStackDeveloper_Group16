import * as express from "express"
import { UserController } from '../controllers';

const route = express.Router()
const controller = new UserController()

route.get("/", controller.getAll)
route.get("/:id", controller.getOne)
route.post("/", controller.insert)
route.put("/:id", controller.update)
route.delete("/:id", controller.delete)

export default route