import express from "express";
import {Login, getUserLogin, Logout} from "../controller/Auth.js";

const Router = express.Router();

Router.get("/me", getUserLogin);
Router.post("/login", Login);
Router.delete("/logout", Logout);

export default Router;
