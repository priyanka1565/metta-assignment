import Option from "./Option";
import { useState } from "react";

const QuestionCard = ({ question, options, ans, setScore }) => {
  const [showQuestion, setQuestions] = useState(false);


  const handleClick = (ele) => {
    setQuestions(!showQuestion);
    if (ele === ans) {
      setScore((s) => s + 1);
    }
  };


  return (
    <div className="question-card">
      {/* add question here */}
      <h3>{question}</h3>
      <div
        className="options"
        style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}
      >
        {options.map((el) => (
          <Option
            style={{
              margin: "12px",
              padding: "12px"
            }}
            el={el}
            ans={ans}
            handleClick={handleClick}
          />
        ))}
      </div>
      <div className="showQuestion-ans">
        <button onClick={handleClick}>{showQuestion ? "Hide Ans" : "showQuestion Ans"}</button>
        {showQuestion ? <p style={{ color: "green" }}>{options[ans]}</p> : ""}
      </div>
    </div>
  );
};

export default QuestionCard;