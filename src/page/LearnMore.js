import styled from "styled-components";
import React from "react";
import Box from "@mui/material/Box";
import Page from "../assets/pageTest.png";
import { Layout } from "../components/Layout";
const Contain = styled(Box)({
  width: "100%",
  height: "100%",
  overflow: "auto",
  "::-webkit-scrollbar": {
    display: "none",
  },
});

const ContainImage = styled(Box)({
  width: "100%",
  backgroundRepeat: "no-repeat",
  backgroundSize: "contain",
});

const LearnMore = () => {
  return (
    <Layout notFooter={true}>
      <Contain>
        <ContainImage component="img" src={Page} />
      </Contain>
    </Layout>
  );
};

export default LearnMore;
