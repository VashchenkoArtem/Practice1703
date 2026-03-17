import { InferType } from "yup";
import { stepOneValidator } from "../lib/register/step.one.validation";
import { stepTwoValidator } from "../lib/register/step.two.validation";

export type StepTwoForm = InferType<typeof stepOneValidator>

export type StepOneForm = InferType<typeof stepTwoValidator>