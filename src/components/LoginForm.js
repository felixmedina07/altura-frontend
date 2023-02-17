import { Formik } from "formik";
import TextInput from "./TextInput";
import styled from "styled-components";
import { useContext, useState } from "react";
import IconButton from "@mui/material/IconButton";
import ButtonLoginModal from "../assets/buttonLoginModal.png";
import Box from "@mui/material/Box";
import BarLight from "../assets/BarLight.svg";
import FACEBOOK from "../assets/FACEBOOK.svg";
import METAMASK from "../assets/METAMASK.svg";
import GOOGLE from "../assets/GOOGLE.svg";
import ALTURA from "../assets/ALTURA.svg";
import LogoDefender from "../assets/logoDefender.png";
import { OPERATION_SAVE_PLACE_API } from "../config/config";
import { UserContext } from "../context/mainContext";
import Loader from "./loader";
import Button from "./button";

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

const TextLink = styled("p")({
  color: "#FFFFFF",
  textAlign: "center",
  fontFamily: "Montserrat-Bold",
  fontSize: 15,
  margin: 0,
  textDecoration: "underline",
});

const TextConnect = styled("p")({
  color: "#FFFFFF",
  textAlign: "center",
  fontFamily: "Genesis",
  fontSize: 10,
  fontWeight: 400,
});

const TextTitle = styled("p")({
  color: "#FFFFFF",
  textAlign: "center",
  fontFamily: "Genesis",
  fontSize: 20,
  fontWeight: 400,
  margin: 0,
});

const LoginForm = ({ setOpen, setOpenRegister, setOpenResetPasswordModal }) => {
  const { setIsLogged, setToken, setUser } = useContext(UserContext);
  const [loading, setLoading] = useState(false);

  const handleGoToForgetPassword = () => {
    setOpen(false);
    setOpenRegister(false);
    setOpenResetPasswordModal(true);
  };

  const handleRegister = () => {
    setOpen(false);
    setOpenRegister(true);
  };

  const onLoginUser = async (
    { userName, password },
    { setSubmitting, setErrors }
  ) => {
    setLoading(true);
    const errors = validate({ userName, password });
    setErrors(errors);
    if (Object.keys(errors).length > 0) {
      setLoading(false);
      setSubmitting(false);
      return;
    }
    try {
      const isLogin = await fetch(`${OPERATION_SAVE_PLACE_API}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          emailOrUsername: userName,
          password: password,
        }),
      });
      const result = await isLogin.json();
      setErrors({ password: result.message });
      if (result.login) {
        const { token, userFound } = result.login;
        setToken(token);
        setUser(userFound);
        setIsLogged(true);
      }
    } catch (e) {
      console.log(e);
    }
    setLoading(false);
    setSubmitting(false);
  };

  const validateUsername = ({ userName }) => {
    const errors = {};
    if (!/^(?=.{5,})/g.test(userName)) {
      errors.userName = "Incorrect password or username";
    }
    return errors;
  };

  const validatePassword = ({ password }) => {
    const errors = {};
    if (
      !/^(?=.{8,})(?=.*[.!@#\$%\^&\*])(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])()/g.test(
        password
      )
    ) {
      errors.password = "Incorrect password or username";
    }
    return errors;
  };

  const validate = (values) => {
    const username = validateUsername(values);
    if (username.userName) return username;
    const password = validatePassword(values);
    if (password.password) return password;
    return {};
  };

  return (
    <Formik
      initialValues={{
        userName: "",
        password: "",
      }}
      onSubmit={onLoginUser}
    >
      {({
        values,
        handleChange,
        handleSubmit,
        handleBlur,
        isSubmitting,
        errors,
      }) => (
        <Form onSubmit={handleSubmit}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "1.5rem",
            }}
          >
            <TextTitle>Welcome To</TextTitle>
            <Box
              component="img"
              style={{ width: 218, height: 81 }}
              src={LogoDefender}
            />
          </div>
          <TextInput
            title={"Username or Email"}
            handleBlur={handleBlur}
            name={"userName"}
            setText={handleChange}
            text={values.userName}
            type={"text"}
          />
          <TextInput
            title={"Password"}
            handleBlur={handleBlur}
            name={"password"}
            setText={handleChange}
            text={values.password}
            type={"password"}
          />
          <TextForgot onClick={handleGoToForgetPassword}>
            Forgot Password?
          </TextForgot>
          {errors.userName && <TextForgot>{errors.userName}</TextForgot>}
          {errors.password && <TextForgot>{errors.password}</TextForgot>}
          <Loader isVisible={loading} />
          <Button text={"Login"} type="submit" disabled={isSubmitting} />
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <Box
              component="img"
              src={BarLight}
              style={{ width: 100, height: 38 }}
            />
            <TextConnect>Or Connect with</TextConnect>
            <Box
              component="img"
              src={BarLight}
              style={{ width: 100, height: 38 }}
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
              marginLeft: "2rem",
              marginRight: "2rem",
            }}
          >
            <Box component="img" src={ALTURA} />
            <Box component="img" src={GOOGLE} />
            <Box component="img" src={METAMASK} />
            <Box component="img" src={FACEBOOK} />
          </div>
          <IconButton onClick={() => handleRegister()}>
            <TextLink>Create an Account</TextLink>
          </IconButton>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
