import { Button, Grid, makeStyles, TextField, Typography } from '@material-ui/core';
import React, { FC, useState } from 'react';

const useStyles = makeStyles({
  root: {
    margin: '30px 0px',
  },
});

export const App: FC = () => {
  const [id, setId] = useState<string>('');
  const [pw, setPw] = useState<string>('');
  const css = useStyles();

  const handleIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value: string = e.target.value;
    setId(value);
  };
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value: string = e.target.value;
    setPw(value);
  };

  return (
    <Grid
      container
      justify='center'
      alignItems='center'
    >
      <Typography
        component='h1'
        variant='h5'
        className={css.root}
      >
        OSU! Local Score Manager
      </Typography>
      <TextField
        variant='outlined'
        margin='normal'
        required
        fullWidth
        id='email'
        label='Email Address'
        name='email'
        autoComplete='email'
        autoFocus
        onChange={handleIdChange}
        className={css.root}
        value={id}
      />
      <TextField
        variant='outlined'
        margin='normal'
        required
        fullWidth
        name='password'
        label='Password'
        type='password'
        id='password'
        autoComplete='current-password'
        onChange={handlePasswordChange}
        className={css.root}
        value={pw}
      />
      <Button
        type='submit'
        fullWidth
        variant='contained'
        color='primary'
        className={css.root}
      >
        Sign In
      </Button>
    </Grid>
  );
};
