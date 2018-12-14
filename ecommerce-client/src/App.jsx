import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { Provider } from 'react-redux';

// redux stuff
import store from './redux/store';

// style
import './App.css';

// components
import Nav from './components/Nav';
import Routes from './Routes';
import Dialog from './components/Dialog';

const client = new ApolloClient({ uri: "http://localhost:4000" });

class App extends Component {
  render() {
    return (
      <Router>
        <ApolloProvider client={client}>
          <Provider store={store}>
            <div className="app">
              <Nav />
              <Routes />
              <Dialog />
            </div>
          </Provider>
        </ApolloProvider>
      </Router>
    );
  }
}

export default App;
