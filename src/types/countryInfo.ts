import { ProvinceInfo } from "./provinceInfo";

export interface CountryInfo {
  isoCode: string,
  name: string,
  provinceLabel: string,
  provinces: ProvinceInfo[],
  showPostalCode: boolean,
  showProvinces: boolean
}