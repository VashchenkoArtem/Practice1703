import * as yup from "yup"
export const stepOneValidator = yup.object({
    email: yup.string().email().required().min(10).max(100),
    password: yup.string().min(8).required()
    confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match').required("Confirm Password is required")
    username: yup.string().required()
})