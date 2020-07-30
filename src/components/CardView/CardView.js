import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  card: {
    maxWidth: 400,
    minWidth:310
  },
  media: {
    minHeight: 450
  },
});

export default function MediaCard(props) {
  const classes = useStyles();
  let history = useHistory();

  function handleClick() {
    history.push("/movieDetails",{...props});
  }
  console.log("upperprops",props)

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.movie.Poster}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          {props.movie.Title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           Movie
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions style={{justifyContent:"space-evenly"}}>
        <Button size="small" style={{color:"white" ,background:"black"}} onClick={handleClick}>
                    About
        </Button>
        
      </CardActions>
    </Card>
  );
}
