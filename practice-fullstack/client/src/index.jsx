import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Add from './components/Add.jsx';
import Search from './components/Search.jsx';
import MovieList from './components/MovieList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      displayMovies: [],
      watchStatus: true,
    };
  }

  componentDidMount() {
    this.fetch();
  }

  addMovie (term) {
    //post
    this.send({data: term});
  }

  send(input) {
    $.ajax({
      type: 'POST',
      url: '/movies',
      data: JSON.stringify(input),
      contentType: 'application/json',
      success: (response) => {
        this.fetch();
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

  fetch() {
    $.ajax({
      type: 'GET',
      url: '/movies',
      success: (response) => {
        this.setState({
          movies: response,
          displayMovies: response.filter(
            movie => movie.watched === this.state.watchStatus
          )
        });
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

  toggleStatus(id, watched) {
    this.toggle({id: id, watched: watched});
  }

  toggle(data) {
    $.ajax({
      type: 'POST',
      url: '/toggle',
      data: JSON.stringify(data),
      contentType: 'application/json',
      success: (response) => {
        this.fetch();
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

  toggleWatch(watched) {
    let allmovies = this.state.movies;
    allmovies = allmovies.filter(
      (movie) => movie.watched === watched
    );
    this.setState({
      displayMovies: allmovies,
      watchStatus: watched
    });

  }

  searchMovie(term) {
    let allmovies = this.state.displayMovies;
    allmovies = allmovies.filter(
      (movie) => movie.title.toLowerCase().includes(term.toLowerCase())
    );
    this.setState({
      displayMovies: allmovies
    });
  }

  render () {
    return (<div>
      <h1>Movie List</h1>
      <Add onAdd={this.addMovie.bind(this)}/>
      <Search onSearch={this.searchMovie.bind(this)}/>
      <button 
        onClick={() => this.toggleWatch(true)} 
        style={{backgroundColor: this.state.watchStatus? 'grey': 'white'}}
      >Watched</button>
      <button 
        onClick={() => this.toggleWatch(false)} 
        style={{backgroundColor: this.state.watchStatus? 'white': 'grey'}}
      >To Watch</button>
      <MovieList movies={this.state.displayMovies} onStatusToggle={this.toggleStatus.bind(this)}/>
    </div>);
  }
}

ReactDOM.render(<App />, document.getElementById('app'));