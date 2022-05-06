import type { FastifyInstance } from "fastify";

import { createFeedbackService } from "./create";

import type { RouteController } from "types/route";

export const feedbacksController: RouteController = (
	app: FastifyInstance,
	_options,
	done,
) => {
	app.post("/feedbacks", createFeedbackService);
	done();

	return app;
};
