import express from "express";
import {getUsers, getUsersById, createUsers, deleteUsers, updateUsers} from "../controller/UserController.js";
import { verify, adminOnly } from "../middleware/AuthUser.js";

const Router = express.Router();

Router.get("/users", verify, adminOnly, getUsers);
Router.get("/users/:id", verify, adminOnly, getUsersById);
Router.post("/users", createUsers);
Router.put("/users/:id", verify, adminOnly, updateUsers);
Router.delete("/users/:id", verify, adminOnly, deleteUsers);

export default Router;
