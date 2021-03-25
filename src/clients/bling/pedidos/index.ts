import BlingClient from "../Bling";

export class Bling {
    public async createSale(xml: any) {
        const { data } = await BlingClient.post(
            `/pedido/json/&apikey=${process.env.API_KEY_BLING}?xml=${encodeURI(
                xml
            )}`
        );

        return data;
    }
}
