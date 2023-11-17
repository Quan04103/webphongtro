const fs = require("mz/fs");
const path = require("path");
const xml2js = require("xml2js");

const readFile = async () => {
  const map = [];
  const fileContent = await fs.readFile(path.join(__dirname, "../windowsZones.xml"), "utf-8");

  let xmlObject = await new Promise((resolve, reject) => {
    xml2js.parseString(fileContent, (err, result) => {
      if (err) return reject(err);
      return resolve(result);
    });
  });

  xmlObject = await xmlObject.supplementalData.windowsZones[0].mapTimezones[0].mapZone;

  xmlObject.forEach(({ $: entry }) => {
    map.push({ windowsName: entry.other, territory: entry.territory, iana: entry.type.split(" ") });
  });

  return map;
};

(async () => {
  const map = await readFile();
  return await fs.writeFile(path.join(__dirname, "../windowsZones.json"), JSON.stringify(map, null, 2), {
    encoding: "utf-8",
  });
})();
