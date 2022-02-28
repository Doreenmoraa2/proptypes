import React from "react";
import Users from './Users';

function Movies ({movies}){
    return(
        <div>
        <ul>
            {movies.map((movie)=> {
                return(
                    <li key={movie.map}>
                    <Users {...movie}/>
                </li>
                );
            })}
            
        </ul>
        </div>
    );
}
export default Movies;