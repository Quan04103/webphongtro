import { findIana, findOneIana, findWindows } from "../src";
import { IanaName, Territory, WindowsZoneName } from "../src/enums";

describe("findOneIana()", () => {
  test("returns a IANA time zone when passed just a Windows time zone name", () => {
    expect(findOneIana(WindowsZoneName.UtcMinus_11)).toBe("Etc/GMT+11");
    expect(findOneIana(WindowsZoneName.UsMountainStandardTime)).toBe("America/Phoenix");
    expect(findOneIana(WindowsZoneName.CentralStandardTime)).toBe("America/Chicago");
    expect(findOneIana(WindowsZoneName.WEuropeStandardTime)).toBe("Europe/Berlin");
    expect(findOneIana(WindowsZoneName.ChinaStandardTime)).toBe("Asia/Shanghai");
  });

  test("returns a IANA time zone when passed just a Windows time zone name and territory", () => {
    expect(findOneIana(WindowsZoneName.UtcMinus_11, Territory.Um)).toBe("Pacific/Midway");
    expect(findOneIana(WindowsZoneName.UsMountainStandardTime, Territory.Ca)).toBe("America/Dawson_Creek");
    expect(findOneIana(WindowsZoneName.CentralStandardTime, Territory.Us)).toBe("America/Chicago");
    expect(findOneIana(WindowsZoneName.WEuropeStandardTime, Territory.De)).toBe("Europe/Berlin");
    expect(findOneIana(WindowsZoneName.ChinaStandardTime, Territory.Hk)).toBe("Asia/Hong_Kong");
  });

  test("returns `undefined` if the Windows time zone cannot be converted", () => {
    expect(findOneIana("fake time zone" as any)).toBeUndefined();
  });

  test("returns `undefined` if the territory cannot be converted", () => {
    expect(findOneIana(WindowsZoneName.UsMountainStandardTime, "fake" as any)).toBeUndefined();
  });
});

describe("findIana()", () => {
  test("returns a list of IANA time zones when passed just a Windows time zone name", () => {
    expect(findIana(WindowsZoneName.UtcMinus_11)).toEqual(["Etc/GMT+11"]);
    expect(findIana(WindowsZoneName.UsMountainStandardTime)).toEqual(["America/Phoenix"]);
    expect(findIana(WindowsZoneName.CentralStandardTime)).toEqual(["America/Chicago"]);
    expect(findIana(WindowsZoneName.WEuropeStandardTime)).toEqual(["Europe/Berlin"]);
    expect(findIana(WindowsZoneName.ChinaStandardTime)).toEqual(["Asia/Shanghai"]);
  });

  test("returns a list of IANA time zones when passed just a Windows time zone name and territory", () => {
    expect(findIana(WindowsZoneName.UtcMinus_11, Territory.Um)).toEqual(["Pacific/Midway"]);
    expect(findIana(WindowsZoneName.UsMountainStandardTime, Territory.Ca)).toEqual([
      "America/Dawson_Creek",
      "America/Creston",
      "America/Fort_Nelson",
    ]);
    expect(findIana(WindowsZoneName.CentralStandardTime, Territory.Us)).toEqual([
      "America/Chicago",
      "America/Indiana/Knox",
      "America/Indiana/Tell_City",
      "America/Menominee",
      "America/North_Dakota/Beulah",
      "America/North_Dakota/Center",
      "America/North_Dakota/New_Salem",
    ]);
    expect(findIana(WindowsZoneName.WEuropeStandardTime, Territory.De)).toEqual(["Europe/Berlin", "Europe/Busingen"]);
    expect(findIana(WindowsZoneName.ChinaStandardTime, Territory.Hk)).toEqual(["Asia/Hong_Kong"]);
  });

  test("returns `undefined` if the Windows time zone cannot be converted", () => {
    expect(findIana("fake time zone" as any)).toBeUndefined();
  });

  test("returns `undefined` if the territory cannot be converted", () => {
    expect(findIana(WindowsZoneName.UsMountainStandardTime, "fake" as any)).toBeUndefined();
  });
});

describe("findWindows", () => {
  test("returns the Windows time zone for the passed Iana time zone", () => {
    expect(findWindows(IanaName.AmericaNewYork)).toEqual("Eastern Standard Time");
    expect(findWindows(IanaName.PacificEaster)).toEqual("Easter Island Standard Time");
    expect(findWindows(IanaName.Cst6Cdt)).toEqual("Central Standard Time");
    expect(findWindows(IanaName.AsiaOmsk)).toEqual("Omsk Standard Time");
  });
  test("returns `undefined` if the Iana timezone cannot be converted", () => {
    expect(findWindows("fake time zone" as any)).toBeUndefined();
  });
});
