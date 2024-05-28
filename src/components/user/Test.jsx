// components/user/Text.js
import React from "react";
import { Typography } from "@material-ui/core";
import { useNode } from "@craftjs/core";

 const Text = ({text}) => {
  const { connectors: {connect, drag} } = useNode();
  return (
     <div 
      ref={ref => connect(drag(ref))}
    >
      <p>{text }+1</p>
    </div>
  )
}
export default Text