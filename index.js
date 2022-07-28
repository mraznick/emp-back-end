import db from "./db/connection.js";
import routes from "./routes/index.js";

import express from "express";

const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Home Page");
});

app.use("/api", routes);

db.on("connected", () => {
    console.clear();
    app.listen(PORT, () => {
        console.log("Express server running on port " + PORT);
    });
});
