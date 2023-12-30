"use client";
import React, { useState } from "react";
import { FormContainer } from "./components/formContainer";

const QuizCreatePage = () => {
  const [quizDetails, setQuizDetails] = useState({
    title: "",
    topic: "",
    tags: [],
    coverImage: "",
    description: "",
    duration: 0,
    isPublished: false,
  });

  return (
    <div className="container mx-auto mt-8 px-4">
      <h1 className="text-2xl font-bold mb-8">Create a New Quiz</h1>
      <FormContainer />
    </div>
  );
};

export default QuizCreatePage;
