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
import ResultsItem from './ResultsItem';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useSnackbar } from 'notistack';
import { BeatLoader } from 'react-spinners';
import { useNavigate } from 'react-router-dom';
import { isDuplicate } from '../../helpers/helpers';

export default function SearchMovie(props) {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState('');
  const handleInputChange = (event) => setInput(event.target.value);
  const params = useParams();
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

  const handleSearch = () => {
    setLoading(true);
    Promise.resolve(axiosConn.put('api/list/search-movie', { query: input }))
    .then((res) => {
      setInput("");
      props.setSearchResults(res.data);
    })
    .then(() => setLoading(false));
  }

  const handleAdd = (movieID) => {
      if (!isDuplicate(props.movies, movieID)) {
        enqueueSnackbar('Adding movie...', { variant: 'info' })
        Promise.resolve(axiosConn.put(`api/list/${params.listId}/edit`, { add_movie: movieID }))
        .then((res) => {
          if (res.data.code === 200) {
            enqueueSnackbar('Movie added', { variant: 'success' });
            navigate(`/lists/edit/${params.listId}`);
          }
          else enqueueSnackbar(res.data.message, { variant: 'error' });
        })
        .catch((err) => enqueueSnackbar(err.message, { variant: 'error' }))
      }
      else enqueueSnackbar('This movie is already on your list!', { variant: 'warning' });
  }

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
                onKeyDown={event => {
                  if (event.key === "Enter") {
                    handleSearch();
                  }
                }}
              />
              <Button 
                variant="contained" 
                endIcon={<SearchIcon />}
                onClick={handleSearch}
              >
                SEARCH
              </Button>
            </div>
            <CssBaseline />
            <Container fixed>
              <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} >
                {loading ? (<BeatLoader className='loader' loading={loading} />) : (
                  <ul>
                    {props.searchResults.map(result => {
                      return (
                        <li key={result.id}>
                          <ResultsItem
                            id={result.id}
                            title={result.title}
                            poster_path={result.poster_path}
                            onClick={handleAdd}
                          />
                        </li>
                      )
                    })}
                  </ul>
                )}
              </Box>
            </Container>
          </Box>
        </Modal>
    </div>
  )
}
