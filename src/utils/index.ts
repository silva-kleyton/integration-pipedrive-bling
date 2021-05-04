import { parse as parseXMLtoJson } from "js2xmlparser";
import { Order } from "../models/order";

export function parseJsonDealsToOrderBling(dataDealsPipedrive: any) {
    return {
        cliente: {
            nome: dataDealsPipedrive.person_id?.name,
        },
        itens: {
            item: [
                {
                    codigo: "001",
                    qtde: 1,
                    vlr_unit: Number(dataDealsPipedrive.value).toFixed(2),
                },
            ],
        },
    };
}
export function parseDealPipedriveToOrderDTO(dataDealsPipedrive: any) {
    return {
        nameClient: dataDealsPipedrive.person_id?.name,
        value: Number(dataDealsPipedrive.value),
        date: dataDealsPipedrive.won_time,
    } as Order;
}

export function convertJsonToXml(root: string, objectJson: any) {
    return parseXMLtoJson(root, objectJson);
}
