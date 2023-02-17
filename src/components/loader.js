import styled from "styled-components";

const LoaderDiv = styled.div(`
    width: 20vw;
    height: 20vh;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;
`);

const LoaderSvg = styled.svg(
  () => `
    animation: spin 0.5s linear infinite;
    margin: auto;
`
);

const LoaderPath = styled.path({});

const Loader = ({ isVisible, width = "3em", height = "3em" }) => {
  return (
    isVisible && (
      <LoaderDiv>
        <LoaderSvg viewBox="0 0 100 100" width={width} height={height}>
          <LoaderPath
            ng-attr-d="{{config.pathCmd}}"
            ng-attr-fill="{{config.color}}"
            stroke="none"
            d="M10 50A40 40 0 0 0 90 50A40 42 0 0 1 10 50"
            fill="#51CACC"
            transform="rotate(179.719 50 51)"
          >
            <animateTransform
              attributeName="transform"
              type="rotate"
              calcMode="linear"
              values="0 50 51;360 50 51"
              keyTimes="0;1"
              dur="1s"
              begin="0s"
              repeatCount="indefinite"
            ></animateTransform>
          </LoaderPath>
        </LoaderSvg>
      </LoaderDiv>
    )
  );
};

export default Loader;
