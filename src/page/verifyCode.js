import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";
import { Layout } from "../components/Layout";
import Box from "@mui/material/Box";
import useUser from "../request/user";

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
  const user = useUser();

  useEffect(() => {
    const verify = async () => {
      const email = searchParams.get("email");
      const code = searchParams.get("code");
      const result = await user.onVerifyCode({ email, code });
      setResponse(result);
    };

    verify();
  }, []);

  return (
    <Layout>
      <Contain>{response && <TextTitle>{`${response}!`}</TextTitle>}</Contain>
    </Layout>
  );
};

export default VerifyCode;
