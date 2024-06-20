export type User = {
  id: number;
  userName: string;
  email: string;
  password: string;
  avatar: string;
};

export type Comment = {
  id: number;
  commentText: string;
  userId: number;
  teaId: number;
};

export type TeaCard = {
  id: number;
  teaName: string;
  teaLocation: string;
  teaDescription: string;
  teaType: string;
  teaImg: string;
  teaRegion: string;
  userId: number;
  Comments: Comment[];
};
