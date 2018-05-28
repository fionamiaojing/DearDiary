import React from 'react';

const MovieListEntry = (props) => (
    <div className="content"> {props.movie.title}
        <div>{props.movie.release_date}</div>
        <div>{props.movie.runtime}</div>
        <div>{props.movie.vote_average}</div>
    </div>
);

export default MovieListEntry;