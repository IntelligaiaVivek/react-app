
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


import './index.css';

import 'semantic-ui-css/semantic.min.css'
import { Menu, Segment } from 'semantic-ui-react'

import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";

ReactDOM.render(
<> 
<BrowserRouter>
<App></App>
</BrowserRouter>
</>, 
document.getElementById('root'));

