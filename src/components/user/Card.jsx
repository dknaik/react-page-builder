// components/user/Card.js
import React  from "react";
import Text from "./Test";
import Button from "./Button";
import Container from "./Container";

 const Card = ({background, padding = 20}) => {
  return (
    <Container background={background} padding={padding}>
    <Element id="text" canvas> // Canvas Node of type div
      <Text text="Title" fontSize={20} />
      <Text text="Subtitle" fontSize={15} />
    </Element>
    <Element id="buttons" canvas> // Canvas Node of type div
      <Button size="small" text="Learn more" />
    </Element>
  </Container>
  )
}

export default Card
