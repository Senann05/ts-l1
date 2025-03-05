export interface Aze {
    official: string;
    common: string;
  }
  export interface NativeName {
    aze: Aze;
  }
  export interface Name {
    common: string;
    official: string;
    nativeName: NativeName;
  }
  export interface AZN {
    name: string;
    symbol: string;
  }
  export interface Currencies {
    AZN: AZN;
  }
  export interface Idd {
    root: string;
    suffixes: string[];
  }
  export interface Languages {
    aze: string;
  }
  export interface Translations {
    deu: Aze;
    fra: Aze;
  }
  export interface Eng {
    f: string;
    m: string;
  }
  export interface Demonyms {
    eng: Eng;
  }
  export interface Maps {
    googleMaps: string;
    openStreetMaps: string;
  }
  export interface Gini {
    '2005': number;
  }
  export interface Flags {
    png: string;
    svg: string;
    alt: string;
  }
  export interface CoatOfArms {
    png: string;
    svg: string;
  }
  export interface CountryType {
    name: Name;
    tld: string[];
    cca2: string;
    ccn3: string;
    cca3: string;
    cioc: string;
    independent: boolean;
    status: string;
    unMember: boolean;
    currencies: Currencies;
    idd: Idd;
    capital: string[];
    altSpellings: string[];
    region: string;
    subregion: string;
    languages: Languages;
    translations: Translations;
    latlng: number[];
    landlocked: boolean;
    borders: string[];
    area: number;
    demonyms: Demonyms;
    flag: string;
    maps: Maps;
    population: number;
    gini: Gini;
    fifa: string;
    timezones: string[];
    continents: string[];
    flags: Flags;
    coatOfArms: CoatOfArms;
    startOfWeek: string;
  }