import express, { Application, Request, Response, NextFunction } from "express";
import bodyParser from 'body-parser';
import connect from "./connect";

const app: Application = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

/* API */

app.get("/", (req: Request, res: Response): object => {
        return res.json({ status: "success", message: "Welcome to API Serviced" });
    }
);

app.use((req: Request, res: Response, next: NextFunction) => {
    const error = new Error("Route Not found");
    next(error);
});

app.use((error: { message: string; status: number }, req: Request, res: Response,next: NextFunction
    ) => {
        res.status(error.status || 500);
        res.json({
            status: "error",
            message: error.message
        });
        next();
    }
);

const PORT: any = process.env.PORT || 8080;

app.listen(PORT, () => console.log(`app listening on port ${PORT}`));

/* Database connection */

const db = 'mongodb://db:27017/pepe';
connect({ db });
