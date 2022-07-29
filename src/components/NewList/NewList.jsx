import { useState } from 'react';
import './NewList.scss';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Switch from '@mui/material/Switch';
import Button from '@mui/material/Button';

export default function NewList() {
  const [checked, setChecked] = useState(true);
  const handleChange = () => setChecked(!checked);

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
          />
          <TextField
            id="outlined-multiline-static"
            label="Description"
            multiline
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
      </div>
    )
}
