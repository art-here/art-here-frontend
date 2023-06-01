export type TComment = {
  id: number;
  content: string;
  createDate: Date;
  revisionDate: Date;
  sameWriter: boolean;
  writer: {
    id: number;
    name: string;
    profile: string;
  };
};

export type TComments = TComment[];

export type TCommentsResponse = {
  hasNext: boolean;
  commentResponses: TComments;
};
