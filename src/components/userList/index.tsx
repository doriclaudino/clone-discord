import React from "react";
import { Container, Role, User, Avatar } from "./styles";
import { usersData } from "../../mock/mock-data";

interface UserProps {
  nickname: string;
  avatarImg?: string;
  isBot?: boolean;
}

const UserRow: React.FC<UserProps> = ({ nickname, avatarImg, isBot }) => {
  return (
    <User>
      <Avatar avatarImg={avatarImg} className={isBot ? "bot" : ""} />
      <strong>{nickname}</strong>
      {isBot && <span>Bot</span>}
    </User>
  );
};

const onlineUsers = usersData.filter((user) => user.online);
const offlineUsers = usersData.filter((user) => !user.online);
const totalOnline = onlineUsers.length;
const totalOffline = offlineUsers.length;

console.log({ onlineUsers, offlineUsers });

const UserList: React.FC = () => {
  return (
    <Container>
      <Role>Disponível - {totalOnline}</Role>
      {onlineUsers.map((onlineUser, index) => (
        <UserRow
          nickname={onlineUser.name}
          isBot={!onlineUser.isUser}
          avatarImg={onlineUser.avatarImg}
          key={index}
        />
      ))}

      <Role>Offline - {totalOffline}</Role>
      {offlineUsers.map((offlineUser, index) => (
        <UserRow
          nickname={offlineUser.name}
          isBot={!offlineUser.isUser}
          avatarImg={offlineUser.avatarImg}
          key={index}
        />
      ))}
    </Container>
  );
};

export default UserList;
