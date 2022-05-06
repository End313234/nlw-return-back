import { prisma } from "../../../database/client";

import { HttpStatusEnum } from "../../../enums/http-status";
import type { RouteService } from "types/route";

interface FeedbackRequestBody {
	type: string;
	comment: string;
	screenshot: string;
}

export const createFeedbackService: RouteService = async (
	request,
	response,
) => {
	const { type, comment, screenshot } = request.body as FeedbackRequestBody;

	const newFeedback = await prisma.feedbacks.create({
		data: {
			type,
			comment,
			screenshot,
		},
	});

	response.code(HttpStatusEnum.CREATED).send(newFeedback);
};
