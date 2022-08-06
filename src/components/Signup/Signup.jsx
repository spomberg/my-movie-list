import './Signup.scss';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axiosConn from "../../axiosConn";
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import { useEffect, useState } from 'react';

export default function Signup() {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  //FORM STATES
  const [username, setUsername] = useState('');
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
    setUsernameEmpty(false);
  }
  const [usernameEmpty, setUsernameEmpty] = useState(false);
  
  const [email, setEmail] = useState('');
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setEmailEmpty(false);
  }
  const [emailEmpty, setEmailEmpty] = useState(false);
  
  const [password, setPassword] = useState('');
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    setPasswordEmpty(false);
  }
  const [passwordEmpty, setPasswordEmpty] = useState(false);
  
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const handlePasswordConfirmationChange = (event) => {
    setPasswordConfirmation(event.target.value);
    setPasswordConfirmationEmpty(false);
  }
  const [passwordConfirmationEmpty, setPasswordConfirmationEmpty] = useState(false);

  const [passwordNotMatch, setPasswordNotMatch] = useState(false);

  useEffect(() => {
    Promise.resolve(axiosConn.get('/api/user'))
    .then((res) => {
      if (res.data.code === 200) {
        enqueueSnackbar("You're already logged in!", { variant: 'info' });
        navigate('/');
      }
    })
  }, [enqueueSnackbar, navigate])

  const handleSubmit = (event) => {
   event.preventdefault();
  //  if (!validator.isEmail(email)) setInvalidEmail(true);
  }

  return (
    <div className='signup'>
      <Typography className='page-title' variant="h4">Signup</Typography>
      <Box
          className='login-form'
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 1.5, width: '30%' },
          }}
          autoComplete="off"
        >
          <TextField
            required
            {...usernameEmpty ? {error: true} : {}}
            {...usernameEmpty ? {helperText:"Username can't be empty!"} : {}}
            id="outlined-required"
            label="Username"
            type='username'
            value={username}
            onChange={handleUsernameChange}
          />
          <TextField
            required
            {...emailEmpty ? {error: true} : {}}
            {...emailEmpty ? {helperText:"Email can't be empty!"} : {}}
            id="outlined-required"
            label="Email"
            type='email'
            value={email}
            onChange={handleEmailChange}
          />
          <TextField
            required
            {...passwordEmpty || passwordNotMatch ? {error: true} : {}}
            {...passwordEmpty ? {helperText:"Password can't be empty!"} : {}}
            id="outlined-password-input"
            label="Password"
            type='password'
            value={password}
            onChange={handlePasswordChange}
          />
          <TextField
            required
            {...passwordEmpty || passwordNotMatch ? {error: true} : {}}
            {...passwordEmpty ? {helperText:"Password confirmation can't be empty!"} : {}}
            {...passwordNotMatch ? {helperText:"Password and password confirmation don't match!"} : {}}
            id="outlined-password-input"
            label="Confirm Password"
            type='password'
            value={passwordConfirmation}
            onChange={handlePasswordConfirmationChange}
          />
          <Button 
            variant="contained" 
            type="submit"
            onClick={handleSubmit}
          >
            SIGNUP
          </Button>
        </Box>
    </div>
  )
}