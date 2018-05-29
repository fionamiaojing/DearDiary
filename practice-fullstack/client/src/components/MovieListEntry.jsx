import React from 'react';

export default class MovieListEntry extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            display: 'none',
        };
    }

    handleClick() {
        let currentStatus = this.state.display;
        this.setState({
            display: currentStatus === 'none' ? 'block' : 'none'
        });
    }

    render() {
        return (
            <div 
                className="content"
                onClick={this.handleClick.bind(this)}
            > Movie: {this.props.movie.title}
                <div style={{display:this.state.display}}>
                    <div>Release Date: {this.props.movie.release_date.split('T')[0]}</div>
                    <div>Run time: {this.props.movie.runtime}</div>
                    <div>Rating: {this.props.movie.vote_average}</div>
                    Watched: <input type="checkbox" defaultChecked={this.props.movie.watched} onClick={() => this.props.onStatusToggle(this.props.movie._id, this.props.movie.watched)}/> 
                </div>
            </div>
        );
    }

}
