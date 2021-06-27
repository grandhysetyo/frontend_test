import React from 'react'
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
const Detail_Movie = () => {
    let { slug } = useParams();
    const movie = useSelector((state) => state.movies.find((el)=> el.slug === slug));
    
    return (
        <div className="container">
            <div className="detail-movie">
                <img src={movie.Poster} alt="" />
                <div className="text">
                    <h1>{movie.Title}</h1>
                    <span>{movie.Type.toUpperCase()} | {movie.Year}</span>
                    <a href="/">Back</a>  
                </div>                              
            </div>
        </div>
    )
}

export default Detail_Movie
