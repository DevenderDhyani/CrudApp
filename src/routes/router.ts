import { Router } from "express";
import { address, profile } from "../controller/urls";
import { validateToken } from "../middleware";

const rout = Router();

rout.post("/profile", validateToken, profile)
rout.post("/address", validateToken, address)

export default rout

