import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { Loader, Card } from 'semantic-ui-react'

import { getQuote } from '../actions/index'

const Quotes = ({getQuote, quote, isFetching, error }) => {
    useEffect(() => {
      // run action creator when the component mounts
      getQuote();
    }, [getQuote]);
  
    if (isFetching) {
      return <div><h3>Fetching quote...</h3>
      <Loader active inline='centered' /></div>;
    }
    
    return (
      <div className="MainCard">
        <h2>Check the results:</h2>
        <Card.Group centered>
            {quote.map(item => (
                <Card key={item.id}>
                    <Card.Content>
                    <Card.Header>{item.name}</Card.Header>
                    <Card.Description>Age: {item.age} years, Height: {item.height}</Card.Description>
                    </Card.Content>
                </Card>
            ))}
        </Card.Group>
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