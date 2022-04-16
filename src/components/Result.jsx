import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import TwitterIcon from '@material-ui/icons/Twitter';
import { TwitterShareButton } from 'react-share';
import _ from 'lodash';

const Result = ({ result, oneMore, classes }) => {

  // これまでの日付を算出
  const getDiff = date => {
    const someday = new Date(date);
    const now = new Date();
    const msDiff = now.getTime() - someday.getTime();
    const daysDiff = Math.floor(msDiff / (1000 * 60 * 60 * 24));
    return daysDiff + 1;
  }

  // 1日あたりのパンの枚数を算出
  const calculateBreadPerDay = (dayCount, morningFrequency, lunchFrequency, dinnerFrequency, studentLunch) => {
    return (1095 < dayCount && dayCount < 5479) || (5478 < dayCount && dayCount < 6575 && studentLunch)
      ? morningFrequency + ((0.5 * 5 / 7) + (lunchFrequency * 2 / 7)) + dinnerFrequency
      : morningFrequency + lunchFrequency + dinnerFrequency
  }

  // これまでのトータルを算出
  const countBread = resuleObject => {
    if (
      resuleObject.birth
      && resuleObject.studentLunch != null
      && resuleObject.frequency.length !== 0
      && resuleObject.quantity !== 0
    ) {
      return _.round(
        _([...new Array(getDiff(resuleObject.birth)).fill(0)])
          .map((x, index) =>
            calculateBreadPerDay(
              index,
              resuleObject.frequency[0],
              resuleObject.frequency[1],
              resuleObject.frequency[2],
              resuleObject.studentLunch
            )
          )
          .map(x => x * resuleObject.quantity)
          .sum()
      )
    }
  }

  const hashtags = ['今まで食ったパンの枚数', 'breadcounter'];

  return (
    <Box
      className={classes.root}
    >
      <Box>
        <Typography variant="h5" component="p">
          今まで食ったパンの枚数は
        </Typography>
        <Typography variant="h3" component="p">
          {countBread(result)}枚
        </Typography>
        <Typography variant="h5" component="p">
          だッ！
        </Typography>
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="space-evenly"
        alignItems="center"
      >
        <Button
          className={classes.button}
          variant="contained"
          color="primary"
          onClick={e => oneMore()}
        >
          もう一回！
        </Button>
        <TwitterShareButton
          url="https://breadcounter.vercel.app/"
          title={`今まで食ったパンの枚数は${countBread(result)}枚でした．`}
          hashtags={hashtags}
        >
          <Button
            className={classes.button}
            color="primary"
          >
            <TwitterIcon />
            {` share result!`}
          </Button>
        </TwitterShareButton>
      </Box>
    </Box>
  )
}

export default Result;