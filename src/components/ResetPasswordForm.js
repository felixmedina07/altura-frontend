import { Formik } from "formik";
import styled from "styled-components";
import TextInput from "./TextInput";
import { useState } from "react";
import Loader from "./loader";
import Button from "./button";
import useUser from "../request/user";
import { useNavigate } from "react-router-dom";

const Form = styled.form({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});

const TextForgot = styled("p")({
  color: "#FFFFFF",
  textAlign: "center",
  fontFamily: "Genesis",
  fontSize: 10,
  fontWeight: 400,
  cursor: "pointer",
});

const ResetPasswordForm = () => {
  const [loading, setLoading] = useState(false);
  const user = useUser();

  const validateEmail = ({ email }) => {
    const errors = {};
    if (!email) {
      errors.email = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
      errors.email = "Invalid email address";
    }
    return errors;
  };

  const onResetPassword = async ({ email }, { setSubmitting, setErrors }) => {
    setLoading(true);
    const result = await user.onSendTokenRecovery({ email });
    setErrors({ email: result.message });
    setSubmitting(false);
    setLoading(false);
  };

  return (
    <Formik
      initialValues={{
        email: "",
      }}
      validate={(values) => {
        const email = validateEmail(values);
        if (email.email) return email;
      }}
      onSubmit={onResetPassword}
    >
      {({
        values,
        handleChange,
        handleSubmit,
        handleBlur,
        isSubmitting,
        errors,
        touched,
      }) => (
        <Form onSubmit={handleSubmit}>
          <TextInput
            title={"Email"}
            handleBlur={handleBlur}
            name={"email"}
            setText={handleChange}
            text={values.email}
            type={"email"}
          />
          <Button text={"Send"} type="submit" disabled={isSubmitting} />
          <Loader isVisible={loading} />
          {errors.email && touched.email && (
            <TextForgot>{errors.email}</TextForgot>
          )}
        </Form>
      )}
    </Formik>
  );
};

export default ResetPasswordForm;
