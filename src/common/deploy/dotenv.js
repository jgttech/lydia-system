// [About]
// AWS Elastic Beanstalk does not have an easy way to deploy
// environment variables that an application uses. However, EB
// does not expose files that start with a dot (.), like ".env".
// The NPM package "dotenv" is used to load ".env" file into the
// applications deployed environment. This means I shoud, in theory,
// be able to generate the ".env" from CodeBuild wihtout checking
// it into source control using the CodeBuild's environemnt variables.
// However, to be able to know which environment variables each environment
// should be expecting to have, this script reads a "vars.yml" file
// to, then, attempt to generate the ".env" configuration.
// That AWS EB will then deploy with the application.

(async () => {
    const
    YAML = require("yaml"),
    { ensureFileSync } = require('fs-extra'),
    { readFileSync, writeFileSync } = require("fs"),
    { resolve } = require("path");

    const
    file = ".env",
    { output, variables } = require("yargs").argv,
    outputFile = resolve(output, file),
    { env } = YAML.parse(readFileSync(resolve(variables), "utf8"));

    let dotenv = ``;
    for (let variable of env)
        dotenv += `${variable}=${process.env[variable] || null}\n`;

    ensureFileSync(outputFile);
    writeFileSync(outputFile, dotenv, "utf8");
})()