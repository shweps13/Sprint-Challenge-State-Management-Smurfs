import React, { useEffect, useState } from 'react';
import { connect } from "react-redux";
import { Loader, Card, Button } from 'semantic-ui-react'

import { getQuote, deleteSmurf } from '../actions/index'
import SmurfCard from '../components/SmurfCard'

const Quotes = ({deleteSmurf, getQuote, quote, isFetching, error }) => {
    useEffect(() => {
      // run action creator when the component mounts
      getQuote();
    }, [getQuote]);
  
    const deleteBlock = (id) => {
        deleteSmurf(id);
    }

    if (isFetching) {
      return <div><h3>Fetching quote...</h3>
      <Loader active inline='centered' /></div>;
    }
    
    return (
      <div className="MainCard">
        <h2>Check the results:</h2>
        <Card.Group centered>
        {quote.map(item => <SmurfCard item={item} key={item.id} deleteBlock={deleteBlock} />)}
        </Card.Group>
        <Button secondary onClick={getQuote}> Refresh</Button>

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
    { getQuote, deleteSmurf }
  )(Quotes); // function currying