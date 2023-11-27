import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from "antd";
const showAlert = () => {
    alert('Alert!!!');
};
const element = (
    <Button style={{ margin: "10px 10px" }} type="primary">
        Alert me!
    </Button>
);

ReactDOM.render(element, document.getElementById('root'));
