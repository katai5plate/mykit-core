const fs = require("fs-extra");
module.exports = (dirname, resources, scripts) => {
  resources.forEach(({ src, dir, dist }) => {
    const root = !!dir ? `./${dir}/` : "./";
    const dest = `${root}${!!dist ? dist : src}`;
    const read = `${dirname}/resources/${src}`;
    try {
      fs.outputFileSync(dest, fs.readFileSync(read));
      console.log(`ADDED ${dest}`);
    } catch (e) {
      console.log(`FAILED ${dest}`, e, { src, dir, dist, root, dest, read });
      process.exit(1);
    }
  });
  const pkg = "./package.json";
  try {
    if (fs.existsSync(pkg)) {
      console.log(`DETECTED ${pkg}`);
      const currentPkg = fs.readJSONSync(pkg);
      currentPkg.scripts = { ...(currentPkg.scripts || {}), ...scripts };
      fs.outputFileSync(pkg, JSON.stringify(currentPkg, void 0, "  "));
      console.log(`ADDED SCRIPTS IN ${pkg}`);
    } else {
      console.log(`${pkg} IS NOT FOUND`);
      fs.outputFileSync(pkg, JSON.stringify({ scripts }, void 0, "  "));
      console.log(`ADDED ${pkg}`);
    }
  } catch (e) {
    console.log(`FAILED ${pkg}`, e, { pkg, scripts });
    process.exit(1);
  }
  console.log("DONE");
  console.log("");
  console.log("RUN THIS:\n\nyarn mykit-install");
};
