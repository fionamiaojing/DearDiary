import React from 'react';
import MovieListEntry from './MovieListEntry.jsx';

export default class MovieList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                {this.props.movies.map((movie) => <MovieListEntry key={movie._id} movie={movie} onStatusToggle={this.props.onStatusToggle}/>)}
            </div>
        );
    }
}