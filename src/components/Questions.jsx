import React, { useState } from 'react';
import SwipeableViews from 'react-swipeable-views';
import questions from '../static/questions.json';
import Start from './Start';
import Question from './Question';
import Result from './Result';

const Questions = () => {

  // const obj = {
  //   birth: '1987/11/17',
  //   frequency: [0.5, 0.75, 0.25],
  //   quantity: 1,
  // }

  const resultObject = {
    birth: '',
    frequency: [],
    quantity: 0,
  }

  const [pageIndex, setPageIndex] = useState(0);
  const [quetionIndex, setQuetionIndex] = useState(0);

  const [birth, setBirth] = useState('1980-01-01');
  const [result, setResult] = useState(resultObject);

  const startButtonClicked = e => {
    if (!birth) return false;
    setResult({ ...result, ...{ birth: birth } })
    setPageIndex(Number(e.target.value) + 1);
  }

  const buttonClicked = (e, index, questionsLength) => {
    if (index === questionsLength - 1)
      setResult({ ...result, ...{ quantity: Number(e) } })
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
      />
      <SwipeableViews
        // enableMouseEvents
        disabled
        index={quetionIndex}
      >
        {
          questions.map((x, index, questions) =>
            <Question
              question={x}
              index={index}
              questions={questions}
              buttonClicked={buttonClicked}
            />
          )
        }
      </SwipeableViews>
      <Result
        result={result}
        oneMore={oneMore}
      />
    </SwipeableViews>
  )
}

export default Questions;