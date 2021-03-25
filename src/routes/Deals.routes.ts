import IntegrationController from "./../controllers/Integration";
import { Router } from "express";

const dealsRouter = Router();

dealsRouter.get("/list", IntegrationController.pipeDriveToBling);

export default dealsRouter;
