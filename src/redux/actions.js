import {APIKey} from '../APIKey';
import axios from 'axios';
import {FETCH_MOVIES} from './actionTypes'

export const fetchMovies = (text) => dispatch => {
    axios
      .get(`https://www.omdbapi.com/?apikey=${APIKey}&s=${text}`)
      .then(response =>{
        if(response.data.Response=='True')
        {dispatch({
          type: FETCH_MOVIES,
          payload: response.data
        })}
        else
        alert("Too many Movies, please be more specific")}
      )
      .catch(err => console.log(err));
  };