import React, { useState } from 'react';
import SwipeableViews from 'react-swipeable-views';
import questions from '../static/questions.json';
import Start from './Start';
import Question from './Question';
import Result from './Result';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    background: '#282c34',
    color: '#f2f2f2',
    width: '100vw',
    height: '100vh',
    top: '0',
    left: '0',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  button: {
    margin: '2vmin',
    width: '30vmin',
    maxWidth: '300px',
  }
});

const Questions = () => {
  const classes = useStyles();

  const resultObject = {
    birth: null,
    studentLunch: null,
    frequency: [],
    quantity: 0,
  }

  const [pageIndex, setPageIndex] = useState(0);
  const [quetionIndex, setQuetionIndex] = useState(0);

  const [birth, setBirth] = useState('1980-01-01');
  const [result, setResult] = useState(resultObject);

  const getDiffFromSomodayToToday = someday => {
    const d1 = new Date();
    const d2 = new Date(someday);
    return d1 - d2 > 0
      ? true
      : false
  }

  const startButtonClicked = e => {
    if (!birth || !getDiffFromSomodayToToday(birth)) return false;
    setResult({ ...result, ...{ birth: birth } })
    setPageIndex(Number(e.currentTarget.value) + 1);
  }

  const buttonClicked = (e, index, questionsLength) => {
    if (index === questionsLength - 1)
      setResult({ ...result, ...{ quantity: Number(e) } })
    else if (index === 0)
      setResult({ ...result, ...{ studentLunch: JSON.parse(e) } })
    else
      setResult({ ...result, ...{ frequency: [...result.frequency, Number(e)] } });
    if (index + 1 < questionsLength)
      setQuetionIndex(index + 1)
    else
      setPageIndex(2);
  }

  const oneMore = () => {
    setResult(resultObject);
    setPageIndex(0);
    setQuetionIndex(0);
  }

  return (
    <SwipeableViews
      // enableMouseEvents
      disabled
      index={pageIndex}
    >
      <Start
        setBirth={setBirth}
        birth={birth}
        startButtonClicked={startButtonClicked}
        classes={classes}
      />
      <SwipeableViews
        // enableMouseEvents
        disabled
        index={quetionIndex}
      >
        {
          questions.map((x, index, questions) =>
            <Question
              key={index}
              question={x}
              index={index}
              questions={questions}
              buttonClicked={buttonClicked}
              classes={classes}
            />
          )
        }
      </SwipeableViews>
      <Result
        result={result}
        oneMore={oneMore}
        classes={classes}
      />
    </SwipeableViews>
  )
}

export default Questions;