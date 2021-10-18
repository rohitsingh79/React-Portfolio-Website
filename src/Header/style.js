import styled from "styled-components";

const HeaderSection = styled.div`
  height: 600px;
  width: 100%;
  background: inherit;
  margin: 20px auto;
  position: relative;
  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`;
const DescriptionContainer = styled.div`
  opacity: 0;
  width: 1320px;
  height: 232px;
  text-align: left;
  padding: 80px 0 80px;
  margin-top: 250px;
  transform: translate(-20px);
  @media only screen and (max-width: 600px) {
    width: 100%;
    word-wrap: break-word;
    height: 300px;
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
  top: 38%;
  display: grid;
  grid-template-columns: 30px 30px 30px 30px 30px;
`;

export {
  HeaderSection,
  DescriptionContainer,
  CutOutDiv,
  DownloadButton,
  SocialMediaWrapper
};
