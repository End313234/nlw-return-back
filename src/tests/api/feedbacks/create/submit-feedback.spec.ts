import { SubmitFeedbackUseCase } from "use-cases/submit-feedback";

describe("Submit feedback", () => {
	it("should be able to submit a form", async () => {
		const submitFeedback = new SubmitFeedbackUseCase({
			create: async () => {},
		});

		await expect(
			submitFeedback.execute({
				type: "BUG",
				comment: "example comment",
				screenshot: "test.jpg",
			}),
		).resolves.not.toThrow();
	});
});
