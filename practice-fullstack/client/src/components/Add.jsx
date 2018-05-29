import React from 'react';

class Add extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    };
    this.add = this.add.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange (e) {
    this.setState({
      term: e.target.value
    });
  }

  add(e) {
    e.target.parentNode.children[1].value = '';
    this.props.onAdd(this.state.term);
  }

  render() {
    return (<div>
      <h4>Add more movies!</h4>
      Enter a movie name: <input value={this.state.terms} onChange={this.onChange}/>       
      <button onClick={this.add}> Add Movies </button>
    </div>); 
  }
}
export default Add;