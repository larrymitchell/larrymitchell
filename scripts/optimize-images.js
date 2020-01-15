const webp = require("webp-converter");

const path = "./src/images/illustrations/";

var glob = require("glob");

glob(`${path}*`, (_er, files) => {
  files.forEach(file => {
    const cleanedFile = file.replace(path, "");
    const webpFileName = `${cleanedFile.split(".")[0]}.webp`;
    if (cleanedFile !== webpFileName) {
      webp.cwebp(file, `${path}${webpFileName}`, "-q 80", (status, error) => {
        console.log(status, error);
      });
    }
  });
});
