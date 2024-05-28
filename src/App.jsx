// pages/index.js

import React from "react";
import { Typography, Paper, Grid } from "@material-ui/core";
import { Topbar } from "./components/Topbar";
import Toolbox from "./components/Toolbox";
import SettingsPanel from "./components/SettingsPanel";
import Container from "./components/user/Container";
import Card from "./components/user/Card";

import Button from "./components/user/Button";
import Text from "./components/user/Test";
import { Editor, Frame, Element } from "@craftjs/core";

export default function App() {
  return (
    <div style={{ margin: "0 auto", width: "800px" }}>
      <Typography variant="h5" align="center">
        A super simple page editor
      </Typography>
      <Editor resolver={{ Card, Button, Text, Container,Element }}>
        <Grid container spacing={3} style={{ paddingTop: "10px" }}>
          <Topbar />
          <Grid item xs>
            <Frame>
              <Element is={Container} padding={5} background="#eee" canvas>
                {/* <Container padding={5} background="#eee"> */}
                <Card />
                <Button size="small" variant="outlined">
                  Click
                </Button>
                <Text size="small" text="Hi world!" />
                {/* <Container padding={6} background="#999"> */}
                <Element is={Container} padding={2} background="#999" canvas>
                  {" "}
                  {/* // Canvas Node of type Container, droppable and draggable */}
                  <Text size="small" text="It's me again!" />
                </Element>
                {/* </Container> */}
                {/* </Container> */}
              </Element>
            </Frame>
          </Grid>
          <Grid item xs={3}>
            <Paper>
              <Toolbox />
              <SettingsPanel />
            </Paper>
          </Grid>
        </Grid>
      </Editor>
    </div>
  );
}
