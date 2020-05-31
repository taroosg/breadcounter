import React from 'react';

const Start = ({ setBirth, birth, startButtonClicked }) => {
  return (
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
        Start!
        </button>
    </div>
  )
}

export default Start;