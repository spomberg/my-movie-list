import { useState } from 'react';
import './NewList.scss';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Switch from '@mui/material/Switch';
import Button from '@mui/material/Button';
import axiosConn from '../../axiosConn';
import { useSnackbar } from 'notistack';

export default function NewList() {
  const [checked, setChecked] = useState(true);
  const handleToggleChange = () => setChecked(!checked);
  const [title, setTitle] = useState("");
  const handleTitleChange = (event) => setTitle(event.target.value);
  const [description, setDescription] = useState("");
  const handleDescriptionChange = (event) => setDescription(event.target.value);
  const { enqueueSnackbar } = useSnackbar();

  const newList = {
    title: title,
    desc: description,
    is_public: checked
  }
  
  const handleSubmit = (event) => {
    event.preventDefault();
    Promise.resolve(axiosConn.post('api/list/new', { newList }))
    .then(res => {
      console.log(newList);
      console.log(res);
    })
    enqueueSnackbar('List created!', { variant: 'success' });
  }

    return (
      <div className='new-list'>
        <Typography className='page-title' variant="h4">Create List</Typography>
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
            value={title}
            onChange={handleTitleChange}
          />
          <TextField
            id="outlined-multiline-static"
            label="Description"
            multiline
            rows={4}
            name="desc"
            value={description}
            onChange={handleDescriptionChange}
          />
          <div className='public-toggle'>
            Private
            <Switch 
              name="is_public" 
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
            CREATE LIST
          </Button>
        </Box>
      </div>
    )
}
