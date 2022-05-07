import { SubmitFeedbackUseCase } from "use-cases/submit-feedback";

import { PrismaFeedbacksRepository } from "../repositories/prisma";

import type { CreateFeedbackRequestBody } from "./types";

import { HttpStatusEnum } from "enums/http-status";
import type { RouteService } from "types/route";

export const createFeedbackService: RouteService = async (
	request,
	response,
) => {
	const { type, comment, screenshot } =
		request.body as CreateFeedbackRequestBody;

	const prismaFeedbacksRepository = new PrismaFeedbacksRepository();
	const submitFeedbackUseCase = new SubmitFeedbackUseCase(
		prismaFeedbacksRepository,
	);

	const possibleErrors = await submitFeedbackUseCase.execute({
		type,
		comment,
		screenshot,
	});
	if (possibleErrors) {
		response.code(HttpStatusEnum.BAD_REQUEST).send({
			errors: possibleErrors,
		});

		return;
	}

	response.code(HttpStatusEnum.CREATED).send();
};
