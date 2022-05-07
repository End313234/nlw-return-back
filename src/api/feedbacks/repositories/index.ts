import type { CreateFeedbackRequestBody } from "../create/types";

export interface FeedbacksRepository {
	create: (body: CreateFeedbackRequestBody) => Promise<void>;
}
