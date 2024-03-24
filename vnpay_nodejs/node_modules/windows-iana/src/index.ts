import { IanaName, Territory, WindowsZoneName } from "./enums";
import { map } from "./time-zone-map";

export const findIana = (
  windowsTimeZone: WindowsZoneName,
  territory: Territory = Territory["001"],
): IanaName[] | undefined => {
  const entry = map.find(
    ({ windowsName: itemName, territory: itemTerritory }) =>
      itemName === windowsTimeZone && itemTerritory === territory,
  );

  if (typeof entry === "undefined") return undefined;

  return entry.iana;
};

export const findOneIana = (
  windowsTimeZone: WindowsZoneName,
  territory: Territory = Territory["001"],
): IanaName | undefined => {
  const result = findIana(windowsTimeZone, territory);
  if (typeof result === "undefined") return undefined;
  return result[0];
};

export const findWindows = (ianaTimeZone: IanaName): WindowsZoneName | undefined => {
  const entry = map.find(({ iana: itemName }) => itemName.includes(ianaTimeZone));
  if (typeof entry === "undefined") return undefined;

  return entry.windowsName;
};
