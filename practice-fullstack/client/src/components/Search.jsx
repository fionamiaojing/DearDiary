import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    };
    this.onChange = this.onChange.bind(this);
    this.search = this.search.bind(this);
  }

  onChange (e) {
    this.setState({
      term: e.target.value
    });
  }

  search(e) {
    e.target.parentNode.children[0].value = '';
    this.props.onSearch(this.state.term);
  }

  render() {
    return (<div>
      Enter a search criteria: <input value={this.state.terms} onChange={this.onChange}/>       
      <button onClick={this.search}> Search Movies </button>
    </div>); 
  }
}

export default Search;