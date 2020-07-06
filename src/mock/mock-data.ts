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
