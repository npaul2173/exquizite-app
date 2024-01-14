export interface QuizType {
  _id: {
    $oid: string;
  };
  title: string;
  topic: string;
  tags: string[];
  coverImage: string;
  description: string;
  duration: number;
  isPublished: boolean;
  createdBy?: {
    $oid: string;
  };
  createdAt: {
    $date: string;
  };
  updatedAt: {
    $date: string;
  };
  __v: number;
}
