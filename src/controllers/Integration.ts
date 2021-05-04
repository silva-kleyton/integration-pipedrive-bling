import { Request, Response } from "express";
import { PipedriveDeals } from "../clients/pipedrive/deals";
import { Bling } from "../clients/bling/pedidos";
import OrderModel from "../models/order";
import {
    parseJsonDealsToOrderBling,
    convertJsonToXml,
    parseDealPipedriveToOrderDTO,
} from "../utils";

const pipedriveDeals = new PipedriveDeals();
const bling = new Bling();

class Integration {
    public async pipeDriveToBling(req: Request, res: Response) {
        try {
            const {
                success,
                data,
                additional_data,
            } = await pipedriveDeals.listDeals(10);
            const { pagination } = additional_data;

            for (const deal of data) {
                console.log(parseDealPipedriveToOrderDTO(deal));
                // const jsonDeal = parseJsonDealsToOrderBling(deal);
                // const xml = convertJsonToXml("pedido", jsonDeal);
                // await bling.createSale(xml);
            }

            return res.json({ success, data, pagination });
        } catch (error) {
            console.log("status", error.response.status);
            console.log(JSON.stringify(error.response.data, null, 2));
            return res.status(400).json({ error: "Error integration" });
        }
    }
}

export default new Integration();
