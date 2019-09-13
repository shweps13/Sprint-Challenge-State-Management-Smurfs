import React  from 'react';
import { connect } from "react-redux";

function MainCard() {

  return (
    <div className="MainCard">
      <h3>Important here</h3>
    </div>
  );
}

const mapStateToProps = state => {
    console.log('mSTP state in MainCard:', state);
    return {
      access_key: state.access_key,
      somethingImportant: state.somethingImportant,
      quote: state.quote,
      isFetching: state.isFetching,
    };
  };
  
  export default connect(
    mapStateToProps,
    { }
  )(MainCard); // function currying