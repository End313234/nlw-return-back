import type { CreateFeedbackRequestBody } from "api/feedbacks/create/types";
import { prisma } from "database/client";

import type { FeedbacksRepository } from "..";

export class PrismaFeedbacksRepository implements FeedbacksRepository {
	public async create({
		type,
		comment,
		screenshot,
	}: CreateFeedbackRequestBody) {
		await prisma.feedbacks.create({
			data: {
				type,
				comment,
				screenshot,
			},
		});
	}
}
