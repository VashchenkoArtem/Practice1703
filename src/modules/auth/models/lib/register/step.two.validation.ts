import * as yup from "yup";

export const stepTwoValidator = yup.object({
    name: yup.string().required("Name is required").min(2).max(100),
    surname: yup.string().required("Surname is required").min(2).max(100),
    avatar: yup.string().required("Please select an avatar") 
});