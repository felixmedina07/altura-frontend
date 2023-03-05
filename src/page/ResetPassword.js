import { Layout } from "../components/Layout";
import styled from "styled-components";
import Box from "@mui/material/Box";
import { Formik } from "formik";
import TextInput from "../components/TextInput";
import Button from "../components/button";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";
import Loader from "../components/loader";
import useUser from "../request/user";

const Contain = styled(Box)({
  width: "100%",
  height: "100%",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  zIndex: -1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

const Form = styled.form({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  marginTop: "10rem",
  zIndex: 1000,
});

const TextForgot = styled("p")({
  color: "#FFFFFF",
  textAlign: "center",
  fontFamily: "Genesis",
  fontSize: 10,
  fontWeight: 400,
  cursor: "pointer",
});

const ResetPassword = () => {
  const [searchParams] = useSearchParams();
  const [loading, setLoading] = useState(false);
  const user = useUser();

  const handleSavePassword = async (
    { password },
    { setSubmitting, setErrors }
  ) => {
    setLoading(true);
    const token = searchParams.get("token");
    const result = await user.onResetPassword(token, { password });
    setErrors({ verifyPassword: result.message });
    setSubmitting(false);
    setLoading(false);
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

  return (
    <Layout>
      <Contain>
        <Formik
          initialValues={{
            password: "",
            verifyPassword: "",
          }}
          validate={(values) => {
            const password = validatePassword(values);
            if (password.password) return password;
            const passwordValidation = validateVerifyPassword(values);
            if (passwordValidation.verifyPassword) return passwordValidation;
          }}
          onSubmit={handleSavePassword}
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
                <TextInput
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
                <TextInput
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
                <Button text={"Save"} type="submit" disabled={isSubmitting} />
                <Loader isVisible={loading} />
              </Form>
            );
          }}
        </Formik>
      </Contain>
    </Layout>
  );
};

export default ResetPassword;
