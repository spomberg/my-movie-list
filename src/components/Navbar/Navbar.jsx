import './Navbar.scss';
import HomeIcon from '@mui/icons-material/Home';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import PersonIcon from '@mui/icons-material/Person';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import logo from '../../assets/logo.png'
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import axiosConn from "../../axiosConn";
import { useSnackbar } from 'notistack';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Navbar(props) {
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();
  
  useEffect(() => {
    Promise.resolve(axiosConn.get('api/user'))
    .then((res) => {
      props.setUsername(res.data.username);
    })
  }, [props])

  const handleSubmit = (event) => {
    event.preventDefault();
    Promise.resolve(axiosConn.put('api/logout'))
    .then((res) => {
      if (res.status === 204) {
        props.setUsername('');
        enqueueSnackbar('You logged out!', { variant: 'success' });
        navigate('/');
      } 
    })
    .catch((err) => enqueueSnackbar(err.message, { variant: 'error' }))
  }

    return (
      <div className='navbar'>
        <img src={logo} alt='logo' />
      <ul className='main-menu'>
        <li>
          <Link to={'/'}><HomeIcon/>{`\nVIEW LISTS`}</Link>
        </li>
        <li>
          <Link to={'/my-lists'}><FormatListNumberedIcon/>{`\nMY LISTS`}</Link>
        </li>
        <li>
          <Link to={'/lists/new'}><PlaylistAddIcon/>{`\nCREATE LIST`}</Link>
        </li>
      </ul>
      {props.username ? (<ul className='logged'>
        <li>
        <Typography className='welcome-message' variant="h7">Welcome {props.username}!</Typography>
        </li>
        <li>
        <Button 
            variant="contained" 
            type="submit"
            onClick={handleSubmit}
          >
            LOGOUT
          </Button>
        </li>
      </ul>) :
      (<ul className='login-menu'>
        <li>
        <Link to={'/login'}><PersonIcon/>{`\nLOGIN`}</Link>
        </li>
        <li>
        <Link to={'/signup'}><PersonAddAltIcon/>{`\nSIGNUP`}</Link>
        </li>
      </ul>)}
      </div>
    )
}
