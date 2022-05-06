import express from "express";

import { Logger } from "./utils/logger";

const PORT = 8080;
const app = express();

app.get("/", (_request, response) => {
	response.send("Hello World!");
});

app.listen(PORT, () => {
	const logger = new Logger();
	logger.info(`Server running at http://localhost:${PORT}`);
});
