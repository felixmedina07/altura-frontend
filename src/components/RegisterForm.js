import { Formik } from "formik";
import RegisterTextInput from "./TextInput";
import styled from "styled-components";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import BarLight from "../assets/BarLight.svg";
import { OPERATION_SAVE_PLACE_API } from "../config/config";
import { useState } from "react";
import Loader from "./loader";
import Button from "./button";

const TextForgot = styled("p")({
  color: "#FFFFFF",
  textAlign: "center",
  fontFamily: "Genesis",
  fontSize: 10,
  fontWeight: 400,
  cursor: "pointer",
});

const Form = styled.form({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
});

const ConfirmEmailContainer = styled.div({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
});

const TextConnect = styled("p")({
  color: "#FFFFFF",
  textAlign: "center",
  fontFamily: "Genesis",
  fontSize: 10,
  fontWeight: 400,
});

const TextLink = styled("p")({
  color: "#FFFFFF",
  textAlign: "center",
  fontFamily: "Montserrat-Bold",
  fontSize: 15,
  margin: 0,
  textDecoration: "underline",
});

const RegisterForm = () => {
  const [status, setStatus] = useState(undefined);
  const [loading, setLoading] = useState(false);

  const validateEmail = ({ email }) => {
    const errors = {};
    if (!email) {
      errors.email = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
      errors.email = "Invalid email address";
    }
    return errors;
  };

  const validateVerifyPassword = ({ password, verifyPassword }) => {
    const errors = {};
    if (!/^(?=.{8,})/g.test(verifyPassword)) {
      errors.verifyPassword = "Password must be 8 characters";
    }
    if (password !== verifyPassword) {
      errors.verifyPassword = "Password does not match ";
    }
    return errors;
  };

  const validateUsername = ({ userName }) => {
    const errors = {};
    if (!/^(?=.{5,})/g.test(userName)) {
      errors.userName = "Username must be 5 characters";
    }
    return errors;
  };

  const validatePassword = ({ password }) => {
    const errors = {};
    if (!/^.*[.!@#\$%\^&\*]/g.test(password)) {
      errors.password =
        "The string must contain at least one special character";
    }
    if (!/^.*[0-9]/g.test(password)) {
      errors.password = "The string must contain at least 1 numeric";
    }
    if (!/^.*[a-z]/g.test(password)) {
      errors.password = "The string must contain at least 1 lowercase";
    }
    if (!/^.*[A-Z]/g.test(password)) {
      errors.password = "The string must contain at least 1 uppercase";
    }
    if (!/^.{8,}/g.test(password)) {
      errors.password = "Password must be 8 characters";
    }
    return errors;
  };

  const onRegisterUser = async (
    { userName, email, password },
    { setSubmitting, setErrors }
  ) => {
    setLoading(true);
    const isRegistered = await fetch(`${OPERATION_SAVE_PLACE_API}/auth`, {
      method: "POST",
      body: JSON.stringify({
        username: userName,
        email: email,
        password: password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await isRegistered.json();
    setErrors({ verifyPassword: result.message });
    setStatus(isRegistered.status);
    setSubmitting(false);
    setLoading(false);
  };

  const onResendEmail = async (email) => {
    setLoading(true);
    await fetch(`${OPERATION_SAVE_PLACE_API}/auth/resend-email`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
      }),
    });

    setLoading(false);
  };

  return (
    <Formik
      initialValues={{
        userName: "",
        email: "",
        password: "",
        verifyPassword: "",
      }}
      validate={(values) => {
        setStatus(undefined);
        const username = validateUsername(values);
        if (username.userName) return username;
        const email = validateEmail(values);
        if (email.email) return email;
        const password = validatePassword(values);
        if (password.password) return password;
        const passwordValidation = validateVerifyPassword(values);
        if (passwordValidation.verifyPassword) return passwordValidation;
      }}
      onSubmit={onRegisterUser}
    >
      {({
        values,
        handleChange,
        handleSubmit,
        handleBlur,
        isSubmitting,
        errors,
        touched,
      }) => {
        return (
          <Form onSubmit={handleSubmit}>
            <RegisterTextInput
              title={"Username"}
              name={"userName"}
              text={values.userName}
              handleBlur={handleBlur}
              setText={handleChange}
            />
            {errors.userName && touched.userName && (
              <TextForgot>{errors.userName}</TextForgot>
            )}
            <RegisterTextInput
              title={"Email"}
              type={"email"}
              name={"email"}
              text={values.email}
              handleBlur={handleBlur}
              setText={handleChange}
            />
            {errors.email && touched.email && (
              <TextForgot>{errors.email}</TextForgot>
            )}
            <RegisterTextInput
              title={"Password"}
              type={"password"}
              name={"password"}
              text={values.password}
              handleBlur={handleBlur}
              setText={handleChange}
            />
            {errors.password && touched.password && (
              <TextForgot>{errors.password}</TextForgot>
            )}
            <RegisterTextInput
              title={"Confirm Password"}
              type={"password"}
              name={"verifyPassword"}
              text={values.verifyPassword}
              handleBlur={handleBlur}
              setText={handleChange}
            />
            {errors.verifyPassword && touched.verifyPassword && (
              <TextForgot>{errors.verifyPassword}</TextForgot>
            )}
            <Button text={"Sign up"} type="submit" disabled={isSubmitting} />
            <Loader isVisible={loading} />
            {status === 200 && (
              <>
                <ConfirmEmailContainer>
                  <Box
                    component="img"
                    src={BarLight}
                    style={{ width: 100, height: 38 }}
                  />
                  <TextConnect>Confirm your Email</TextConnect>
                  <Box
                    component="img"
                    src={BarLight}
                    style={{ width: 100, height: 38 }}
                  />
                </ConfirmEmailContainer>
                <IconButton onClick={() => onResendEmail(values.email)}>
                  <TextLink>Re-send confirmation email</TextLink>
                </IconButton>
              </>
            )}
          </Form>
        );
      }}
    </Formik>
  );
};

export default RegisterForm;
