import React from 'react';
import axios from 'axios';

export default class Palindrome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: '',
      isPalindrome: null
    };
  }

  handleInputChange = (event) => {
    this.setState({ inputText: event.target.value });
  };

  checkPalindrome = () => {
    axios.post('test1.php', { text: this.state.inputText })
      .then(response => {
        this.setState({ isPalindrome: response.data.is_palindrome });
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  render() {
    return (
      <div>
        <input type="text" value={this.state.inputText} onChange={this.handleInputChange} />
        <button onClick={this.checkPalindrome}>Check Palindrome</button>
        {this.state.isPalindrome !== null && (
          <p>{this.state.isPalindrome ? 'It is a palindrome!' : 'It is not a palindrome.'}</p>
        )}
      </div>
    );
  }
}
