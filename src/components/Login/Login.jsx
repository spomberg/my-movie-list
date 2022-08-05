import './Login.scss';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axiosConn from "../../axiosConn";
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import { useState } from 'react';

export default function Login() {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  //FORM STATES
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
  
  const handleSubmit = (event) => {
    event.preventDefault();
    if (email === "") {setEmailEmpty(true);}
    if (password === "") setPasswordEmpty(true); 
    if (email !== "" && password !== "") {
      Promise.resolve(axiosConn.post('/api/login', { email: email, password: password}))
      .then((res) => {
        if (res.status === 204) {
          enqueueSnackbar("You're logged in!", { variant: 'success' });
          navigate('/');
        }
        else enqueueSnackbar(res.data.message, { variant: 'error' });
      })
      .catch((err) => enqueueSnackbar(err.message, { variant: 'error' }))
    }
  } 

  return (
    <div className='login'>
      <Typography className='page-title' variant="h4">Login</Typography>
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
            {...passwordEmpty ? {error: true} : {}}
            {...passwordEmpty ? {helperText:"Password can't be empty!"} : {}}
            id="outlined-password-input"
            label="Password"
            type='password'
            value={password}
            onChange={handlePasswordChange}
          />
          <Button 
            variant="contained" 
            type="submit"
            onClick={handleSubmit}
          >
            LOGIN
          </Button>
        </Box>
    </div>
  )
}
