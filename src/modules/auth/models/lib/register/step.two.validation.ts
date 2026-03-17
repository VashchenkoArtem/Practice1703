import * as yup from "yup"
export const stepTwoValidator = yup.object({
    name: yup.string().required().min(2).max(100),
    surname: yup.string().min(2).max(100),
    avatar: yup.string()
    
})