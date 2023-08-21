import React from "react";
import { Image, Text } from "react-native";
import { IMAGEHOME } from "../../../assets";
import { Container } from "./styles";

const Home: React.FC = () => {
  return (
    <Container>
      <Text>teste 123</Text>
      <Image source={IMAGEHOME} style={{ width: 200, height: 200 }} />
    </Container>
  );
};

export default Home;
