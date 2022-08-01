import './ResultsItem.scss';
import Typography from '@mui/material/Typography';
import AddCircleTwoToneIcon from '@mui/icons-material/AddCircleTwoTone';

export default function ResultsItem(props) {
  return (
    <div className='results-item'>
      <img 
        src={props.poster_path ? `https://image.tmdb.org/t/p/original${props.poster_path}` : `https://res.cloudinary.com/djv3yhbok/image/upload/v1658030155/1665px-No-Image-Placeholder.svg_jgp6ma.png`} 
        alt={`${props.title} poster`} 
        onClick={() => props.onClick(props.id)}
      />
      <Typography className='result-title' variant="subtitle1" >
        {`${props.title}`}
      </Typography>
      <div className='add-movie'>
        <AddCircleTwoToneIcon style={{ color: '3f50b5' }} />
      </div>
    </div>
  )
}
