import { Router } from "express";
import { profile, address, upAddress, delAddress, upProfile, delProfile } from "../controller/postController"
import { validateSchema } from "../middleware";
import { profileSchema } from "../utils/schemas/profileSchema"
import { addressSchema } from "../utils/schemas/addressSchema"
const rout = Router();

rout.put("/profile", validateSchema(profileSchema), upProfile)
rout.post("/profile", validateSchema(profileSchema), profile)
rout.delete("/profile", delProfile)

rout.put("/address", validateSchema(addressSchema), upAddress)
rout.post("/address", validateSchema(addressSchema), address)
rout.delete("/address", delAddress)

export default rout

