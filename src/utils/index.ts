import { parse as parseXMLtoJson } from "js2xmlparser";

export function parseJsonDealsToSale(dataDealsPipedrive: any) {
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

export function convertJsonToXml(root: string, objectJson: any) {
    return parseXMLtoJson(root, objectJson);
}
