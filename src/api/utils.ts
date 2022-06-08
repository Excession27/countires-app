import { AxiosResponse } from "axios";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { CountryType } from "./country/types";

export type APICall<CountryType> = Promise<AxiosResponse<CountryType>>;
