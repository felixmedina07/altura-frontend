import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";
import { Layout } from "../components/Layout";
import { OPERATION_SAVE_PLACE_API } from "../config/config";
import Box from "@mui/material/Box";

const TextTitle = styled("p")`
  color: #ffffff;
  font-family: "Genesis";
  font-size: 16px;
  font-weight: 400;
  text-align: center;
  margin: 0;
  @media (max-width: 1000px) {
    font-size: 14px;
  }
  @media (max-width: 500px) {
    font-size: 10px;
  }
`;

const Contain = styled(Box)({
  backgroundImage: `url(${"./image/Rectangle.png"})`,
  width: "100%",
  height: "100%",
  backgroundRepeat: "no-repeat",
  backgroundSize: "contain",
  zIndex: -1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
});

const VerifyCode = () => {
  const [searchParams] = useSearchParams();
  const [response, setResponse] = useState();

  const verifyCode = async (email, code) => {
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

    setResponse((await verify.json()).message);
  };

  useEffect(() => {
    const email = searchParams.get("email");
    const code = searchParams.get("code");

    verifyCode(email, code);
  }, []);

  return (
    <Layout>
      <Contain>{response && <TextTitle>{`${response}!`}</TextTitle>}</Contain>
    </Layout>
  );
};

export default VerifyCode;
