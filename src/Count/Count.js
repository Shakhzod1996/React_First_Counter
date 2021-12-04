import React, {useState} from "react";
import '../App.css'


class Count extends React.Component {
    state = {
        count: 0
    }

    changeToClick() {
        this.setState (state => ({
            count: state.count + 1
        }))
    }
    render () {
        return (
            <div className="count-main">
                <button onClick={this.changeToClick.bind(this)}>You have Clicked {this.state.count} times</button>
            </div>
        )
    }
}

function Count2() {
    const [count, setCount] = useState(0)
    return (
        <div className="count-main">
            <button onClick={() => setCount(count + 1) }>
                You have Clicked {count} times
            </button>
        </div>
    )
}


export default Count2










