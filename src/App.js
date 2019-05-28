import React, { Component } from "react";
// import { View, Text } from "react-native";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import firebase from "firebase";
import ReduxThunk from "redux-thunk"; //Wiring up the middle ware :)

import reducers from "./reducers";
// import LoginForm from "./components/LoginForm";
import Router from "./Router";

class App extends Component {
  componentWillMount() {
    // Your web app's Firebase configuration
    const firebaseConfig = {
      apiKey: "AIzaSyCtdLCnjmNr5pElF2PlNcFLr8vTfN2-QD8",
      authDomain: "rnapp-mgr.firebaseapp.com",
      databaseURL: "https://rnapp-mgr.firebaseio.com",
      projectId: "rnapp-mgr",
      storageBucket: "rnapp-mgr.appspot.com",
      messagingSenderId: "713468196922",
      appId: "1:713468196922:web:29f8482b5530f09c"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router />
        {/* <LoginForm /> */}
        {/* <View>
          <Text>Bismillah Redux Manager Project</Text>
        </View> */}
      </Provider>
    );
  }
}

export default App;
