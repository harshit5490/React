function customrender(maincontainer,reactElement){
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;
    for (const prop in reactElement.props) {
       if(prop === reactElement.children) continue
       domElement.setAttribute(prop, reactElement.props[prop]);
    }
    maincontainer.appendChild(domElement);
}
const reactElement = {
    type : 'a',
    props : {
        href : "https://google.com",
        target : "_blank",
    },
    children : 'click me to visit google',
}
const maincontainer = document.querySelector('#root');

customrender(maincontainer,reactElement);