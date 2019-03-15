import React from 'react';
import ReactDOM from 'react-dom';
import Form from './Form';
import './index.scss';


const MOUNT_NODE = document.querySelector('#evaluation');

const render = () => {
  ReactDOM.render(
    <Form />,
    MOUNT_NODE
  );
};

render();