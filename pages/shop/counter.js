import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import * as t from "../../redux/types";

class Counter extends Component {
    render() {
        return (
            <Fragment>
                <div className="px-6 pt-4 pb-2">
                    <button
                        onClick={this.props.handlePlus}
                        className="text-black w-full mt-0.5 p-2 bg-transparent uppercase border-2 border-solid border-blue-400 cursor-pointer hover:bg-blue-400 hover:text-white">
                        Add to Cart
                    </button>
                </div>
            </Fragment>
        )
    }
}



const mapDispatchToProps = (dispatch) => {
    return {
        handlePlus: () => dispatch({ type: t.PLUS_ORDER }),
        handleMinus: () => dispatch({ type: t.MINUS_ORDER }),
    }
}
export default connect(null, mapDispatchToProps)(Counter);
// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
