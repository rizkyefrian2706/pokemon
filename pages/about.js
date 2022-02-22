import React, { Component, Fragment } from "react";
import AboutCard from "./aboutcard";
import { connect } from "react-redux";

class About extends Component {

  render() {
    return (
      <Fragment>
        <div>Total : 
        {this.props.order}
        </div>


        <AboutCard/>

      </Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    order: state.main.totalOrder
  }
}

export default connect(mapStateToProps)(About);