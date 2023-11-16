const fs = require("mz/fs");
const path = require("path");
const pascalCase = require("pascal-case");

const windowsZones = require("../windowsZones.json");

const generateEnumCode = (name, values) => `export enum ${name} {
  ${Array.from(values)
    .map(value => `'${pascalCase(value.replace("+", "-Plus-").replace("-", "-Minus-"))}' = '${value}'`)
    .join(",\n")}
}`;

const generateEnums = () => {
  const windowsNames = new Set();
  const territories = new Set();
  const ianaNames = new Set();

  windowsZones.forEach(zone => {
    windowsNames.add(zone.windowsName);
    territories.add(zone.territory);
    ianaNames.add(...zone.iana);
  });

  return [
    generateEnumCode("WindowsZoneName", windowsNames),
    generateEnumCode("Territory", territories),
    generateEnumCode("IanaName", ianaNames),
  ].join("\n\n\n");
};

(async () => {
  const enums = generateEnums();
  return await fs.writeFile(path.join(__dirname, "../src/enums.ts"), enums, {
    encoding: "utf-8",
  });
})();
