export type CountryType = {
  name: {
    common: string;
    official: string;
    nativeName: {
      eng: {
        official: string;
        common: string;
      };
    };
  };
  tld?: Array<string>;
  cca2?: string;
  ccn3?: string;
  cca3?: string;
  cioc?: string;
  independent?: boolean;
  status?: string;
  unMember?: boolean;
  currencies: Object;
  idd?: Object;
  capital?: Array<string>;
  altSpellings?: Array<string>;
  region: string;
  subregion?: string;
  languages: Object;
  translations?: Object;
  latlng?: [lat: number, long: number];
  landlocked?: boolean;
  borders?: Array<string>;
  area?: number;
  demonyms?: Object;
  flag?: string;
  maps?: Object;
  population?: number;
  gini?: Object;
  fifa?: string;
  car?: {
    signs: Array<string>;
    side: string;
  };
  timezones?: Array<string>;
  continents?: Array<string>;
  flags?: { png: string; svg: string };
  coatOfArms?: { png: string; svg: string };
  startOfWeek?: string;
  capitalInfo?: {
    latlng: [lat: number, long: number];
  };
};
