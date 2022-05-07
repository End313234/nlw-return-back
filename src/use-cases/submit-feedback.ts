import type { FeedbacksRepository } from "api/feedbacks/repositories";

interface SubmitFeedbackUseCaseRequestBody {
	type: string;
	comment: string;
	screenshot?: string;
}

export class SubmitFeedbackUseCase {
	public constructor(
		private readonly feedbacksRepository: FeedbacksRepository,
	) {}

	public async execute(requestBody: SubmitFeedbackUseCaseRequestBody) {
		const { type, comment, screenshot } = requestBody;

		await this.feedbacksRepository.create({
			type,
			comment,
			screenshot,
		});
	}
}
