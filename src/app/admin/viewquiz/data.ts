import { QuizQuestionType } from "./types";

export const quizQuestion: QuizQuestionType[] = [
  {
    _id: {
      $oid: "6571fa798a84135cea498c7a",
    },
    quizId: {
      $oid: "6571fa798a84135cea498c78",
    },
    type: "multiple_choice",
    text: "What does CSS stand for?",
    answers: [
      "Cascading Style Sheet",
      "Computer Style Sheet",
      "Creative Style Sheet",
      "Colorful Style Sheet",
    ],
    correctAnswer: 0,
    points: 10,
    explanation:
      "CSS stands for Cascading Style Sheet and is used for styling web documents.",
    __v: 0,
    createdAt: {
      $date: "2023-12-07T17:01:45.940Z",
    },
    updatedAt: {
      $date: "2023-12-07T17:01:45.940Z",
    },
  },
  {
    _id: {
      $oid: "6571fa798a84135cea498c7b",
    },
    quizId: {
      $oid: "6571fa798a84135cea498c78",
    },
    type: "multiple_choice",
    text: "Which property is used to change the text color of an element in CSS?",
    answers: ["color", "text-color", "font-color", "text-style"],
    correctAnswer: 0,
    points: 10,
    explanation:
      "The 'color' property in CSS is used to change the text color of an element.",
    __v: 0,
    createdAt: {
      $date: "2023-12-07T17:01:45.940Z",
    },
    updatedAt: {
      $date: "2023-12-07T17:01:45.940Z",
    },
  },
  {
    _id: {
      $oid: "6571fa798a84135cea498c7c",
    },
    quizId: {
      $oid: "6571fa798a84135cea498c78",
    },
    type: "multiple_choice",
    text: "What does the 'box-sizing' property in CSS control?",
    answers: [
      "Element's border-box",
      "Element's content-box",
      "Element's padding-box",
      "Element's margin-box",
    ],
    correctAnswer: 0,
    points: 8,
    explanation:
      "The 'box-sizing' property in CSS controls the sizing model for the box.",
    __v: 0,
    createdAt: {
      $date: "2023-12-07T17:01:45.940Z",
    },
    updatedAt: {
      $date: "2023-12-07T17:01:45.940Z",
    },
  },
  {
    _id: {
      $oid: "6571fa798a84135cea498c7d",
    },
    quizId: {
      $oid: "6571fa798a84135cea498c78",
    },
    type: "multiple_choice",
    text: "In CSS, which property is used to create a flexible container and enable a flex context for its direct children?",
    answers: [
      "display: inline-block",
      "flex-direction",
      "justify-content",
      "display: flex",
    ],
    correctAnswer: 3,
    points: 12,
    explanation:
      "The 'display: flex' property is used to create a flexible container with flex properties for its direct children in CSS.",
    __v: 0,
    createdAt: {
      $date: "2023-12-07T17:01:45.940Z",
    },
    updatedAt: {
      $date: "2023-12-07T17:01:45.940Z",
    },
  },
  {
    _id: {
      $oid: "6571fa798a84135cea498c7e",
    },
    quizId: {
      $oid: "6571fa798a84135cea498c78",
    },
    type: "multiple_choice",
    text: "Which CSS property is used to align items along the cross-axis in a flex container?",
    answers: ["align-items", "justify-content", "flex-align", "cross-align"],
    correctAnswer: 0,
    points: 8,
    explanation:
      "The 'align-items' property in CSS is used to align flex items along the cross-axis of the flex container.",
    __v: 0,
    createdAt: {
      $date: "2023-12-07T17:01:45.941Z",
    },
    updatedAt: {
      $date: "2023-12-07T17:01:45.941Z",
    },
  },
  {
    _id: {
      $oid: "6571fa798a84135cea498c7f",
    },
    quizId: {
      $oid: "6571fa798a84135cea498c78",
    },
    type: "multiple_choice",
    text: "Which CSS property is used to control the space between the cells of a table?",
    answers: ["padding", "border-spacing", "margin", "cell-spacing"],
    correctAnswer: 1,
    points: 10,
    explanation:
      "The 'border-spacing' property in CSS is used to control the space between the cells of a table.",
    __v: 0,
    createdAt: {
      $date: "2023-12-07T17:01:45.941Z",
    },
    updatedAt: {
      $date: "2023-12-07T17:01:45.941Z",
    },
  },
  {
    _id: {
      $oid: "6571fa798a84135cea498c80",
    },
    quizId: {
      $oid: "6571fa798a84135cea498c78",
    },
    type: "multiple_choice",
    text: "Which CSS pseudo-class is used to select an element when it is being hovered over?",
    answers: [":hover", ":active", ":visited", ":focus"],
    correctAnswer: 0,
    points: 9,
    explanation:
      "The ':hover' pseudo-class in CSS is used to select an element when it is being hovered over by the mouse.",
    __v: 0,
    createdAt: {
      $date: "2023-12-07T17:01:45.941Z",
    },
    updatedAt: {
      $date: "2023-12-07T17:01:45.941Z",
    },
  },
];
