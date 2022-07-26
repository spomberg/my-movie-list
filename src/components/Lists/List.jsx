import './List.scss';
import { useParams } from 'react-router-dom';
import useListData from '../../hooks/useListData'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import MovieItem from './MovieItem';
import { BeatLoader } from 'react-spinners';
import { useEffect, useState } from 'react';

export default function List() {
  const [loading, setLoading] = useState(true)
  const params = useParams();
  const list = useListData(params.listId).list

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000)
  }, [])

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