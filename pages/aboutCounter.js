import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import * as t from "../redux/types";

class AboutCounter extends Component {
    render() {
        return (
            <Fragment>
                <div className="px-6 pt-4 pb-2">
                    <button className=" bg-slate-500 p-4 m-4" onClick={this.props.handleMinus}>-</button>
                        {this.props.order}
                    <button className=" bg-slate-500 p-4 m-4" onClick={this.props.handlePlus}>+</button>
                </div>
            </Fragment>
        )
    }
}



const mapStateToProps = state => {
    console.log(state);
    return {
        order: state.main.totalOrder
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        handlePlus: () => dispatch({ type: t.PLUS_ORDER }),
        handleMinus: () => dispatch({ type: t.MINUS_ORDER }),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AboutCounter);
// export default connect(mapStateToProps, mapDispatchToProps)(AboutCounter);
