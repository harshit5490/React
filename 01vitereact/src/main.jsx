import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function Chai(){
    return (<h1>chai aur code</h1>)
}
const reactElement = {
    type : 'a',
    props : {
        href : "https://google.com",
        target : "_blank",
    },
    children : 'click me to visit google',
}
const element = (
    <a href='https://google.com' target='_blank'>visit google</a>
)
const anotherElement = " made by harshit";
const finalElement = React.createElement(
    'a',
    {
        href : "https://google.com",
        target : "_blank",
    },
    'visit to google',
    anotherElement // variable inject
)

ReactDOM.createRoot(document.getElementById('root')).render(
  
    // <Chai /> // this will work but not a good pratice
    // Chai()  this will also work same reason is above
    // <reactElement /> , reactElement() this both will not work because there is bundler who format the element in thier format
    // not work your given format
    // element  this will work but the good practice
    // finalElement
    <App />
  
)
