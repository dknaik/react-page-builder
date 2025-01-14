// components/user/Container.js
import React from "react";
import { Paper } from "@material-ui/core";
import { useNode } from "@craftjs/core";

const Container = ({ background, padding = 0, children }) => {
  const {
    connectors: { connect, drag },
  } = useNode();

  return (
    <Paper
      ref={(ref) => connect(drag(ref))}
      style={{ margin: "5px 0", background, padding: `${padding}px` }}
    >
      {children}
    </Paper>
  );
};

export default Container;
