import React from "react";
import { Altura } from "@altura/altura-js";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Layout } from "../components/Layout";
const Login = () => {
  const handleClickNew = async () => {
    const newVar = new Altura("D6RSE4R-9T6MJ8H-K1HN3PQ-5ZHRFYT");
    const alturaUser = await newVar.getUser(
      "0xcdec817e160fea97438e7d777ca48b8f41a4cd02"
    );
    console.log("hola");
    try {
      console.log(alturaUser);
    } catch (e) {
      console.log(e.message);
    }
  };
  return (
    <>
      <div onClick={() => handleClickNew()}></div>
      <Layout>
        {/* <div style={{color:'white'}}>
        </div> */}
        </Layout>
    </>
  );
};

export default Login;
