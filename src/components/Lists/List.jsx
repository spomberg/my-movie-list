import './List.scss';
import { useParams } from 'react-router-dom';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import MovieItem from './MovieItem';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { BeatLoader } from 'react-spinners';
import { useEffect, useState } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import axiosConn from '../../axiosConn';
import { useSnackbar } from 'notistack';
import { useNavigate } from 'react-router-dom';

export default function List() {
  const [loading, setLoading] = useState(true);
  const params = useParams();
  const navigate = useNavigate();
  const [list, setList] = useState({});
  const [value, setValue] = useState('');
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    Promise.resolve(axiosConn.get(`/api/lists/${params.listId}`))
    .then(all => {
      if (all.data.code !== 200) {
        enqueueSnackbar(all.data.message, { variant: 'error' });
        navigate('/');
      }
      setList(all.data)
    })
    .then(() => setLoading(false))
    .catch(err => enqueueSnackbar(err.message, { variant: 'error'}));
  }, [params.listId, enqueueSnackbar])

  return (
    <div className='list'>
      {loading ? (<BeatLoader className='loader' loading={loading} />) : (
        <>
          <Box 
            className='header'
            component='span'
            sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
          >
            <Card>
              <Typography variant={'h3'}>{list.title}</Typography>
              <Typography variant={'h6'} color="text.secondary">Created by {list.username}</Typography>
              <Typography variant={'h5'}>Description: {list.description}</Typography>
            </Card>
          </Box>
          <div className='share-link'>
            <CopyToClipboard 
              value={value}
              onCopy={() => setValue(true)}
              text={`${process.env.REACT_APP_BASE_URL_LOCAL}/lists/${params.listId}`}
            >
              <span>Share list <ContentCopyIcon /></span>
            </CopyToClipboard>
            {value ? <span style={{color: 'red'}}>Copied</span> : null}
          </div>
          <ul>
            {list.movies.map(movie => {
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
