export type QuizQuestionType = {
  _id: {
    $oid: string;
  };
  quizId: {
    $oid: string;
  };
  type: string;
  text: string;
  answers: string[];
  correctAnswer: number;
  points: number;
  explanation: string;
  __v: number;
  createdAt: {
    $date: string;
  };
  updatedAt: {
    $date: string;
  };
};
