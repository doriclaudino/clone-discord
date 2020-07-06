import * as faker from "faker";
import { fake } from "faker";

interface serverMockData {
  hasNotifications?: boolean;
  mentions?: number;
  imageUrl?: string;
}

export const serverData = [
  { mentions: 13, imageUrl: "https://picsum.photos/id/1048/200" },
  { imageUrl: "https://picsum.photos/id/1029/200" },
  { imageUrl: "https://picsum.photos/id/1026/200" },
  {
    hasNotifications: true,
    mentions: 3,
    imageUrl: "https://picsum.photos/id/1011/200",
  },
  { imageUrl: "https://picsum.photos/id/1023/200" },
  { imageUrl: "https://picsum.photos/id/1/200" },
  {
    hasNotifications: true,
    mentions: 78,
    imageUrl: "https://picsum.photos/id/101/200",
  },
  { hasNotifications: true, imageUrl: "https://picsum.photos/id/237/200" },
];

interface userMockData {
  name: string;
  online?: boolean;
  isUser?: boolean; //or bot
  avatarImg?: string;
}

/**
 * my user data
 */
export const doriClaudinoUser = {
  name: "doriclaudino",
  online: true,
  isUser: true,
  avatarImg:
    "https://media-exp1.licdn.com/dms/image/C4E03AQEhW7P9bQ_YSA/profile-displayphoto-shrink_200_200/0?e=1599696000&v=beta&t=B70hapYqOFsQ7tuXkkKyL60S5udj-bMzKcIwy_iI2aY",
};

/**
 * my bot user data
 */
export const doriClaudinoBot = {
  name: "doriclaudinoBot",
  online: true,
  isUser: false,
  avatarImg: "https://robohash.org/doriclaudinoBot",
};

export const usersData: userMockData[] = [doriClaudinoUser, doriClaudinoBot];

/**
 * random data generated
 */
for (let index = 0; index < 10; index++) {
  usersData.push({
    name: faker.name.firstName(),
    online: false,
    isUser: true,
    avatarImg: faker.image.avatar(),
  });
}

interface channelMessageMockData {
  author: string;
  date: Date;
  authorImg?: string;
  content?: string | React.Component;
  hasMention?: boolean;
  isBot?: boolean;
}

const getRandomInt = (min: number = 0, max: number = 10) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const mockChatMessages: channelMessageMockData[] = [];
for (let index = 0; index < 6; index++) {
  let randomUser = usersData[getRandomInt(0, usersData.length)];
  mockChatMessages.push({
    author: randomUser.name,
    authorImg: randomUser.avatarImg,
    date: faker.date.recent(30),
    hasMention: false,
    isBot: !randomUser.isUser,
    content: faker.lorem.sentence(),
  });
}
