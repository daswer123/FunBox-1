import 'react-app-polyfill/ie11'; // Специальные полифилы для работы на IE11
import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/app"

import './styles/all.scss';


//Вся структура проекта в компоненте App
ReactDOM.render(
    <App/>,
  document.getElementById('root')
);
