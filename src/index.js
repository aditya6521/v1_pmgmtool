import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {applyMiddleware, compose, createStore} from "redux";
import rootReducer from './store/reducer/rootReducer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createFirestoreInstance, getFirestore, reduxFirestore } from 'redux-firestore';
import { getFirebase, ReactReduxFirebaseProvider } from 'react-redux-firebase';
import firebase from "firebase/app";
import fbConfig from './firebase/firebase_config';


const store=createStore(rootReducer,
  compose(
  applyMiddleware(thunk.withExtraArgument({getFirebase,getFirestore})),
  reduxFirestore(firebase,fbConfig)
  )
  );


  const myConfig = {
    userProfile: 'users',
    useFirestoreForProfile: true,
    attachAuthIsReady:true
  };


  const rrfProps = {
      firebase,
      config: myConfig, fbConfig,
      dispatch: store.dispatch,
      createFirestoreInstance
    };

    


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
      <App />
      </ReactReduxFirebaseProvider>
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

