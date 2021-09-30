// [About]
// Generates a "package.json" file for deploying the environment.
// It places the generated "package.json" into the "--output" arguments
// specified directory. This is used for AWS EB to start the applicaiton.
// Generating a "package.json" allows me to remove the dependencies and
// their respective versions from the deployment, so that they are not
// exposed.

(async () => {
    try {
        const
        { log } = console,
        { exit } = process,
        { resolve } = require("path"),
        { existsSync, writeFileSync } = require("fs"),
        { output } = require("yargs").argv;

        const
        projectPath = resolve(),
        outputDir = resolve(output),
        packageJSON = require(`${projectPath}/package.json`);

        if (!existsSync(outputDir)) {
            log(`The --output path does not exist.`);
            exit();
        } else {
            for (let prop of [
                "devDependencies",
                "scripts"
            ])
                if (packageJSON.hasOwnProperty(prop))
                    delete packageJSON[prop];

            packageJSON.scripts = {
                start: `node ${packageJSON.main}`
            };

            writeFileSync(
                resolve(outputDir, "package.json"),
                JSON.stringify(packageJSON, null, 4),
                "utf8"
            );
        }
    } catch(e) {
        throw e;
    }
})()