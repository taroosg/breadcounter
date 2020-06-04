import React from 'react';
import Typography from '@material-ui/core/Typography';
import 'fontsource-roboto';
import Button from '@material-ui/core/Button';

const Question = ({ question, index, questions, buttonClicked, classes }) => {
  return (
    <div
      className={classes.root}
    >
      <Typography variant="h5" component="p">
        {question.question}
      </Typography>
      <div>
        {
          question.answers?.map((answer, i) =>
            // <button
            //   key={i}
            //   type="button"
            //   value={answer.value}
            //   onClick={e => buttonClicked(e.target.value, index, questions.length)}
            // >
            //   {answer.text}
            // </button>
            <Button
              key={i}
              variant="contained"
              color="primary"
              value={answer.value}
              onClick={e => buttonClicked(e.currentTarget.value, index, questions.length)}
            >
              {answer.text}
            </Button>
          )
        }
      </div>
    </div>
  )
}

export default Question;