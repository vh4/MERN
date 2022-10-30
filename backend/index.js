import express from "express";
import cors from "cors";
import session  from "express-session";
import * as dotenv from 'dotenv'
import SequilizeStrore from "connect-session-sequelize"
dotenv.config()
// import db from "./config/databases.js";
import userRoute from "./routes/userRoute.js";
import productRoute from "./routes/productRoute.js"
import authRoute from "./routes/authRoute.js"
import db from "./config/databases.js";

const app = express();

// (async () => {
//     await db.sync();
// })();

const sessionStore = SequilizeStrore(session.Store);
const store = new sessionStore({
    db:db
});

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    store: store,
    cookie: {
        secure: 'auto'
    }

}))

app.use(cors({
    credentials: true,
    origin:'http://localhost:3000'
}));

app.use(express.json());
app.use(userRoute);
app.use(productRoute);
app.use(authRoute);

// store.sync();

app.listen(process.env.APP_PORT, function(){
    console.log("Server listening on port " + process.env.APP_PORT);
})