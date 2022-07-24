import './Navbar.scss';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import HomeIcon from '@mui/icons-material/Home';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import PersonIcon from '@mui/icons-material/Person';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import logo from '../../assets/logo.png'
import { useState } from 'react';

export default function Navbar() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

    return (
      <div className='navbar'>
        <img src={logo} alt='logo' />
        <Tabs value={value} onChange={handleChange} aria-label="icon label tabs">
          <Tab icon={<HomeIcon />} label="VIEW LISTS" />
          <Tab icon={<FormatListNumberedIcon />} label="MY LISTS" />
          <Tab icon={<PlaylistAddIcon />} label="CREATE LIST" />
          <Tab icon={<PersonIcon />} label="LOGIN" />
          <Tab icon={<PersonAddAltIcon />} label="SIGNUP" />
        </Tabs>
      </div>
    )
}
