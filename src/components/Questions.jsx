import React, { useState } from 'react';
import SwipeableViews from 'react-swipeable-views';
import questions from '../static/questions.json';

const Questions = () => {

  const obj = {
    birth: '1987/11/17',
    frequency: [0.5, 0.75, 0.25],
    quantity: 1,
  }

  const resultObject = {
    birth: '',
    frequency: [],
    quantity: 0,
  }

  const [pageIndex, setPageIndex] = useState(0);
  const [quetionIndex, setQuetionIndex] = useState(0);

  const [birth, setBirth] = useState('1987-11-17');
  const [result, setResult] = useState(resultObject);

  const startButtonClicked = e => {
    if (!birth) return false;
    setResult({ ...result, ...{ birth: birth } })
    setPageIndex(Number(e.target.value) + 1);
  }

  const buttonClicked = (e, index, questionsLength) => {
    if (index === questionsLength - 1) setResult({ ...result, ...{ quantity: Number(e) } })
    else setResult({ ...result, ...{ frequency: [...result.frequency, Number(e)] } });
    if (index + 1 < questionsLength) setQuetionIndex(index + 1)
    else setPageIndex(2);
  }

  const oneMore = () => {
    setResult(resultObject);
    setPageIndex(0);
    setQuetionIndex(0);
  }

  const getDiff = date => {
    const someday = new Date(date);
    const now = new Date();
    const msDiff = now.getTime() - someday.getTime();
    const daysDiff = Math.floor(msDiff / (1000 * 60 * 60 * 24));
    return daysDiff + 1;
  }

  const countBread = resuleObject => {
    if (
      resuleObject.birth !== ''
      && resuleObject.frequency.length !== 0
      && resuleObject.quantity !== 0
    ) {
      const array = resuleObject.frequency.map(x => x * getDiff(resuleObject.birth) * resuleObject.quantity);
      const reducer = (accumulator, currentValue) => accumulator + currentValue;
      const total = array.reduce(reducer)
      return total;
    }
  }

  return (
    <SwipeableViews
      // enableMouseEvents
      disabled
      index={pageIndex}
    >
      <div>
        <p>おまえは今まで食ったパンの枚数をおぼえているのか？？</p>
        <p>When did you birth??</p>
        <input
          type="date"
          onChange={e => setBirth(e.target.value)}
          value={birth}
        />
        <button
          type="button"
          value="0"
          onClick={e => startButtonClicked(e)}
        >
          next
        </button>
      </div>
      <SwipeableViews
        // enableMouseEvents
        disabled
        index={quetionIndex}
      >
        {
          questions.map((x, index, questions) =>
            <div>
              <p>{x.question}</p>
              {
                x.answers?.map(answer =>
                  <button
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
      </SwipeableViews>
      <div>
        <p>お前が今までに食ったパンの枚数は</p>
        <p>
          {~~(countBread(result))}
        </p>
        <p>枚だッ！</p>
        <button
          onClick={e => oneMore()}
        >
          もう一回！
        </button>
      </div>
    </SwipeableViews>
  )
}

export default Questions;