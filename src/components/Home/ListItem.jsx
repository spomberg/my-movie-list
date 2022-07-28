import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import './ListItem.scss';

export default function ListItem(props) {
  return (
    <Card className='index-list-item' sx={{ maxWidth: 345 }}>
      <div className='list-item-left'>
        <div className='left-top'>
        <CardContent>
          <Typography variant="h6" component="div">
            {props.title}
          </Typography>
          <Typography gutterBottom variant="subtitle1" component="div">
            Created by {props.username}
          </Typography>
        </CardContent>
        </div>
        <div className='left-bottom'>
        <CardActions>
          <Link to={`/lists/${props.id}`} className='view-list-button'>VIEW LIST</Link>
        </CardActions>
        </div>
      </div>
      <div className='list-item-right'>
        <CardMedia
          component="img"
          alt={props.title ? `${props.title} first movie poster` : `No image available`}
          height="140"
          image={props.image ? props.image : `https://res.cloudinary.com/djv3yhbok/image/upload/v1658030155/1665px-No-Image-Placeholder.svg_jgp6ma.png`}
        />
      </div>
    </Card>
  )
}
