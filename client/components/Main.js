import React from 'react';
import { Link } from 'react-router';


const Main = React.createClass({
    render() {
        //Throw an error 
        throw new Error('I crashed!');
        return (
            <div>
                <h1>
                    <Link to="/">Reduxstagram</Link>
                </h1>
                {React.cloneElement(this.props.children, this.props)}
            </div>
        )
    }
});

export default Main;