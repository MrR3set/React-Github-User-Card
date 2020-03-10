import React from 'react';

class SearchForm extends React.Component {
    constructor() {
        super();
        this.state = {
          user: ''
        };
      }
    
      handleChanges = e => {
        // update state with each keystroke
        this.setState({
          user: e.target.value
        });
      };
    
      // class property to submit form
      handleSubmit = e => {
        e.preventDefault();
        this.props.searchUser(this.state.user);
        this.setState({user: ''}
         
        );
      };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
        placeholder="Find user"
        type="text"
        name="User"
        value={this.state.task}
        onChange={this.handleChanges}
        required
        minlength="2"
        />
        <button>Search</button>        
      </form>
  
    );
  }
}

export default SearchForm;
         
