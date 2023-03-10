import React from "react";
// import { Altura } from "@altura/altura-js";
import { Layout } from "../components/Layout";
import PrincipalScreen from "../components/PrincipalScreen";
import SecundaryScreen from "../components/SecundaryScreen";
import TertiaryScreen from "../components/TertiaryScreen";
import styled from "styled-components";
import QuartenaryScreen from "../components/QuarternaryScreen";
const Divider = styled("div")({
  width: "100%",
  background: "#090013",
  height: 8,
});
const Login = () => {
  // const handleClickNew = async () => {
  //   const newVar = new Altura("D6RSE4R-9T6MJ8H-K1HN3PQ-5ZHRFYT");
  //   const alturaUser = await newVar.getUser(
  //     "0xcdec817e160fea97438e7d777ca48b8f41a4cd02"
  //   );
  //   console.log("hola");
  //   try {
  //     console.log(alturaUser);
  //   } catch (e) {
  //     console.log(e.message);
  //   }
  // };
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Layout>
        <PrincipalScreen />
        <SecundaryScreen />
        <Divider />
        <TertiaryScreen />
        <QuartenaryScreen />
      </Layout>
    </div>
  );
};

export default Login;
