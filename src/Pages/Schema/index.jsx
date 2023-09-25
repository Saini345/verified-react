import * as Yup from "yup";

export const signUpSchema = Yup.object({
    first_name: Yup.string().min(2).max(10).required("Please enter your first name"),
   last_name : Yup.string().min(2).max(10).required("Please enter your last name"),
    country : Yup.string().required("Please enter your country"),
   email : Yup.string().email().required("Please enter your email"),
   phone_number: Yup.number().required("Please enter your phone number"),
    query_type : Yup.string().required("Please enter your query type"),
    message : Yup.string().required("Please enter your message"),
})