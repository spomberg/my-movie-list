import './EditList.scss';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Switch from '@mui/material/Switch';
import Button from '@mui/material/Button';
import axiosConn from "../../axiosConn";
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { BeatLoader } from 'react-spinners';

export default function EditList() {
  const params = useParams();
  const [state, setState] = useState({ list: { } });
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    Promise.resolve(axiosConn.get(`/api/lists/${params.listId}`))
    .then(all => {
      setState(prev => ({ ...prev, list: all.data }));
    })
    .then(() => {
      setLoading(false);
    })
  }, [params]);

  const [checked, setChecked] = useState(state.list.is_public);
  const handleChange = () => setChecked(!checked)

  return (
    <div className='edit-list'>
      {loading ? (<BeatLoader className='loader' loading={loading} />) : (
        <>
          <Typography className='page-title' variant="h4">Edit List</Typography>
          <Box
            className='create-list-form'
            component="form"
            method='post'
            action={`${process.env.REACT_APP_API_URL}api/list/new`}
            sx={{
              '& .MuiTextField-root': { m: 1.5, width: '30%' },
            }}
            autoComplete="off"
          >
            <TextField
              required
              id="outlined-required"
              label="Title"
              name="title"
              value={state.list.title}
            />
            <TextField
              id="outlined-multiline-static"
              label="Description"
              multiline
              value={state.list.description}
              rows={4}
              name="desc"
            />
            <div className='public-toggle'>
              Private
              <Switch name="is_public"
                checked={checked} 
                value={checked} 
                onClick={handleChange}
                inputProps={{ 'aria-label': 'controlled' }}
              />Public
            </div>
            <Button variant="contained" type="submit">
              CREATE LIST
            </Button>
          </Box>
        </>
      )}
    </div>
  )
}
