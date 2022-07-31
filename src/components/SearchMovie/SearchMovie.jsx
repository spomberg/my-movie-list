import './SearchMovie.scss';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import SearchIcon from '@mui/icons-material/Search';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import axiosConn from '../../axiosConn';
import MovieItem from '../Lists/MovieItem';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useSnackbar } from 'notistack';

export default function SearchMovie(props) {
  const { enqueueSnackbar } = useSnackbar();
  const [input, setInput] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const handleInputChange = (event) => setInput(event.target.value);
  const navigate = useNavigate();
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '60%',
    height: '80%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };  

  return (
    <div className='search-movie'>
      <Modal
          open={props.open}
          onClose={props.handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Add Movie
            </Typography>
            <div className='search-input'>
              <TextField
                id="filled-search"
                label="Search movie"
                type="search"
                variant="filled"
                value={input}
                onChange={handleInputChange}
              />
              <Button variant="contained" endIcon={<SearchIcon />}>
                SEARCH
              </Button>
            </div>
            <CssBaseline />
            <Container fixed>
              <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} />
            </Container>
          </Box>
        </Modal>
    </div>
  )
}
