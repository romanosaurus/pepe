import express, { Application, Request, Response, NextFunction } from "express";
import bodyParser from 'body-parser';
import connect from "./connect";

import UserRoutes from './routes/user.route';

const app: Application = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

/* API */

app.get("/", (req: Request, res: Response): object => {
        return res.json({ status: "success", message: "Welcome to API Serviced" });
    }
);

UserRoutes({ app });

/*app.get("/create_user", async (req, res) => {
    const user = await UserController.CreateUser({
        firstName: req.query.firstName,
        lastName: req.query.lastName,
        email: req.query.email
    });

    return res.send({ user });
});*/

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

const db = 'mongodb://romain:romain@db:27017/pepe';
connect({ db });
