import Fastify from "fastify";

import { Logger } from "./utils/logger";

import { HttpStatusEnum } from "./enums/http-status";

const PORT = 8080;
const app = Fastify();

app.addHook("onRequest", (request, response, done) => {
	if (!request.body && request.headers["content-type"] === "application/json") {
		response.code(HttpStatusEnum.BAD_REQUEST).send({
			message: "no body provided",
		});
	}
	done();
});

app.get("/", (_request, response) => {
	response.send("Hello World");
});

app.post("/feedbacks", (request, response) => {
	response.send("You're trying to create a feedback");
});

app.listen(PORT, () => {
	const logger = new Logger();
	logger.info(`Server running at http://localhost:${PORT}`);
});
