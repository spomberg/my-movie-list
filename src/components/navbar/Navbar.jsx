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

function LinkTab(props) {
  return (
    <Tab
      component="a"
      {...props}
    />
  );
}

export default function Navbar() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

    return (
      <div className='navbar'>
        <img src={logo} alt='logo' />
        <Tabs value={value} onChange={handleChange} aria-label="icon label tabs">
          <LinkTab icon={<HomeIcon />} label="VIEW LISTS" href="/" />
          <LinkTab icon={<FormatListNumberedIcon />} label="MY LISTS" />
          <LinkTab icon={<PlaylistAddIcon />} label="CREATE LIST" />
          <LinkTab icon={<PersonIcon />} label="LOGIN" />
          <LinkTab icon={<PersonAddAltIcon />} label="SIGNUP" />
        </Tabs>
      </div>
    )
}
