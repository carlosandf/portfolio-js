//import Template from '@templates/Template.js';
import React from 'react';
import ReactDOM from 'react-dom';
import App from '@components/App.jsx';
import '@styles/main.css';
import '@styles/vars.styl';
import getData from './utils/getData.js';

// (async function App() {
//   const main = null || document.getElementById('main');
//   main.innerHTML = await Template();
// })();


(async () => { 
    
    const data = await getData();

    ReactDOM.render(
        <App 
            namefirst={data.name.first}
            namelast={data.name.last}
            alt={data.name.first}
            picturelarge={data.picture.large}
            locationCountry={data.location.country}
            email={data.email}
        />, 
        document.getElementById('main')
    );

})()





