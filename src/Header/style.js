import styled from "styled-components";

const HeaderSection = styled.div`
  height: 600px;
  width: 100%;
  background: inherit;
  position: relative;
  margin-bottom: 250px;

  @media only screen and (max-width: 600px) {
    width: 100%;
    height: 400px;
  }
`;
const DescriptionContainer = styled.div`
  opacity: 0;
  width: 1320px;
  height: 232px;
  text-align: left;
  padding: 80px 0 80px;
  transform: translate(-20px);
  @media only screen and (max-width: 600px) {
    width: 100%;
    word-wrap: break-word;
    height: auto;
  }
`;
const CutOutDiv = styled.div`
  height: 300px;
  width: 50%;
  background: white;
  margin: 20px auto;
  position: absolute;
  top: 62%;
  left: 25%;
  @media only screen and (max-width: 600px) {
    width: 70%;
    left: 15%;
  }
`;

const DownloadButton = styled.button`
  border: none;
  border-radius: 4px;
  background: DodgerBlue;
  padding: 12px 20px;
  cursor: pointer;
  color: white;
  font-size: 20px;
  position: relative;
  top: 50%;
`;

const SocialMediaWrapper = styled.div`
  height: 15px;
  width: 150px;
  position: relative;
  left: 40%;
  top: 40%;
  display: grid;
  /* background: black; */
  grid-template-columns: 30px 30px 30px 30px 30px;
  @media only screen and (max-width: 600px) {
    left: 25%;
  }
`;

const ImageWrapper = styled.img`
  height: 150px;
  width: 150px;
  border-radius: 50%;
  position: absolute;
  top: -25%;
  left: 40%;
  @media only screen and (max-width: 600px) {
    left: 25%;
  }
`;

const DetailsWrapper = styled.div`
  height: auto;
  width: auto;
  background: yellow;
  position: relative;
  top: 28%;
  left: 28%;
`;

export {
  HeaderSection,
  DescriptionContainer,
  CutOutDiv,
  DownloadButton,
  SocialMediaWrapper,
  ImageWrapper,
  DetailsWrapper
};
