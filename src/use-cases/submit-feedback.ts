import type { CreateFeedbackRequestBody } from "api/feedbacks/create/types";
import type { FeedbacksRepository } from "api/feedbacks/repositories";
import {
	isFeedbackComment,
	isFeedbackScreenshot,
	isFeedbackType,
} from "config/validations/feedback";
import { yup } from "utils/yup";
import type { ValidationError } from "yup";

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
		const validationSchema = yup.object().shape({
			type: isFeedbackType,
			comment: isFeedbackComment,
			screenshot: isFeedbackScreenshot,
		});

		try {
			await validationSchema.validate(requestBody as CreateFeedbackRequestBody);
		} catch (err) {
			const { errors } = err as ValidationError;

			return new Error(errors.toString());
		}
		const { type, comment, screenshot } = requestBody;

		await this.feedbacksRepository.create({
			type,
			comment,
			screenshot,
		});
	}
}
