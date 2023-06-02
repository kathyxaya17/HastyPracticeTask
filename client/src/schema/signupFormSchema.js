import * as Yup from "yup";

export const signupFormSchema = Yup.object().shape({
  firstName: Yup.string().min(1).max(20).required("First name is required"),
  lastName: Yup.string().min(1).max(20).required("Last name is Required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Please provide an email address"),
});
