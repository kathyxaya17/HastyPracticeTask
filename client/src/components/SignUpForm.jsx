import React, { Fragment, useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { signupFormSchema } from "../schema/signupFormSchema";
import "./style-custom.css";
import "./style.css";
import userService from "../services/userService";
import Swal from "sweetalert2";

const SignUpForm = () => {
  const [userFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const handleSubmit = async (values, actions) => {
    try {
      const response = await userService.post("/", values);
      console.log(response);

      Swal.fire({
        title: "Go Bills",
        text: "Welcome to Bills Mafia!",
        imageUrl: "https://media.tenor.com/vR0wxzj7rxkAAAAC/buffalo-bills.gif",
        imageWidth: 400,
        imageHeight: 400,
        imageAlt: "Broken table image :(",
      });
      actions.resetForm();
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong! Are you a Patriots fan?",
        imageUrl: "https://media.tenor.com/IpgCkfEhdJUAAAAC/worthless-bill.gif",
        imageWidth: 400,
        imageHeight: 400,
        imageAlt: "Broken table image :(",
      });
    }
  };

  return (
    <Fragment>
      <div className="container">
        <Formik
          initialValues={userFormData}
          validationSchema={signupFormSchema}
          onSubmit={handleSubmit}
        >
          <Form>
            <div className="form-field">
              <label htmlFor="firstName">First Name</label>
              <Field
                name="firstName"
                type="text"
                className="form-input"
                placeholder="Please Enter Your Name"
              ></Field>

              <ErrorMessage
                name="firstName"
                className="text-danger"
                component="div"
              ></ErrorMessage>
            </div>
            <div className="form-field">
              <label htmlFor="lastName">Last Name</label>
              <Field
                name="lastName"
                type="text"
                className="form-input"
                placeholder="Please Enter Your Last Name"
              ></Field>

              <ErrorMessage
                name="lastName"
                component="div"
                className="text-danger"
              ></ErrorMessage>
            </div>
            <div className="form-field">
              <label htmlFor="email">Email Address</label>
              <Field
                name="email"
                type="email"
                className="form-input"
                placeholder="Please Enter Your Email"
              ></Field>

              <ErrorMessage
                name="email"
                component="div"
                className="text-danger"
              ></ErrorMessage>
            </div>
            <div>
              <button type="submit" name="submit" onClick={handleSubmit}>
                Let's Go!
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </Fragment>
  );
};

export default SignUpForm;
