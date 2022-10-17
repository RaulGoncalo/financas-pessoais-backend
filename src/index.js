import express from "express";
import cors from "cors";
import winston from "winston";
import userRoutes from "./routes/userRoutes.js";
import billRoutes from "./routes/billRoutes.js";
import depositRoute from "./routes/depositRoutes.js";

const { combine, timestamp, label, printf } = winston.format;
const myFormt = printf(({ level, message, label, timestamp }) => {
	return `${timestamp}  [${label}] ${level} ${message}`;
});
global.logger = winston.createLogger({
	level: "silly",
	transports: [
		new winston.transports.Console(),
		new winston.transports.File({ filename: "personalFinances - api.log" }),
	],
	format: combine(
		label({ label: "personalFinances-api" }),
		timestamp(),
		myFormt
	),
});

const app = express();
app.use(express.json());
app.use(cors());

app.use("/user", userRoutes);
app.use("/bill", billRoutes);
app.use("/deposit", depositRoute);

app.use((err, req, res, next) => {
	logger.error(`${req.method} ${req.baseUrl} - ${err.message}`);
	res.status(400).send({ error: err.message });
});

app.listen(3030, () => {
	console.log("API STARTED");
});
