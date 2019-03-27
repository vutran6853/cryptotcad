import React, { Component } from 'react';
import './home.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      cryptoData: {}
     };
     this.handleGetCurrentPrice = this.handleGetCurrentPrice.bind(this);
  }

  componentDidMount() {
    this.handleGetCurrentPrice()
  }

  // Get Price from API
  handleGetCurrentPrice() {
    fetch(`https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD,JPY,EUR&api_key=${ process.env.REACT_APP_KEY }`)
    .then((response) => response.json())
    .then((response) => this.setState({ cryptoData: response }))
    .catch((error) => console.log(`Danger something is wrong with Fetch API ${ error } `));
  }

  render() {
    let { cryptoData } = this.state;
    // console.log(cryptoData);

    return (
      <div className='displayPriceBox'>
        <h3>Real Time Current Price for Bitcoin</h3>
        <p>USD: ${ cryptoData.USD }</p>
        <p>JPY: ¥{ cryptoData.JPY }</p>
        <p>EUR: €{ cryptoData.EUR }</p>
        <button onClick={ () => this.handleGetCurrentPrice() }>refresh</button>
      </div>
    );
  }
}

export default Home;