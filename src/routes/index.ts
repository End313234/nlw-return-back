import { feedbacksController } from "./feedbacks/controller";

import type { RouteController } from "types/route";

export const appController: RouteController = (app, _options, done) => {
	app.register(feedbacksController);
	done();
};
