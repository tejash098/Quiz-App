import React, { useState } from "react";
import Menu from "./Menu";
import "./QuizApp.css";
import { QuizData } from "./QuizData";
import Quiz from "./Quiz";
import End from "./End";

const QuizApp = () => {
  let [mode, setMode] = useState("menu"); // "menu", "quiz", "end"
  let [score, setScore] = useState(0)
  return (
    <>
      <div className="App">
        <h1>Quiz App</h1>
        {mode === "menu" && <Menu setMode={setMode} />}
        {mode === "quiz" && <Quiz setMode={setMode} setScore={setScore} score={score}/>}
        {mode === 'end' && <End setMode={setMode} setScore={setScore} score={score} totalQuestions={QuizData.length}/>}
      </div>
    </>
  );
};

export default QuizApp;
