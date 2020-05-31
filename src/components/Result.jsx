import React from 'react';
import { TwitterShareButton, TwitterIcon } from 'react-share';
const Result = ({ result, oneMore }) => {

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
      const total = array.reduce((accumulator, currentValue) => accumulator + currentValue)
      return total;
    }
  }

  return (
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
      <TwitterShareButton
        url="https://breadcounter.netlify.app"
        title="#今までに食ったパンの枚数"
      >
        <TwitterIcon
          size="32"
          round
        />
      </TwitterShareButton>
    </div>
  )
}

export default Result;