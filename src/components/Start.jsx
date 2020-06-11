import React from 'react';
import Typography from '@material-ui/core/Typography';
import 'fontsource-roboto';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';

const Start = ({ setBirth, birth, startButtonClicked, classes }) => {
  const dioMessage = ['おまえは', '今まで食った', 'パンの枚数を', 'おぼえているのか？'];
  return (
    <Box
      className={classes.root}
    >
      <Box>
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
      </Box>
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
        className={classes.button}
        variant="contained"
        color="primary"
        value="0"
        onClick={e => startButtonClicked(e)}
      >
        Start!
      </Button>
    </Box>
  )
}

export default Start;