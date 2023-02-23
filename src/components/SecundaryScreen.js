import React from "react";
import Box from "@mui/material/Box";
import styled from "styled-components";
import { makeStyles } from "@mui/styles";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/scss";
import "swiper/scss/effect-cards";
import "swiper/scss/navigation";

// import required modules
import { EffectCards, Autoplay, Navigation } from "swiper";

const useStyles = makeStyles({
  screenBackground: {
    background: "#090013",
    width: "100%",
    height: "90%",
  },
});
const Contain = styled("div")({
  width: "auto",
  height: "100%",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  marginLeft: 70,
});
const Text = styled("p")({
  width: 512,
  flex: 1,
  color: "#FFFFFF",
  textAlign: "center",
  fontFamily: "Genesis",
  fontSize: 15,
  fontWeight: 500,
  marginTop: 10,
});
const SecundaryScreen = ({}) => {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.screenBackground}>
      <Contain>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "50%",
          }}
        >
          <Box
            component="img"
            style={{
              width: 213,
              height: 79,
            }}
            alt="The house from the offer."
            src="./image/LOGO_1_.svg"
          />
          <Text>
            Operation Safe Place Tower Defense is a charity gaming platform that
            integrates aspects of Tower Defense, MOBA, and MMO gaming into one
            huge bi - dimensional world. The primary traits and gaming
            components will be linked directly to NFTs(Digital Art) tradable on
            the Altura Marketplace. The game will be available in both 2 D top -
            down view / experience and 3 D First Person Shooter version.The
            traits will remain the same in both versions, so if users want to
            play the game on their mobile phone on the web they can, as well as
            play it on a high - tech pc to play the 3 D version.{" "}
          </Text>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "50%",
            boxShadow: "14px #fff",
          }}
        >
          <Swiper
            effect={"cards"}
            style={{ width: "50%" }}
            grabCursor={true}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
            navigation={false}
            modules={[EffectCards, Autoplay, Navigation]}
          >
            <SwiperSlide key={1}>
              <Box
                component="img"
                alt="The house from the offer."
                src="./image/slider1.png"
              />
            </SwiperSlide>
            <SwiperSlide key={2}>
              <Box
                component="img"
                alt="The house from the offer."
                src="./image/slider2.png"
              />
            </SwiperSlide>
            <SwiperSlide key={3}>
              <Box
                component="img"
                alt="The house from the offer."
                src="./image/slider3.png"
              />
            </SwiperSlide>
            <SwiperSlide key={4}>
              <Box
                component="img"
                alt="The house from the offer."
                src="./image/slider4.png"
              />
            </SwiperSlide>
            <SwiperSlide key={5}>
              <Box
                component="img"
                alt="The house from the offer."
                src="./image/slider5.png"
              />
            </SwiperSlide>
            <SwiperSlide key={6}>
              <Box
                component="img"
                alt="The house from the offer."
                src="./image/slider6.png"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </Contain>
    </Box>
  );
};

export default SecundaryScreen;
