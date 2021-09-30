import { error } from "console";
import fs from "fs";
import path from "path";
import YAML from "yaml";

export const env = (file="env.yml"): any => {
    try {
        const location = path.resolve("/", path.join(path.relative(__dirname, "./"), file));
        return YAML.parse(fs.readFileSync(location, "utf8"));
    } catch(e) {
        error(e);
        return {};
    }
}