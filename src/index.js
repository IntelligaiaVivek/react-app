
import React from 'react';
import ReactDOM from 'react-dom';

const cssStyle = {};
let curDate = new Date();
let currentHour = curDate.getHours();
let getMsg = '';

if(currentHour > 4 && currentHour < 12){
  getMsg = 'Good Morning';
  cssStyle.color = 'Green';
}
else if(currentHour > 12 && currentHour < 19){
  getMsg = 'Good Afternoon';
  cssStyle.color = 'orange';
}
else {
  getMsg = 'Good Night';
  cssStyle.color = 'Blue';
}
ReactDOM.render(<> <h1 style={cssStyle}>{getMsg}</h1></>, document.getElementById('root'));

