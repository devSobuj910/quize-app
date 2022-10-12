import React from "react";
import { toast } from "react-toastify";

const Options = ({ option, id, correctAnswer }) => {
  const checkAnswer = (event) => {
    if (event.target.value === correctAnswer) {
      toast.success("Correct Answer!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light"
      });
    } else {
      toast.error("Incorrect Answer!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light"
      });
    }
  };

  return (
    <div className="form-check form-check-inline">
      <label className="form-check-label" for={option}>
        <input
          className="form-check-input"
          type="radio"
          id={option}
          name={id}
          value={option}
          onClick={(event) => checkAnswer(event)}
        />
        {option}
      </label>
    </div>
  );
};

export default Options;
