import { yup } from "utils/yup";

export const isFeedbackType = yup
	.string()
	.oneOf(["BUG", "IDEA", "OTHER", "PROBLEM"])
	.required()
	.strict();

export const isFeedbackComment = yup.string().required().strict();

export const isFeedbackScreenshot = yup
	.string()
	.optional()
	.matches(/^data:image\/png;base64.+$/)
	.strict();
