import React from "react";
import Paper from '@material-ui/core/Paper';
import {APIKey} from '../APIKey';
import axios from 'axios';
import { Typography } from "@material-ui/core";



class MovieDetails extends React.Component{
    
    state = {
         movie:this.props.location.state.movie
    };
     
    componentDidMount () {
     axios
      .get(`https://www.omdbapi.com/?apikey=${APIKey}&t=${this.state.movie.Title}&plot="full"`)
      .then(response =>{
        if(response.data.Response=='True')
        { this.setState({movie:response.data})}
        else
        alert("Too many Movies, please be more specific")}
      )
      .catch(err => console.log(err));
    }

    render(){
        const styles = {
            title: {
              color:"white"
            },
            movieDetailsSpace:{
                textAlign:"left"
                
            },
            hotelImages:{
                display:"flex", 
                flexDirection:"row"
            },
            PaperStyle:{
                backgroundColor: "black",
                width:"50%",
                minHeight:500
            },
            mainDivStyle:{
                backgroundColor:"black",
                display:"flex",
                marginTop:20
            },
            movieImage: {
                width:"40%",            
            }
        };
        return (          

            <div style={styles.mainDivStyle}>
                
                
                    <Paper style={styles.PaperStyle}>
                    <img src={this.state.movie.Poster} style={styles.movieImage}/>
                   <h2 style={styles.title}>{this.state.movie.Title}</h2>
                    <Typography style={styles.title}>{this.state.movie.Year}</Typography>
                    <Typography style={styles.title}>{this.state.movie.Runtime}</Typography>
                    </Paper>

                    <Paper style={styles.PaperStyle}>
                   {this.state.movie.Plot&&
                   <React.Fragment>
                    <div style={styles.movieDetailsSpace}>
                        <p style={styles.title}>{this.state.movie.Genre}</p>
                        <Typography style={styles.title}>IMDB Rating: {this.state.movie.imdbRating}</Typography>
                        <Typography style={styles.title}>Director: {this.state.movie.Director}</Typography>
                        <p style={styles.title}>{this.state.movie.Plot}</p>
                        <Typography style={styles.title}>Writer: {this.state.movie.Writer}</Typography>
                        <Typography style={styles.title}>Awards: {this.state.movie.Awards}</Typography>
                        <Typography style={styles.title}>Released: {this.state.movie.Released}</Typography>
                        <br/>
                        <Typography style={styles.title}>BoxOffice: {this.state.movie.BoxOffice}</Typography>
                    </div>
                    <div style={{textAlign:"left"}}>
                        <h4 style={styles.title}>Recommended Movies:</h4>
                    </div>
                    </React.Fragment>
                    }       
                   </Paper>
                
            </div>
        )
    }
}

export default MovieDetails;
