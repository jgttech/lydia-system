import { log, error } from "console";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const
db = mongoose.connection,
{ DB_CONNECTION } = process.env,
msg = msg => { log(`> DB: `.bold + `` + msg); };

// Signal interrupt.
process.on("SIGINT", () => {
    db.close();
});

// Database events.
db.on("connecting", () => {
    msg(`Connecting`.cyan.bold);
});

db.on("connected", () => {
    msg(`Connected`.green.bold);
});

db.on("open", () => {
    msg(`Open`.green.bold);
});

db.on("disconnecting", () => {
    msg(`Disconnecting`.cyan.bold);
});

db.on("disconnected", () => {
    msg(`Disconnected`.yellow.bold);
});

db.on("close", () => {
    msg(`Close`.yellow.bold);
});

db.on("reconnected", () => {
    msg(`Reconnected`.cyan.bold);
});

db.on("error", err => {
    msg(`Error`.red.bold);
    error(err);
});

mongoose.connect(DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
});