import * as express from "express"
import { OrderController } from "../controllers"

const route = express.Router()
const controller = new OrderController()

route.get("/", controller.getAll)
route.get("/:id", controller.getOne)
route.post("/", controller.insert)
route.put("/:id", controller.update)
route.delete("/:id", controller.delete)

export default route