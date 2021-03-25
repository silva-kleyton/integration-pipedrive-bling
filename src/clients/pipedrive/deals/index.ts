import PipedriveClient from "../Pipedrive";

export class PipedriveDeals {
    public async listDeals(
        limit: number = 10,
        status: string = "won",
        start: number = 0,
        sort: string = "add_time"
    ) {
        const queryLimit = status ? `&limit=${limit}` : "";
        const queryStatus = status ? `&status=${status}` : "";
        const queryStart = start ? `&start=${start}` : "";
        const querySort = sort ? `&sort=${start}` : "";

        const queryParams = `${queryLimit}${queryStatus}${queryStart}${querySort}`;

        const { data } = await PipedriveClient.get(
            `/deals?api_token=${process.env.API_KEY_PIPEDRIVE}${queryParams}`
        );

        return data;
    }
}
