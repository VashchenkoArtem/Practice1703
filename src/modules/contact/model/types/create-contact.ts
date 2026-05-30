import { InferType } from "yup";
import { createContactSchema } from "../lib";
export type CreateContact = InferType<typeof createContactSchema>;
