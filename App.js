const heading= React.createElement(
    'div',{id:"parent"},
    
    [React.createElement(
    'h1',{id:"heading1"},'Swiggy-clone'
    
    ),
    React.createElement(
    'h2',{id:"heading2"},'Swiggy-clone'
        
        )]
    
    );

console.log(heading)
const root=ReactDOM.createRoot(document.getElementById('root'))
root.render(heading)
