import { SubmitFeedbackUseCase } from "use-cases/submit-feedback";

describe("Submit feedback", () => {
	it("should be able to submit a feedback", async () => {
		const submitFeedback = new SubmitFeedbackUseCase({
			create: async () => {},
		});

		await expect(
			submitFeedback.execute({
				type: "BUG",
				comment: "example comment",
				screenshot: "data:image/png;base64;a",
			}),
		).resolves.not.toThrow();
	});

	it("should not be able to submit a feedback without a type", async () => {
		const submitFeedback = new SubmitFeedbackUseCase({
			create: async () => {},
		});

		await expect(
			submitFeedback.execute({
				type: "",
				comment: "example comment",
				screenshot: "data:image/png;base64;a",
			}),
		).resolves.toThrow();
	});

	it("should not be able to submit a feedback with wrong image format", async () => {
		const submitFeedback = new SubmitFeedbackUseCase({
			create: async () => {},
		});

		await expect(
			submitFeedback.execute({
				type: "BUG",
				comment: "example comment",
				screenshot: "image.png",
			}),
		).resolves.toThrow();
	});

	it("should not be able to submit a feedback without a comment", async () => {
		const submitFeedback = new SubmitFeedbackUseCase({
			create: async () => {},
		});

		await expect(
			submitFeedback.execute({
				type: "BUG",
				comment: "",
				screenshot: "data:image/png;base64;a",
			}),
		).resolves.toThrow();
	});
});
