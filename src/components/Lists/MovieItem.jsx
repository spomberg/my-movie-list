import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './MovieItem.scss';

export default function MovieItem(props) {
  return (
    <Card className='movie-item' sx={{ maxWidth: 345 }}>
      <div className='movie-item-left'>
        <a 
        href={`https://www.themoviedb.org/movie/${props.id}`}
        target="_blank" 
        rel="noopener noreferrer"
        >
          <CardMedia
            component="img"
            alt={`${props.title} poster`}
            height="140"
            image={props.poster}
          />
        </a>
        <div className='left-top'>
        <CardContent>
          <Typography variant="h6" component="div">
            {`${props.title} (${new Date(props.release_date).getFullYear()})`}
          </Typography>
          <Typography gutterBottom variant="subtitle1" component="div">
            Directed by:
            <ul>{props.directed_by.map(director => {
              return (
                <li key={director}>
                  {director}
                </li>
              )
              })}
            </ul>
          </Typography>
          <Typography gutterBottom variant="subtitle1" component="div">
            {props.overview}
          </Typography>
          <Typography gutterBottom variant="subtitle1" component="div">
            Cast:
            <ul>{props.cast.map(cast => {
              return (
                <li key={cast}>
                  {cast}
                </li>
              )
              })}
            </ul>
          </Typography>
        </CardContent>
        </div>
        <div className='left-bottom'>
        </div>
      </div>
      <div className='list-item-right'>
      </div>
    </Card>
  )
}
