import express from "express"
import { addFood,listFood ,removeFood} from "../controllers/foodController.js"

const foodRouter= express.Router();


foodRouter.post("/add",addFood)
foodRouter.get("/list",listFood)
foodRouter.post("/remove/:id",removeFood)


export default foodRouter;