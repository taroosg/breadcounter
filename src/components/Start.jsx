import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import 'fontsource-roboto';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

// const useStyles = makeStyles({
//   root: {
//     background: '#282c34',
//     width: '100vw',
//     height: '100vh',
//     top: '0',
//     left: '0',
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'space-evenly',
//     alignItems: 'center',
//   },
// });

const Start = ({ setBirth, birth, startButtonClicked, classes }) => {
  // const classes = useStyles();
  const dioMessage = ['おまえは', '今まで食った', 'パンの枚数を', 'おぼえているのか？'];
  return (
    <div
      className={classes.root}
    >
      <div>
        {
          dioMessage.map((message, index) =>
            <Typography
              key={index}
              variant="h4"
              component="p"
            >
              {message}
            </Typography>
          )
        }
      </div>
      <TextField
        label="Birthday"
        type="date"
        onChange={e => setBirth(e.target.value)}
        value={birth}
        InputLabelProps={{
          shrink: true,
        }}
      />
      <Button
        variant="contained"
        color="primary"
        value="0"
        onClick={e => startButtonClicked(e)}
      >
        Start!
      </Button>
    </div>
  )
}

export default Start;