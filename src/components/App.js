import React, { Component } from 'react';
import { BrowserRouter as Brouter, Routes, Route  } from 'react-router-dom'
import { Provider } from "react-redux";
import store from "../redux/store";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { styleApp } from "./general/StyleApp";
import "../global/css/App.css";
import Messages from './general/Messages'
import { ReactNotifications } from 'react-notifications-component'
import Main from "./general/app/Main";

class App extends Component {

  render() {
    return (
      <Provider store={store}>
         <ReactNotifications />
         
        <MuiThemeProvider theme={styleApp}>
          <Brouter>
            <Routes>
              <Route exact path="/" element={<Main/>} />
            </Routes>
            <Messages />
          </Brouter>
        </MuiThemeProvider>
      </Provider>
    );
  }
}


export default App;
