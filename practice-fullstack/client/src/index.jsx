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
      movies: []
    };
  }

  componentDidMount() {
    this.fetch();
  }

  addMovie (term) {
    console.log(`${term} was added`);
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
          movies: response
        });
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

  searchMovie (term) {
    console.log(`${term} was searched`);
  }

  render () {
    return (<div>
      <h1>Movie List</h1>
      <Add onAdd={this.addMovie.bind(this)}/>
      <Search onSearch={this.searchMovie.bind(this)}/>
      <MovieList movies={this.state.movies}/>
    </div>);
  }
}

ReactDOM.render(<App />, document.getElementById('app'));