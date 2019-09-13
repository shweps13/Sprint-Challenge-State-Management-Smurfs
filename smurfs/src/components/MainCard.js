import React, { useEffect } from 'react';
import { connect } from "react-redux";

import { getQuote } from '../actions/index'

const Quotes = ({getQuote, quote, isFetching, error }) => {
    useEffect(() => {
      // run action creator when the component mounts
      getQuote();
    }, [getQuote]);
  
    if (isFetching) {
      return <h3>Fetching quote...</h3>;
    }
    
    return (
      <div>
        <h2>Here is results:</h2>
        {quote.map(item => (
            <div key={item.id}>
                <h3>{item.name}</h3>
                <p>Age: {item.age} years, Height: {item.height}</p>
            </div>
          ))}
          <button onClick={getQuote}>Refresh</button>
      </div>
    );
  };

  const mapStateToProps = state => {
    console.log('mSTP state in SecondCard:', state);
    return {
      quote: state.quote,
      isFetching: state.isFetching,
      error: state.error
    };
  };
  
  export default connect(
    mapStateToProps,
    { getQuote }
  )(Quotes); // function currying