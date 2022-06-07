import { AxiosResponse } from "axios";
import { CountryType } from "./country/types";

export type APICall<CountryType> = Promise<AxiosResponse<CountryType>>;
