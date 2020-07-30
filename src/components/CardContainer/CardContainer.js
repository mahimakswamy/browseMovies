import React, { useEffect } from 'react';
import CardView from '../CardView/CardView';

import { connect } from 'react-redux';
import { Grid } from '@material-ui/core';
import './CardContainer.css';

function CardContainer({movies, ...props}){
  let listMovie = movies.list
  
   
      return (
        <div  className="list-container">
        <Grid container spacing={4}>
        {listMovie&&listMovie.map((movie,i)=>{
          return(
            <Grid item sm={12} md={4} lg={3} ><CardView movie = {movie}/></Grid>
          )
        })}
        </Grid>
        </div>
    )
  }
  
  const mapStateToProps = (state) => {
    return {
      movies: state.movieState
    }
  }
  const mapDispatchToProps = (dispatch) => ({
    
    })

  export default connect(mapStateToProps, mapDispatchToProps)(CardContainer);