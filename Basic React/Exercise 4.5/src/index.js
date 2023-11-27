import React from 'react';
import ReactDOM from 'react-dom';

const user = {
    firstName: 'Elon',
    lastName: 'Musk',
    age: 49
}


const element = (
    <div>
        <h1>User Information</h1>
        <p>
            <strong>First Name:</strong> {user.firstName}
        </p>
        <p>
            <strong>Last Name:</strong> {user.lastName}
        </p>
        <p>
            <strong>Age:</strong> {user.age}
        </p>
    </div>
)
ReactDOM.render(element, document.getElementById('root'));
