import React from 'react';
import axios from 'axios';

class Giveadvice extends React.Component {
  state = {
    advice: '',
  }

  componentDidMount() {
    this.fetchAdvice();
  }

  fetchAdvice = () => {
    axios.get('https://api.adviceslip.com/advice')
      .then((response) => {
        const { advice } = response.data.slip;

        this.setState({ advice });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="advice">
          <h1>{this.state.advice}</h1>
          <button className="button1" onClick={this.fetchAdvice}>
            <span>GIVE ME ADVICE!</span>
          </button>
        
      </div>
    );
  }
}

export default Giveadvice;