import React, { useState } from "react";
import Options from "../Options/Options";
import { EyeIcon } from "@heroicons/react/24/solid";
import "./QuizList.css";

const QuizList = ({ qus, questions }) => {
  let { question, options, id, correctAnswer } = qus;
  let [show, setShow] = useState(false);
  console.log(options);
  return (
    <div className="col">
      <div
        className="card"
        style={{ height: "290px", margin: "auto", padding: "30px" }}
      >
        <div className="card-body">
          <div>
            <EyeIcon
              className="text-blue-500 eyeion"
              onClick={() => setShow(!show)}
            />
            {show ? (
              <p className="text-success fw-bold">Ans :{correctAnswer}</p>
            ) : undefined}
          </div>

          <h5 className="card-title">{question}</h5>

          {options.map((option) => (
            <Options
              option={option}
              id={id}
              correctAnswer={correctAnswer}
            ></Options>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuizList;
