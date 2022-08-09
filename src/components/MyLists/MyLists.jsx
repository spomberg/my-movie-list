import './MyLists.scss';
import ListItem from '../Home/ListItem';
import Typography from '@mui/material/Typography';
import axiosConn from '../../axiosConn';
import { BeatLoader } from 'react-spinners';
import { useEffect, useState } from 'react';
import { useSnackbar } from 'notistack';
import { useNavigate } from 'react-router-dom';

export default function MyLists() {
  const [loading, setLoading] = useState(true);
  const [lists, setLists] = useState([]);
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  useEffect(() => {
    Promise.resolve(axiosConn.get('api/user/lists'))
    .then((res) => {
      if (res.data.code === 200) {
        setLists(res.data.list);
        setLoading(false);
      }
      else {
        enqueueSnackbar('Please login to view this page', { variant: 'info' })
        navigate('/login')
      }
    })
    .catch((err) => enqueueSnackbar(err.message, { variant: 'error' }))
  }, [enqueueSnackbar, navigate])

  return (
    <div className='my-lists'>
      {loading ? (<BeatLoader className='loader' loading={loading} />) : (
      <Typography className='page-title' variant="h4">My Lists</Typography>)}
      <div className='my-lists-wrapper'>
        <ul>
          {lists.map(list => {
            return(
              <li key={list.id}>
                <ListItem 
                  id={list.id}
                  title={list.title}
                  username={list.username}
                  image={list.index_poster}
                />
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
