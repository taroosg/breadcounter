import React from 'react';
import Typography from '@material-ui/core/Typography';
import 'fontsource-roboto';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

const Question = ({ question, index, questions, buttonClicked, classes }) => {
  return (
    <Box
      className={classes.root}
    >
      <Typography variant="h5" component="p">
        {question.question}
      </Typography>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="space-evenly"
        alignItems="center"
      >
        {
          question.answers?.map((answer, i) =>
            <Button
              className={classes.button}
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
      </Box>
    </Box>
  )
}

export default Question;