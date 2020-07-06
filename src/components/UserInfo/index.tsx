import React from "react";
import {
  Container,
  Profile,
  Avatar,
  UserData,
  Icons,
  MicIcon,
  HeadphoneIcon,
  SettingsIcon,
} from "./styles";
import { doriClaudinoUser } from "../../mock/mock-data";

const UserInfo: React.FC = () => {
  return (
    <Container>
      <Profile>
        <Avatar avatarImg={doriClaudinoUser.avatarImg}/>
        <UserData>
          <strong>{doriClaudinoUser.name}</strong>
          <span>#0018</span>
        </UserData>
      </Profile>

      <Icons>
        <MicIcon />
        <HeadphoneIcon />
        <SettingsIcon />
      </Icons>
    </Container>
  );
};

export default UserInfo;
