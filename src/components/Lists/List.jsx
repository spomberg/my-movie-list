import './List.scss';
import { useParams } from 'react-router-dom';
import useListData from '../../hooks/useListData'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';

export default function List() {
  const params = useParams();
  const list = useListData(params.listId).list

  return (
    <div className='list'>
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
    </div>
  )
}
