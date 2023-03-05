import { useCallback, useContext } from "react";
import { OPERATION_SAVE_PLACE_API } from "../config/config";
import { UserContext } from "../context/mainContext";

const useUser = () => {
  const { token } = useContext(UserContext);

  const onUserLogin = useCallback(
    async (userName, password) => await Login(userName, password),
    []
  );
  const onRegisterUser = useCallback(async (data) => await Register(data), []);
  const onResendEmail = useCallback(
    async (data) => await resendEmail(data),
    []
  );
  const onVerifyCode = useCallback(
    async ({ email, code }) => await verifyCode({ email, code }),
    []
  );
  const onResetPassword = useCallback(
    async (token, { password }) => await ResetPassword(token, { password }),
    []
  );

  const onSendTokenRecovery = useCallback(
    ({ email }) => SendTokenRecovery({ email }),
    []
  );

  const onGetUserInfo = useCallback(
    async (userToken) => await GetUser(userToken || token),
    []
  );

  return {
    onUserLogin,
    onRegisterUser,
    onResendEmail,
    onVerifyCode,
    onResetPassword,
    onSendTokenRecovery,
    onGetUserInfo,
  };
};

const Login = async ({ userName, password }) => {
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
  return await isLogin.json();
};

const Register = async ({ userName, email, password, birthday, gender }) => {
  const isRegistered = await fetch(`${OPERATION_SAVE_PLACE_API}/auth`, {
    method: "POST",
    body: JSON.stringify({
      username: userName,
      email: email,
      password: password,
      birthday: birthday,
      gender: gender,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return await isRegistered.json();
};

const resendEmail = async ({ email }) => {
  const result = await fetch(`${OPERATION_SAVE_PLACE_API}/auth/resend-email`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
    }),
  });

  return await result.json();
};

const verifyCode = async ({ email, code }) => {
  const verify = await fetch(`${OPERATION_SAVE_PLACE_API}/auth/verify-code`, {
    method: "POST",
    body: JSON.stringify({
      email: email,
      code: parseInt(code),
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const result = await verify.json();
  return await result.message;
};

const ResetPassword = async (token, { password }) => {
  const isUpdatePassword = await fetch(
    `${OPERATION_SAVE_PLACE_API}/auth/recovery-password`,
    {
      withCredentials: true,
      headers: {
        Authorization: `Bearer ${token}`,
        "X-FP-API-KEY": "iphone", //it can be iPhone or your any other attribute
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        newPassword: password,
      }),
    }
  );
  return await isUpdatePassword.json();
};

const SendTokenRecovery = async ({ email }) => {
  const isSend = await fetch(
    `${OPERATION_SAVE_PLACE_API}/auth/send-token-recovery`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
      }),
    }
  );
  return await isSend.json();
};

const GetUser = async (token) => {
  const user = await fetch(`${OPERATION_SAVE_PLACE_API}/auth/info`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  return await user.json();
};

export default useUser;
