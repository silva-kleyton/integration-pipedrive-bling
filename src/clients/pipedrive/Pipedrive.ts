import axios from "axios";
import "dotenv/config";

const baseUrl = axios.create({ baseURL: `${process.env.BASE_URL_PIPEDRIVE}` });

export default baseUrl;
