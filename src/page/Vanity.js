import React, { useRef } from "react";
import { Layout } from "../components/Layout";
import styled from "styled-components";
import { Box, IconButton } from "@mui/material";
import VanityImage1 from "../assets/vanityImage1.png";
import BarImage from "../assets/BARRA_3.png";
import DamageTaken from "../assets/damage_taken.png";
import DefeatedBosses from "../assets/defeated_bosses.png";
import MaxLvl from "../assets/max_lvl.png";
import TotalLvl from "../assets/total_lvl.png";
import MainSlider from "../assets/MAIN_PICTURE_V1.png";
import Grid from "../assets/GRID.png";
import { Swiper, SwiperSlide } from "swiper/react";
import arrowLeft from "../assets/arrowLeft.png";
import arrowRight from "../assets/arrowRight.png";
// Import Swiper styles
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/effect-coverflow";

// import required modules
import { Autoplay, Navigation, EffectCoverflow } from "swiper";

const Contain = styled(Box)({
  width: "100%",
  height: "100%",
});
const ContainTwo = styled(Box)({
  background: "#0C0117",
  width: "100%",
  height: "100%",
});
const Row = styled("div")`
  width: 100%;
  display: flex;
  flex-direction: row;
  @media (max-width: 1024px) {
    margin-left: 4rem;
  }
  @media (min-width: 1440px) {
    margin-left: 10rem;
  }
`;

const RowOptions = styled("div")`
  width: 100%;
  display: flex;
  flex-direction: row;
  position: relative;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 1rem;
  padding-right: 3rem;
`;

const TextTitle = styled("p")`
  color: #ffffff;
  font-family: "Genesis";
  font-size: 13px;
  font-weight: 400;
  text-align: center;
  margin: 0;
`;

const TextButton = styled("p")`
  color: #ffffff;
  font-family: "Genesis";
  font-size: 13px;
  font-weight: 400;
  text-align: center;
  margin: 0;
`;

const ImageOptions = styled(Box)`
  @media (max-width: 1024px) {
    width: 80%;
  }
  @media (min-width: 1440px) {
    width: 75%;
  }
  height: 81px;
  position: absolute;
`;

const TextOptions = styled("p")(
  ({ size, fontWeight, color, opacity }) => `
    color: ${color};
    font-family: "Montserrat-Regular";
    font-size: ${size};
    font-weight: ${fontWeight};
    text-align: left;
    margin:0;
    opacity: ${opacity};
  `
);
const ContainerSlider = styled("div")`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-top: 1.5rem;
`;

const VanityImageBarNeon = styled(Box)`
  width: 149px;
  height: 48px;
  position: relative;
  bottom: 5px;
`;
const Vanity = ({}) => {
  const swiperRef = useRef();
  const swiperTwoRef = useRef();
  return (
    <Layout notFooter={true}>
      <Contain component="div">
        <Row>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <TextTitle>Overall Stats</TextTitle>
            <VanityImageBarNeon component="img" src={VanityImage1} />
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <TextTitle>Player Name</TextTitle>
            <VanityImageBarNeon component="img" src={VanityImage1} />
          </div>
        </Row>
        <RowOptions>
          <ImageOptions component="img" src={BarImage} />
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              marginLeft: "2rem",
            }}
          >
            <Box
              component="img"
              src={TotalLvl}
              style={{ width: 48, height: 47 }}
            />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <TextOptions
                size={"12px"}
                fontWeight={700}
                color={"#FFFFFF"}
                opacity={0.7}
              >
                Total Kills
              </TextOptions>
              <TextOptions
                size={"15px"}
                fontWeight={500}
                color={"#FFFFFF"}
                opacity={1}
              >
                6400
              </TextOptions>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Box
              component="img"
              src={MaxLvl}
              style={{ width: 48, height: 47 }}
            />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <TextOptions
                size={"12px"}
                fontWeight={700}
                color={"#FFFFFF"}
                opacity={0.7}
              >
                Max Lvl
              </TextOptions>
              <TextOptions
                size={"15px"}
                fontWeight={500}
                color={"#FFFFFF"}
                opacity={1}
              >
                6400
              </TextOptions>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Box
              component="img"
              src={DefeatedBosses}
              style={{ width: 48, height: 47 }}
            />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <TextOptions
                size={"12px"}
                fontWeight={700}
                color={"#FFFFFF"}
                opacity={0.7}
              >
                Defeated Bosses
              </TextOptions>
              <TextOptions
                size={"15px"}
                fontWeight={500}
                color={"#FFFFFF"}
                opacity={1}
              >
                6400
              </TextOptions>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              marginRight: "3rem",
            }}
          >
            <Box
              component="img"
              src={DamageTaken}
              style={{ width: 48, height: 47 }}
            />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <TextOptions
                size={"12px"}
                fontWeight={700}
                color={"#FFFFFF"}
                opacity={0.7}
              >
                Damage Taken
              </TextOptions>
              <TextOptions
                size={"15px"}
                fontWeight={500}
                color={"#FFFFFF"}
                opacity={1}
              >
                6400
              </TextOptions>
            </div>
          </div>
        </RowOptions>
        <ContainerSlider>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "50%",
              boxShadow: "14px #fff",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <IconButton
                color="transparent"
                onClick={() => swiperRef.current?.slidePrev()}
              >
                <Box component="img" src={arrowLeft} />
              </IconButton>
              <TextButton>Trophies</TextButton>
              <IconButton
                color="transparent"
                onClick={() => swiperRef.current?.slideNext()}
              >
                <Box component="img" src={arrowRight} />
              </IconButton>
            </div>
            <Swiper
              style={{ width: "50%" }}
              className="testSlide"
              initialSlide={1}
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={"auto"}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 2,
                slideShadows: true,
              }}
              onBeforeInit={(swiper) => {
                swiperRef.current = swiper;
              }}
              modules={[Autoplay, Navigation, EffectCoverflow]}
            >
              <SwiperSlide key={1} className="testSlide">
                <Box
                  component="img"
                  alt="The house from the offer."
                  src={MainSlider}
                />
              </SwiperSlide>
              <SwiperSlide key={2} className="testSlide">
                <Box
                  component="img"
                  alt="The house from the offer."
                  src={MainSlider}
                />
              </SwiperSlide>
              <SwiperSlide key={3} className="testSlide">
                <Box
                  component="img"
                  alt="The house from the offer."
                  src={MainSlider}
                />
              </SwiperSlide>
            </Swiper>
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
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <IconButton color="transparent">
                <Box
                  component="img"
                  src={arrowLeft}
                  onClick={() => swiperTwoRef.current?.slidePrev()}
                />
              </IconButton>
              <TextButton>Favorite Cards</TextButton>
              <IconButton color="transparent">
                <Box
                  component="img"
                  src={arrowRight}
                  onClick={() => swiperTwoRef.current?.slideNext()}
                />
              </IconButton>
            </div>
            <Swiper
              style={{ width: "50%" }}
              className="testSlide"
              initialSlide={1}
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={"auto"}
              onBeforeInit={(swiper) => {
                swiperTwoRef.current = swiper;
              }}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 2,
                slideShadows: true,
              }}
              navigation={false}
              modules={[Autoplay, Navigation, EffectCoverflow]}
            >
              <SwiperSlide key={1} className="testSlide">
                <Box
                  component="img"
                  alt="The house from the offer."
                  src={MainSlider}
                />
              </SwiperSlide>
              <SwiperSlide key={2} className="testSlide">
                <Box
                  component="img"
                  alt="The house from the offer."
                  src={MainSlider}
                />
              </SwiperSlide>
              <SwiperSlide key={3} className="testSlide">
                <Box
                  component="img"
                  alt="The house from the offer."
                  src={MainSlider}
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </ContainerSlider>
      </Contain>
      <ContainTwo component="div">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "2rem",
            paddingBottom: "2rem",
          }}
        >
          <IconButton color="transparent">
            <Box component="img" src={arrowLeft} />
          </IconButton>
          <TextButton>Map Setup</TextButton>
          <IconButton color="transparent">
            <Box component="img" src={arrowRight} />
          </IconButton>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Box component="img" src={Grid} />
        </div>
      </ContainTwo>
    </Layout>
  );
};

export default Vanity;
