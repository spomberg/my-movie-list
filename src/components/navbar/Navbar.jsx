import './Navbar.scss';
import HomeIcon from '@mui/icons-material/Home';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import PersonIcon from '@mui/icons-material/Person';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom';


export default function Navbar() {
    return (
      <div className='navbar'>
        <img src={logo} alt='logo' />
      <ul className='main-menu'>
        <li>
          <Link to={'/'}><HomeIcon/>{`\nVIEW LISTS`}</Link>
        </li>
        <li>
          <Link to={''}><FormatListNumberedIcon/>{`\nMY LISTS`}</Link>
        </li>
        <li>
          <Link to={''}><PlaylistAddIcon/>{`\nCREATE LIST`}</Link>
        </li>
      </ul>
      <ul className='login-menu'>
        <li>
        <Link to={'/'}><PersonIcon/>{`\nLOGIN`}</Link>
        </li>
        <li>
        <Link to={'/'}><PersonAddAltIcon/>{`\nSIGNUP`}</Link>
        </li>
      </ul>
      </div>
    )
}
