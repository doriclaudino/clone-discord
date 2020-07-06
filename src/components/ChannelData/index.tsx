import React, { useRef, useEffect } from "react";
import ChannelMessage, { Mention } from "../ChannelMessage";
import { Container, Messages, InputWrapper, Input, InputIcon } from "./styles";
import { mockChatMessages, doriClaudinoBot, doriClaudinoUser } from "../../mock/mock-data";

const ChannelData: React.FC = () => {
  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const div = messagesRef.current;

    if (div) {
      div.scrollTop = div.scrollHeight;
    }
  }, [messagesRef]);

  return (
    <Container>
      <Messages ref={messagesRef}>
        {mockChatMessages.map((chatData, index) => (
          <ChannelMessage
            {...chatData}
            key={index}
            date={chatData.date.toLocaleString()}
          />
        ))}
        <ChannelMessage
          authorImg={doriClaudinoBot.avatarImg}
          author={doriClaudinoBot.name}
          date={new Date().toLocaleString()}
          content={
            <>
              <Mention>@{doriClaudinoUser.name}</Mention> ta online?
            </>
          }
          hasMention
          isBot
        />
      </Messages>

      <InputWrapper>
        <Input type="text" placeholder="Conversarem #chat-livre" />
        <InputIcon />
      </InputWrapper>
    </Container>
  );
};

export default ChannelData;
