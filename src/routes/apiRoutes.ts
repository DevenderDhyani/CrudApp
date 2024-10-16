import { Router } from "express";
import { getProfile, getAddress } from "../controller/apis";
// import { validateToken } from "../middleware";

const rout = Router();


rout.get("/profile", getProfile)
rout.get("/address", getAddress)
export default rout

