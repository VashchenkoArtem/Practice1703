import * as yup from "yup"
export const loginValidator = yup.object({
    email: yup.string().email("it must be email").required("required").min(10, "min is 10").max(100, "max is 100"),
    password: yup.string().min(8,"min is 8").required("required")
})