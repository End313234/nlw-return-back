import Fastify from "fastify";

import { Logger } from "./utils/logger";

const PORT = 8080;
const app = Fastify();

app.get("/", (_request, response) => {
	response.send("Hello World");
});

app.post("/feedbacks", (_request, response) => {
	response.send("You're trying to create a feedback!");
});

app.listen(PORT, () => {
	const logger = new Logger();
	logger.info(`Server running at http://localhost:${PORT}`);
});
