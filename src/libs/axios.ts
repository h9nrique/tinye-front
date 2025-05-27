import axios from "axios";
import { requestSuccess } from "./interceptors/requestSuccess";
import { requestError } from "./interceptors/requestError";

const api = axios.create({
  baseURL: process.env.API_URL,
});

api.interceptors.request.use(requestSuccess, requestError);

export { api };
