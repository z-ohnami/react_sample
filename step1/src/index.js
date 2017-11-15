import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Clock from './Clock';
import Toggle from './Toggle';
import NameForm from './NameForm';
import EssayForm from './EssayForm';
import ReservationForm from './ReservationForm';
import Calculator from './Calculator';
import registerServiceWorker from './registerServiceWorker';

// function formatName(user) {
//   return user.firstName + ' ' + user.lastName;
// }
//
// const user = {
//   firstName: 'Harper',
//   lastName: 'Perez'
// };
//
// const element = (
//   <h1 className="greeting">
//     Hello, {formatName(user)}!
//   </h1>
// );

// function tick() {
//   const element = (
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>It is {new Date().toLocaleTimeString()}.</h2>
//     </div>
//   );
//   ReactDOM.render(
//     element,
//     document.getElementById('root')
//   );
// }
//
// setInterval(tick, 1000);

// ReactDOM.render(element, document.getElementById('root'));

ReactDOM.render(<Calculator />, document.getElementById('root'));
// ReactDOM.render(<ReservationForm />, document.getElementById('root'));
// ReactDOM.render(<EssayForm />, document.getElementById('root'));
// ReactDOM.render(<NameForm />, document.getElementById('root'));
// ReactDOM.render(<Toggle />, document.getElementById('root'));
// ReactDOM.render(<Clock />, document.getElementById('root'));
// ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
