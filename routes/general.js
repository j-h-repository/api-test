import express from "express";
const router = express.Router();
import {register} from "../functions.js/general"

router.post("/register", register);