import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import getMuiTheme from 'material-ui/styles/getMuiTheme';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

//setting color and heigt of header
// const muiTheme = getMuiTheme({
//     palette : {
//         primary1Color: '#21412a',
//     },
//     appBar: {
//         height : 50,
//     },
// });

ReactDOM.render(  <App />, document.getElementById('root'));
registerServiceWorker();
  