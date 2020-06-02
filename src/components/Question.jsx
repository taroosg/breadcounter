import React from 'react';

const Question = ({ question, index, questions, buttonClicked }) => {
  return (
    <div>
      <p>{question.question}</p>
      {
        question.answers?.map((answer, i) =>
          <button
            key={i}
            type="button"
            value={answer.value}
            onClick={e => buttonClicked(e.target.value, index, questions.length)}
          >
            {answer.text}
          </button>
        )
      }
    </div>
  )
}

export default Question;