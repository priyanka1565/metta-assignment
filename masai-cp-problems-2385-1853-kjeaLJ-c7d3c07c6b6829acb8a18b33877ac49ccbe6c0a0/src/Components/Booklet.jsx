import { useState,useEffect } from "react";
import QuestionCard from "./QuestionCard";


const Booklet = () => {
  const [examdata, setExamData] = useState([]);
  const [score, setScore] = useState(0);
  const [examstart, setExamStart] = useState(true);
  
  useEffect(() => {
    ExamData();
  }, []);

  const ExamData = async () => {
    setExamStart(!examstart);
    const examdata = await fetch(
      "https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-quiz"
    );
    const json = await examdata.json();
    setExamData(json.examdata);
    // console.log(examdata);
  };

  return (
    <div examdata-testid="Booklet">
      {/* create a div with className="welcome-div" here*/}
      {examstart ? (
        <div className="questions-container">
          {/* Append score and question card components here */}
          <button onClick={() => setExamStart(!examstart)}>End Exam</button>
          <h3>Score:{score}</h3>
          {examdata?.map((el) => (
            <QuestionCard
              key={el.id}
              question={el.question}
              options={el.options}
              ans={el.correctOptionIndex}
              setScore={setScore}
            />
          ))}
        </div>
      ) : (
        <div className="welcome-div">
          <h1>To begin the exam, click on the 'examstart Exam' button below</h1>
          <button onClick={ExamData}>examstart Exam</button>
        </div>
      )}
    </div>
  );
};

export default Booklet;
