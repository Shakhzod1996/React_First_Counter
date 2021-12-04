import react, {useState} from "react";
import "./App.css";
import reactDOM from "react-dom";
// import img1 from "./imgs/logo.png";
import Body from "./Body/Body";
// import { useState } from "react";




// export default App

const App  = (props) => {
    const [personState, setPersonState] = useState( {
        person: [
            {name: 'Shakhzod', age: '24'},
            {name: 'Javohir', age: '28'},
            {name: 'Asadbek', age: '4'}
        ],
        otherstate: 'How are you'
    })

    console.log(personState);
    const switchNameHandler = () => {
        // console.log('Was clicked');
        // personState.person[0].name = 'John'  Gives Error
        setPersonState(
            {
                person: [
                    {name: 'John', age: '60'},
                    {name: 'Javohir', age: '28'},
                    {name: 'Asadbek', age: '4'}
                ],
                otherstate: personState.otherstate
            }
        )
    }

        return (
            <div className="main">
                <h2>Hi I am React</h2>
                <button onClick={switchNameHandler}>Switch Name</button>
                <Body name={personState.person[0].name} age={personState.person[0].age} />
                <Body name={personState.person[1].name} age={personState.person[1].age}>My hobby is Playing Golf</Body>
                <Body name={personState.person[2].name} age={personState.person[2].age} />

            </div>
        );
}

export default App





