import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './ListItem.scss';

export default function ListItem(props) {
  return (
    <Card className='index-list-item' sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography variant="h6" component="div">
          {props.title}
        </Typography>
        <Typography gutterBottom variant="subtitle1" component="div">
          {props.created_by}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">View List</Button>
      </CardActions>
      <CardMedia
        component="img"
        alt="list first movie poster"
        height="140"
        image={props.image}
      />
    </Card>
  )
}
