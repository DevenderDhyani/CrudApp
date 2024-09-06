import { Router } from "express";
import { signup } from "../controller/urls";

const rout = Router();

rout.post("/xyz", signup)

export default rout

