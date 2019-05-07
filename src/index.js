import React from 'react'
import { render } from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import './public/scss/index.scss'
import App from "./main/App";

render(
    <App />,
    document.getElementById('app'))
