import './EditList.scss';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Switch from '@mui/material/Switch';
import Button from '@mui/material/Button';
import axiosConn from "../../axiosConn";
import MovieItem from '../Lists/MovieItem'
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
  const [title, setTitle] = useState('');
  const handleTitleChange = (event) => setTitle(event.target.value);
  const [description, setDescription] = useState('');
  const handleDescriptionChange = (event) => setDescription(event.target.value);
  const [checked, setChecked] = useState(true);
  const handleToggleChange = () => setChecked(!checked);
  const [movies, setMovies] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (title !== "" && title !== null) {
      Promise.resolve(axiosConn.put(`api/list/${params.listId}/edit`, { title: title, desc: description, is_public: checked }))
      .then(() => {
        enqueueSnackbar('List updated!', { variant: 'success' });
      })
      .catch(err => {
        enqueueSnackbar(err.message, { variant: 'error' });
      })
    } else enqueueSnackbar(`Title can't be empty`, { variant: 'error' })
  }

  useEffect(() => {
    Promise.resolve(axiosConn.get(`/api/lists/${params.listId}`))
    .then(all => {
      if (all.data.code === 404) {
        enqueueSnackbar(all.data.message, { variant: 'error' });
        navigate('/');
      }
      setTitle(all.data.title);
      setDescription(all.data.description);
      setChecked(all.data.is_public);
      setMovies(all.data.movies);
    })
    .then(() => {
      setLoading(false);
    })
    .catch(err => {
      enqueueSnackbar(err.message, { variant: 'error' });
      navigate('/');
    })
  }, [params, navigate, enqueueSnackbar]);

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
            {movies.map(movie => {
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
                </li>
              )
            })}
          </ul>
        </>
      )}
    </div>
  )
}
