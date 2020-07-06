import React from "react";
import ServerButton from "../ServerButton";
import { Container, Separator } from "./styles";
import { serverData } from "../../mock/mock-data";

const ServerList: React.FC = () => {
  return (
    <Container>
      <ServerButton isHome />
      <Separator />
      {serverData.map((server_data, index) => (
        <ServerButton key={index} {...server_data} />
      ))}
    </Container>
  );
};

export default ServerList;
