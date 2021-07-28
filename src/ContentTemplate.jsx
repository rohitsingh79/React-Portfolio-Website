import React from "react";
import Accordian from "./AccordianContainer";
import Accordianchild1 from "./Accordianchild1";

const ContentTemplate = () => {
  let childNode = [];

  let parseNode = <Accordianchild1 />;
  childNode.push(parseNode);

  return (
    <div index={1}>
      <Accordian>{childNode}</Accordian>
    </div>
  );
};

export default ContentTemplate;
