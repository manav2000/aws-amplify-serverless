import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore'
import Amplify from "aws-amplify";
import { AmazonAIPredictionsProvider } from '@aws-amplify/predictions';
import awsExports from "./aws-exports";

Amplify.configure(awsExports);
Amplify.addPluggable(new AmazonAIPredictionsProvider());
const store = ConfigureStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
