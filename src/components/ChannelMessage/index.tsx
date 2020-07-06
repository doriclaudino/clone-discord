import React from "react";
import { Container, Avatar, Message, Header, Content } from "./styles";
export { Mention } from "./styles";

export interface Props {
  author: string;
  date: string;
  authorImg?:string;
  content?: string | React.ReactElement | React.ReactNode;
  hasMention?: boolean;
  isBot?: boolean;
}

//we can pass the author object instead of split props

const ChannelMessage: React.FC<Props> = ({
  author,
  authorImg,
  date,
  content,
  hasMention,
  isBot,
}) => {
  return (
    <Container className={hasMention ? "mention" : ""}>
      <Avatar avatarImg={authorImg} className={isBot ? "bot" : ""} />
      <Message>
        <Header>
          <strong>{author}</strong>
          {isBot && <span>Bot</span>}
          <time>{date}</time>
        </Header>
        <Content>{content}</Content>
      </Message>
    </Container>
  );
};

export default ChannelMessage;
