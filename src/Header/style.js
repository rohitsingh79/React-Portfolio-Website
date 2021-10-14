import styled from "styled-components";

const HeaderSection = styled.div`
  transform: translate(320px);
  height: 600px;
  width: 100%;
  background: inherit;
  margin: 20px auto;
  background: green;
  position: relative;
`;
const DescriptionContainer = styled.div`
  opacity: 0;
  transform: translate(300px);
  width: 1320px;
  height: 232px;
  text-align: left;
  padding: 80px 0 80px;
  margin-top: 250px;
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

export { HeaderSection, DescriptionContainer, CutOutDiv, DownloadButton };
