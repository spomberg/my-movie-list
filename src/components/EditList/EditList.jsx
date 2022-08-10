import './EditList.scss';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Switch from '@mui/material/Switch';
import Button from '@mui/material/Button';
import axiosConn from "../../axiosConn";
import MovieItem from '../Lists/MovieItem'
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchMovie from '../SearchMovie/SearchMovie';
import { moveElement } from '../../helpers/helpers';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { BeatLoader } from 'react-spinners';
import { useSnackbar } from 'notistack';
import { useNavigate } from 'react-router-dom';

export default function EditList() {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const params = useParams();
  const [loading, setLoading] = useState(true);

  // FORM STATES AND HANDLING METHODS
  const [title, setTitle] = useState('');
  const handleTitleChange = (event) => setTitle(event.target.value);
  const [description, setDescription] = useState('');
  const handleDescriptionChange = (event) => setDescription(event.target.value);
  const [checked, setChecked] = useState(true);
  const handleToggleChange = () => setChecked(!checked);

  // LIST STATE
  const [movies, setMovies] = useState([]); 

  // MODAL STATE AND HANDLING METHODS
  const [open, setOpen] = useState(false); 
  const handleOpen = () => setOpen(true);
  const [searchResults, setSearchResults] = useState([]);
  const handleClose = () => {
    setOpen(false);
    setSearchResults([]);
  };

  useEffect(() => {
    Promise.resolve(axiosConn.get(`/api/lists/${params.listId}/edit-view`))
    .then(all => {
      if (all.data.code !== 200) {
        enqueueSnackbar(all.data.message, { variant: 'error' });
        navigate('/');
      } else {
          setTitle(all.data.list.title);
          setDescription(all.data.list.description);
          setChecked(all.data.list.is_public);
          setMovies(all.data.list.movies);
        }
    })
    .then(() => {
      setLoading(false);
    })
    .catch(err => {
      enqueueSnackbar(err.message, { variant: 'error' });
      navigate('/');
    })
  }, [params, navigate, enqueueSnackbar]);

  const handleSubmit = (event) => { // HANDLES FORM UPDATES
    event.preventDefault();
    if (title !== "" && title !== null) {
      Promise.resolve(axiosConn.put(`api/list/${params.listId}/edit`, { title: title, desc: description, is_public: checked }))
      .then((res) => {
        if (res.data.code === 200) {
         enqueueSnackbar('List updated!', { variant: 'success' });
        }
        else enqueueSnackbar(res.data.message, { variant: 'error' });
      })
      .catch(err => {
        enqueueSnackbar(err.message, { variant: 'error' });
      })
    } else enqueueSnackbar(`Title can't be empty`, { variant: 'error' });
  }

  const handleRemove = (movieID) => { // HANDLES MOVIE REMOVAL
    Promise.resolve(axiosConn.put(`api/list/${params.listId}/edit`, { remove_movie: movieID }))
    .then((res) => {
      if (res.data.code === 200) {
        enqueueSnackbar('Movie removed!', { variant: 'success' });
        const updatedMoviesArr = movies.filter(data => data.id !== movieID);
        setMovies(updatedMoviesArr);
      }
      else enqueueSnackbar(res.data.message, { variant: 'error' })
    })
    .catch(err => enqueueSnackbar(err.message, { variant:'error' }))
  }

  const handleMove = (position, index) => { // HANDLES MOVING MOVIES UP AND DOWN THE LIST
    if (position === 'up') {
      Promise.resolve(axiosConn.put(`api/list/${params.listId}/edit`, { move_up: index }))
      .then((res) => {
        if (res.data.code === 200) {
          enqueueSnackbar('List updated!', { variant: 'success' });
          const updatedMoviesArr = moveElement(movies, index, -1);
          setMovies(updatedMoviesArr);
          navigate(`/lists/edit/${params.listId}`);
        }
        else enqueueSnackbar(res.data.message, { variant: 'error' });
      })
      .catch(err => enqueueSnackbar(err.message, { variant: 'error' }))
    }
    
    if (position === 'down') {
      Promise.resolve(axiosConn.put(`api/list/${params.listId}/edit`, { move_down: index }))
      .then((res) => {
        if (res.data.code === 200) {
          enqueueSnackbar('List updated!', { variant: 'success' });
          const updatedMoviesArr = moveElement(movies, index, 1);
          setMovies(updatedMoviesArr);
          navigate(`/lists/edit/${params.listId}`);
        }
        else enqueueSnackbar(res.data.message, { variant: 'error' })
      })
      .catch(err => enqueueSnackbar(err.message, { variant: 'error' }))
    }
  }

  return (
    <div className='edit-list'>
      {loading ? (<BeatLoader className='loader' loading={loading} />) : (
        <>
          <Typography className='page-title' variant="h4">Edit List</Typography>
          <Box
            className='edit-list-form'
            component="form"
            method='put'
            action={`${process.env.REACT_APP_API_URL}api/list/new`}
            sx={{
              '& .MuiTextField-root': { m: 1.5 },
            }}
            autoComplete="off"
          >
            <TextField
              required
              id="outlined-required"
              label="Title"
              name="title"
              value={title}
              onChange={handleTitleChange}
            />
            <TextField
              id="outlined-multiline-static"
              label="Description"
              multiline
              value={description}
              rows={4}
              name="desc"
              onChange={handleDescriptionChange}
            />
            <div className='public-toggle'>
              Private
              <Switch name="is_public"
                checked={checked} 
                value={checked} 
                onClick={handleToggleChange}
                inputProps={{ 'aria-label': 'controlled' }}
              />Public
            </div>
            <Button 
              variant="contained" 
              type="submit"
              onClick={handleSubmit}
            >
              UPDATE LIST
            </Button>
          </Box>
          <ul>
            {movies.map((movie, index) => {
              return (
                <li key={movie.id}>
                  <MovieItem 
                    id={movie.id}
                    title={movie.original_title}
                    overview={movie.overview}
                    poster={movie.poster_path}
                    runtime={movie.runtime}
                    release_date={movie.release_date}
                    directed_by={movie.directed_by}
                    cast={movie.cast}
                  />
                  <div className='list-buttons'>
                    <button
                      {...index === 0 ? { disabled: true } : {} }
                      onClick={() => handleMove('up', index)}
                      >
                      <KeyboardArrowUpIcon />
                    </button>
                    <button
                      {...index >= movies.length - 1 ? { disabled: true } : {} }
                      onClick={() => handleMove('down', index)}
                      >
                      <KeyboardArrowDownIcon />
                    </button>
                    <button
                      onClick={() => handleRemove(movie.id)}
                    >
                      <DeleteIcon />
                    </button>
                  </div>
                </li>
              )
            })}
          </ul>
          <div className='add-section'>
            <Typography className='page-title' variant="subtitle1">Add Movies</Typography>
            <Fab 
              className='add-icon' 
              onClick={handleOpen} 
              color="primary" 
              aria-label="add"
            >
              <AddIcon />
            </Fab>
          </div>
          <SearchMovie 
            open={open}
            handleClose={handleClose}
            movies={movies}
            setMovies={setMovies}
            searchResults={searchResults}
            setSearchResults={setSearchResults}
          />
        </>
      )}
    </div>
  )
}
