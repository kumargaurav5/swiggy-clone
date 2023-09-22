import React from 'react'
import ReactDOM from 'react-dom/client'

//React Element
//React.createElement =>object =>HTMLElement(render)
const heading=React.createElement("h1",{id:"heading1"},"swiggy clone")
const root=ReactDOM.createRoot(document.getElementById('root'))

//JSX (transpiled before it reaches to js) -Parcel -Babel
//JSX => React.createElement => ReactElement -JS Object =>HtmlElement(render)

// React Element
const heading1=
(
<h1 id="heading2">
    Namaste React Using Jsx

</h1>
);

// React Component => 1. Class component-Old 2. Functional component-New
//React Functional Component= A js function which returns jsx/react element

const Heading2=()=>{
    return(
        <h1 id="heading2">
            Namaste React Using Jsxgggg
        </h1>
    )
}

//component composition=> nesting of components
// any js code can be written inside curly braces
console.log(<Heading2/>)
root.render(<Heading2/>)

