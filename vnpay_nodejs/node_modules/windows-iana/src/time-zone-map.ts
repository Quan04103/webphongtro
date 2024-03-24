import mapContent = require("../windowsZones.json");
import { IanaName, Territory, WindowsZoneName } from "./enums";

export const map: ZoneMap = mapContent as any;

export type ZoneMap = ZoneMapEntry[];

export interface ZoneMapEntry {
  windowsName: WindowsZoneName;
  territory: Territory;
  iana: IanaName[];
}
