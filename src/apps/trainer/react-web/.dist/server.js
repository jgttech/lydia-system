require("colors");
require("dotenv").config();

const
{ log } = console,
path = require("path"),
cors = require("cors"),
compression = require("compression"),
express = require("express"),
app = express(),
{ PORT, DOMAIN, APPDIR } = process.env;

// https://github.com/expressjs/cors
app.use(compression());
app.use(express.static(path.join(APPDIR)));
app.use("*", cors());

app.get("*", (req, res) => {
    res.sendFile(path.join(APPDIR, "index.html"));
});

app.listen(PORT, () => {
    log(`> Server: ${`${DOMAIN}:${PORT}`.green}`.bold);
});