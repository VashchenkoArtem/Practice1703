import { InferType } from "yup";
import { stepOneValidator } from "../lib/register/step.one.validation";
import { stepTwoValidator } from "../lib/register/step.two.validation";

export type StepOneForm = InferType<typeof stepOneValidator>;
export type StepTwoForm = InferType<typeof stepTwoValidator>;