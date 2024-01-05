import React, { useState } from "react";
import { FormContainer } from "./components/formContainer";

const QuizCreatePage = () => {
  return (
    <div className="container mx-auto mt-8 px-4">
      <h1 className="text-2xl font-bold mb-8">Create a New Quiz</h1>
      <FormContainer />
    </div>
  );
};

export default QuizCreatePage;
