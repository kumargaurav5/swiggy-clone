import React from 'react'
import ReactDOM from 'react-dom/client'
const heading= React.createElement(
    'h1',{id:"heading1"}, "swiggy clone is "
    );

console.log(heading)
const root=ReactDOM.createRoot(document.getElementById('root'))
root.render(heading)
