function customRender(reactElement, reactContainer){
     // const dom = document.createElement(reactElement.tag);
     // dom.innerHTML = reactElement.children;
     // dom.setAttribute('href', reactElement.props.href)
     // dom.setAttribute('target', reactElement.props.target)
     
     // reactContainer.appendChild(dom);
     
     const dom = document.createElement(reactElement.tag);
     dom.innerHTML = reactElement.children;

     for (const prop in reactElement.props) {
         dom.setAttribute(prop, reactElement.props[prop])
     }

     reactContainer.appendChild(dom);
}


const reactElement= {
     tag : 'a',
     props : {
          href: 'https://google.com',
          target: '_self'
     },
     children : 'click me to visit google'

}


const mainContainer = document.querySelector('#root');

customRender(reactElement, mainContainer);




