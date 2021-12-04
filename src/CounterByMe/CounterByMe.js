import React from "react";
import '../CounterByMe/CounterbByMe.css'

class CounterByMe extends React.Component {
    state = {
        count: 0
    };

    onClickPlus() {
        this.setState(state => ({
            count: state.count + 1
        }))
    }

    onClickMinus() {
        this.setState(state => ({
            count: state.count - 1
        }))
    }

    onClickReset() {
        this.setState(state => ({
            count: 0
        }))
    }
    render() {
        return (
            <div className="bodyCount">
                <div className="counter">
                    <span className="number">{this.state.count}</span>
                    <div className="flex">
                        <button className='btn plus' onClick={this.onClickPlus.bind(this)}>+</button>
                        <button className='btn  minus red' onClick={this.onClickMinus.bind(this)}>-</button>
                        <button className='btn reset red' onClick={this.onClickReset.bind(this)}>Reset</button>
                    </div>
                </div>
            </div>

        )
    }
}

export default CounterByMe