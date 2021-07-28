import React from "react";
import { itemsListNested, itemListProp } from "./sampleData";
import Accordian from "./AccordianContainer";
import Accordianchild1 from "./Accordianchild1";
import flattenDeep from "lodash/flattenDeep";
import ContentTemplate from "./ContentTemplate";

export default function App() {
  const items1 = itemsListNested;
  const items2 = itemListProp;

  const [[singleChild]] = items1[0].child;
  const [[doubleChild]] = items2[0].child;
  console.log(`1st use case ${singleChild}`);
  const actualChildren = flattenDeep(singleChild["child"]);
  console.log(actualChildren);
  //console.log(doubleChild);

  // const [[doubleChild1]] = singleChild["child"];
  // const [[doubleChild2]] = doubleChild["child"];

  return (
    <div className="App">
      Iam just testing stuff
      <ContentTemplate />
    </div>
  );
}
