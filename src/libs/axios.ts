import axios from "axios";
import { requestSuccess } from "./interceptors/requestSuccess";
import { requestError } from "./interceptors/requestError";
import { responseSuccess } from "./interceptors/responseSuccess";
import { responseError } from "./interceptors/responseError";

const api = axios.create({
  baseURL: process.env.API_URL,
});

api.interceptors.request.use(requestSuccess, requestError);
api.interceptors.response.use(responseSuccess, responseError);

export { api };
