
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Input, Button } from '@material-ui/core';
import {  fetchMovies } from '../../redux/actions';
import './Filter.css'
const Filter = ({fetchSearchMovie}) => {
    const [movie, setMovie] = useState('');
    const fetchMovie = (e) => {
        fetchSearchMovie(movie);
    }
    
    return (
        <form style={{marginTop:"5%"}}>
            <div className="search-input">
                <div>
                    <label className="input-label">Movie name</label>
                    <Input placeholder="search your next movie" value={movie} onChange={(e) => setMovie( e.target.value)}/>
                </div>
               
                
            </div>
            <div style={{marginTop:"2%"}}>
                <Button style={{background:"black", color:"white", marginRight:20}} onClick={() => {fetchMovie()}}>Search</Button>
            </div>
        </form>
    )
}
const mapDispatchToProps = (dispatch) => ({
    fetchSearchMovie: (movie) => dispatch(fetchMovies(movie))
})
export default connect(null,mapDispatchToProps)(Filter);
