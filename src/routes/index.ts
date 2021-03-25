import { Router } from "express";
import dealsRoute from "./Deals.routes";

const routes = Router();

routes.use("/deals", dealsRoute);

export default routes;
