import * as yup from "yup";
export const createContactSchema = yup.object({
    avatar: yup.string().required("This field is required"),
    name: yup.string().required("This field is required"),
    surname: yup.string().required("This field is required"),
});
