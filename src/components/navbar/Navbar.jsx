import './Navbar.scss';
import HomeIcon from '@mui/icons-material/Home';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import PersonIcon from '@mui/icons-material/Person';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import logo from '../../assets/logo.png'
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';


export default function Navbar() {
    return (
      <div className='navbar'>
        <img src={logo} alt='logo' />
        <Box>
      <ul>
        <li>
          <Link to={'/'}><HomeIcon/>{`\nVIEW LISTS`}</Link>
        </li>
      </ul>
    </Box>
      </div>
    )
}
