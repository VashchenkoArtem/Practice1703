import * as yup from "yup"
export const stepOneValidator = yup.object({
    email: yup.string().email().required().min(10).max(100),
    password: yup.string().min(8).required(),
    username: yup.string().required()
})