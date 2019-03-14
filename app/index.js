import React from 'react';
import ReactDOM from 'react-dom';

const MOUNT_NODE = document.querySelector('#root');

const render = () => {
  ReactDOM.render(
    <div>
        <h1>Hello World</h1>
    </div>,
    MOUNT_NODE
  );
};

render();