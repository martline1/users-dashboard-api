import express from "express";
import cors    from "cors";

const app  = express();
const port = process.env.PORT ?? 8080;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended : true }));

app.get("/", (req, res) => {
    return res.status(200).send({
        message : "Hello world from node server!",
    });
});

app.listen(port, () => console.log(`[Server] Listening on port ${port}`));
