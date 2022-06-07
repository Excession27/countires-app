import { AxiosResponse } from "axios";
import { Country } from "../country";

export type APICall<T> = Promise<AxiosResponse<Country>>;
