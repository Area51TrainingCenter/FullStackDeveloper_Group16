import * as express from "express"
import { ClientController } from "../controllers"
import { validador } from "../validators/validator"
import { schemasClient } from '../validators/client.schemas';

const route = express.Router()
const controller = new ClientController()

route.get("/", controller.getAll)
route.get("/orders", controller.getListOrders)
route.get("/:id", controller.getOne)
route.post("/", validador(schemasClient.POST), controller.insert)
route.put("/:id", validador(schemasClient.PUT), controller.update)



route.delete("/:id", controller.delete)




export default route