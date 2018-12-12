import React from "react";
import { BoxTitle, BoxSubTitle } from "./boxTitle.style";

export default props => {
  return (
    <div>
      {props.title ? (
        <BoxTitle className="dlBoxTitle"> {props.title} </BoxTitle>
      ) : (
        ""
      )}
      {props.subtitle ? (
        <BoxSubTitle className="dlBoxSubTitle"> {props.subtitle} </BoxSubTitle>
      ) : (
        ""
      )}
    </div>
  );
};
